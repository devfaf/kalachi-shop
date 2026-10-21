
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
