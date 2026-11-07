import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUserRole } from "@/lib/auth";

// دریافت اطلاعات کمپین برای پنل ادمین
export async function GET() {
  const role = await getCurrentUserRole();

  if (role !== "ADMIN") {
    return NextResponse.json(
      { error: "شما اجازه دسترسی به این بخش را ندارید." },
      { status: 403 }
    );
  }

  try {
    const campaign = await prisma.amazingOfferCampaign.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(campaign);
  } catch (error) {
    console.error("Failed to fetch campaign:", error);

    return NextResponse.json(
      { error: "دریافت اطلاعات کمپین ناموفق بود." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const role = await getCurrentUserRole();

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
      durationHours,
      isActive,
      autoRenew,
    } = body;

    const allowedDurations = [12, 24, 48, 72];

    if (
      !startsAt ||
      !allowedDurations.includes(durationHours) ||
      typeof isActive !== "boolean" ||
      typeof autoRenew !== "boolean"
    ) {
      return NextResponse.json(
        { error: "اطلاعات کمپین معتبر نیست." },
        { status: 400 }
      );
    }

    const startDate = new Date(startsAt);

    if (Number.isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: "زمان شروع کمپین معتبر نیست." },
        { status: 400 }
      );
    }

    const endDate = new Date(
      startDate.getTime() + durationHours * 60 * 60 * 1000
    );

    const existingCampaign =
      await prisma.amazingOfferCampaign.findFirst({
        orderBy: { createdAt: "desc" },
      });

    const campaignData = {
      name: name?.trim() || "شگفت‌انگیز کالاچی",
      startsAt: startDate,
      endsAt: endDate,
      durationHours,
      isActive,
      autoRenew,
    };

    const campaign = existingCampaign
      ? await prisma.amazingOfferCampaign.update({
          where: { id: existingCampaign.id },
          data: campaignData,
        })
      : await prisma.amazingOfferCampaign.create({
          data: campaignData,
        });

    return NextResponse.json(campaign);
  } catch (error) {
    console.error("Failed to save campaign:", error);

    return NextResponse.json(
      { error: "ذخیره کمپین ناموفق بود." },
      { status: 500 }
    );
  }
}