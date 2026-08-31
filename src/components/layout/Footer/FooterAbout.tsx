"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import Enamad from "@/assets/validity/enamad.png";
import Samandehi from "@/assets/validity/samandehi.png";
import Union from "@/assets/validity/union.png";

const FooterAbout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",

        // Tablet / Mobile
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "right" },
      }}
    >
      {/* About */}
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 16, md: 18 },
            mb: 1.5,
          }}
        >
          فروشگاه اینترنتی کالاچی، بررسی، انتخاب و خرید آنلاین
        </Typography>

        <Typography
          component="p"
          color="text.secondary"
          sx={{
            fontSize: 14,
            lineHeight: 2,
            maxWidth: 900,
          }}
        >
          کالاچی به عنوان یکی از فروشگاه‌های اینترنتی، با پایبندی به اصول
          مشتری‌مداری، تضمین کیفیت و ارائه خدمات مناسب تلاش می‌کند تجربه‌ای
          مطمئن و آسان برای خرید آنلاین فراهم کند. در کالاچی می‌توانید
          محصولات مورد نیاز خود را بررسی کرده، مقایسه کنید و با اطمینان
          خرید خود را انجام دهید.
        </Typography>
      </Box>

      {/* Validity */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexShrink: 0,
        }}
      >
        <Image
          src={Enamad}
          alt="نماد اعتماد الکترونیکی"
          width={80}
          height={80}
        />

        <Image
          src={Samandehi}
          alt="نماد ساماندهی"
          width={80}
          height={80}
        />

        <Image
          src={Union}
          alt="عضو اتحادیه کسب و کارهای مجازی"
          width={80}
          height={80}
        />
      </Box>
    </Box>
  );
};

export default FooterAbout;