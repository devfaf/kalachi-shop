
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserRole } from "@/lib/auth";

export async function GET() {
  try {
    const now = new Date();

    let campaign = await prisma.amazingOfferCampaign.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    if (!campaign) {
      return NextResponse.json(null);
    }

    // تمدید خودکار کمپین منقضی‌شده
    if (campaign.endsAt <= now && campaign.autoRenew) {
      const durationMs = campaign.durationHours * 60 * 60 * 1000;

      if (durationMs <= 0) {
        return NextResponse.json(
          { error: "Invalid campaign duration" },
          { status: 500 }
        );
      }

      const elapsedPeriods =
        Math.floor(
          (now.getTime() - campaign.endsAt.getTime()) / durationMs
        ) + 1;

      const nextStartsAt = new Date(
        campaign.endsAt.getTime() + (elapsedPeriods - 1) * durationMs
      );

      const nextEndsAt = new Date(
        campaign.endsAt.getTime() + elapsedPeriods * durationMs
      );

      await prisma.amazingOfferCampaign.update({
        where: { id: campaign.id },
        data: {
          startsAt: nextStartsAt,
          endsAt: nextEndsAt,
        },
      });

      campaign = {
        ...campaign,
        startsAt: nextStartsAt,
        endsAt: nextEndsAt,
      };
    }

    // کمپین هنوز شروع نشده یا تمدید خودکار خاموش است
    if (campaign.startsAt > now || campaign.endsAt <= now) {
      return NextResponse.json(null);
    }

    return NextResponse.json({
      id: campaign.id,
      name: campaign.name,
      startsAt: campaign.startsAt,
      endsAt: campaign.endsAt,
      durationHours: campaign.durationHours,
      isActive: campaign.isActive,
      autoRenew: campaign.autoRenew,
    });
  } catch (error) {
    console.error("Failed to fetch amazing offer campaign:", error);

    return NextResponse.json(
      { error: "Failed to fetch campaign" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const role = await getCurrentUserRole();

  if (!role) {
    return NextResponse.json(
      { error: "ابتدا وارد حساب کاربری شوید." },
      { status: 401 }
    );
  }

  if (role !== "ADMIN") {
    return NextResponse.json(
      { error: "شما اجازه انجام این عملیات را ندارید." },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();

    const {
      name,
      startsAt,
      endsAt,
      durationHours = 17,
      isActive = false,
      autoRenew = false,
    } = body;

    if (!startsAt || !endsAt) {
      return NextResponse.json(
        { error: "زمان شروع و پایان کمپین الزامی است." },
        { status: 400 }
      );
    }

    const startDate = new Date(startsAt);
    const endDate = new Date(endsAt);

    if (
      Number.isNaN(startDate.getTime()) ||
      Number.isNaN(endDate.getTime()) ||
      endDate <= startDate
    ) {
      return NextResponse.json(
        { error: "زمان شروع و پایان کمپین معتبر نیست." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(durationHours) || durationHours <= 0) {
      return NextResponse.json(
        { error: "مدت کمپین باید عدد صحیح و مثبت باشد." },
        { status: 400 }
      );
    }

    const campaign = await prisma.amazingOfferCampaign.create({
      data: {
        name,
        startsAt: startDate,
        endsAt: endDate,
        durationHours,
        isActive,
        autoRenew,
      },
    });

    return NextResponse.json(campaign, { status: 201 });
  } catch (error) {
    console.error("Failed to create amazing offer campaign:", error);

    return NextResponse.json(
      { error: "ساخت کمپین ناموفق بود." },
      { status: 500 }
    );
  }
}

