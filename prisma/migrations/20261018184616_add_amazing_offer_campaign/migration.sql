-- CreateTable
CREATE TABLE "AmazingOfferCampaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'شگفت‌انگیز کالاچی',
    "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "durationHours" INTEGER NOT NULL DEFAULT 17,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "autoRenew" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AmazingOfferCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AmazingOfferCampaignToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AmazingOfferCampaignToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AmazingOfferCampaignToProduct_B_index" ON "_AmazingOfferCampaignToProduct"("B");

-- AddForeignKey
ALTER TABLE "_AmazingOfferCampaignToProduct" ADD CONSTRAINT "_AmazingOfferCampaignToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "AmazingOfferCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmazingOfferCampaignToProduct" ADD CONSTRAINT "_AmazingOfferCampaignToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
