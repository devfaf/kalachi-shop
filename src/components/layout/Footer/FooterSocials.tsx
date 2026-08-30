"use client";

import { Box, Typography } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import EitaaIcon from "@/assets/social/eitaa.svg";
import BaleIcon from "@/assets/social/bale.svg";
import AppInput from "@/components/common/AppInput";
import Image from "next/image";

const socialLinks = [
  {
    title: "واتساپ",
    icon: <FaWhatsapp />,
    href: "#",
  },
  {
    title: "آپارات",
    icon: <SiAparat />,
    href: "#",
  },
  {
    title: "بله",
    icon: (
      <Image
        src={BaleIcon}
        alt=""
        width={32}
        height={32}
        style={{
          display: "block",
        }}
      />
    ),
    href: "#",
  },
  {
    title: "ایتا",
    icon: (
      <Image
        src={EitaaIcon}
        alt=""
        width={32}
        height={32}
        style={{
          display: "block",
        }}
      />
    ),
    href: "#",
  },
];

const FooterSocials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        ما را در شبکه‌های اجتماعی دنبال کنید
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {socialLinks.map(({ title, icon, href }) => (
          <Box
            key={title}
            component="a"
            href={href}
            aria-label={title}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "common.black",
              fontSize: 32,
              transition: "0.2s",

              "& img": {
                filter: "grayscale(1) brightness(0)",
                transition: "0.2s",
              },

              "&:hover": {
                color: "primary.main",
                transform: "translateY(-2px)",

                "& img": {
                  // رنگ primary تقریبی: #0F766E
                  filter:
                    "brightness(0) saturate(100%) invert(33%) sepia(39%) saturate(1014%) hue-rotate(128deg) brightness(88%) contrast(91%)",
                },
              },
            }}
          >
            {icon}
          </Box>
        ))}
      </Box>

      <Typography
        component="p"
        sx={{
          fontWeight: 700,
          fontSize: 18,
          mt: 1,
        }}
      >
        عضویت در خبرنامه
      </Typography>

      <AppInput
        placeholder="شماره موبایل خود را وارد نمایید"
        buttonText="ثبت"
      />
    </Box>
  );
};

export default FooterSocials;