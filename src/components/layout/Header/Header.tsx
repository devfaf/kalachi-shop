"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
} from "@mui/material";

import {
  KeyboardArrowDownOutlined,
  LocationOnOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  Inventory2Outlined,
  QuestionMarkOutlined,
  LocalShippingOutlined,
  ArticleOutlined,
  ContactPhoneOutlined,
  LocalOfferOutlined,
  SearchOutlined,
  CameraAltOutlined,
} from "@mui/icons-material";

import { categories, productsMenu } from "./data/navigation";

const navButtonSx = {
  minWidth: "auto",
  px: 1.4,
  py: 1,
  color: "text.primary",
  whiteSpace: "nowrap",
  fontWeight: 500,
  gap: 1,

  "& .MuiButton-startIcon": {
    margin: 0,
    color: "text.secondary",
  },

  "& .MuiButton-endIcon": {
    margin: 0,
    color: "text.secondary",
  },
};

const Header = () => {
  const [categoryMenu, setCategoryMenu] =
    useState<null | HTMLElement>(null);

  const [productsMenuAnchor, setProductsMenuAnchor] =
    useState<null | HTMLElement>(null);

  const openCategoryMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setCategoryMenu(event.currentTarget);
  };

  const closeCategoryMenu = () => {
    setCategoryMenu(null);
  };

  const openProductsMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const closeProductsMenu = () => {
    setProductsMenuAnchor(null);
  };

  return (
    <AppBar
      component="header"
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      {/* ================= TOP HEADER ================= */}
      <Toolbar
        sx={{
          minHeight: 105,
          px: { xs: 2, md: 4 },
          gap: 4,
        }}
      >
        {/* Logo + Search + Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="کالاچی"
                width={175}
                height={65}
                priority
              />
            </Link>
          </Box>

          {/* Search */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="جستجوی محصول..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 48,
                  borderRadius: 2.5,
                  bgcolor: "background.default",

                  "& fieldset": {
                    borderColor: "#E5E7EB",
                  },

                  "&:hover fieldset": {
                    borderColor: "#E5E7EB",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#E5E7EB",
                  },
                },

                "& .MuiInputBase-input": {
                  textAlign: "right",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        aria-label="جستجو"
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: "primary.main",
                          color: "#fff",
                          borderRadius: 2,

                          "&:hover": {
                            bgcolor: "primary.main",
                          },
                        }}
                      >
                        <SearchOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),

                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        size="small"
                        aria-label="جستجوی تصویری"
                        sx={{ color: "text.secondary" }}
                      >
                        <CameraAltOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          {/* Location */}
          <Button
            startIcon={<LocationOnOutlined />}
            sx={{
              ...navButtonSx,
              flexShrink: 0,
            }}
          >
            انتخاب شهر
          </Button>
        </Box>

        {/* Other Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexShrink: 0,
            pl: 2,
          }}
        >
          <IconButton sx={{ color: "text.secondary" }}>
            <PhoneOutlined />
          </IconButton>

          <Button
            sx={{
              minWidth: "auto",
              color: "text.primary",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            ورود / ثبت‌نام
          </Button>

          <IconButton sx={{ color: "text.secondary" }}>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* ================= NAVIGATION ================= */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 56,
          px: { xs: 2, md: 4 },
          borderTop: "1px solid #F0F0F0",
          bgcolor: "background.paper",
          overflowX: "auto",
        }}
      >
        {/* Main navigation links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {/* Category */}
          <Button
            startIcon={<Inventory2Outlined />}
            endIcon={<KeyboardArrowDownOutlined />}
            onClick={openCategoryMenu}
            sx={{
              ...navButtonSx,
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            دسته‌بندی کالاها
          </Button>

          <Menu
            anchorEl={categoryMenu}
            open={Boolean(categoryMenu)}
            onClose={closeCategoryMenu}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                onClick={closeCategoryMenu}
              >
                {category}
              </MenuItem>
            ))}
          </Menu>

          {/* Home */}
          <Button
            component={Link}
            href="/"
            startIcon={<HomeOutlined />}
            sx={navButtonSx}
          >
            صفحه اصلی
          </Button>

          {/* Products */}
          <Button
            startIcon={<Inventory2Outlined />}
            endIcon={<KeyboardArrowDownOutlined />}
            onClick={openProductsMenu}
            sx={navButtonSx}
          >
            لیست کالاها
          </Button>

          <Menu
            anchorEl={productsMenuAnchor}
            open={Boolean(productsMenuAnchor)}
            onClose={closeProductsMenu}
          >
            {productsMenu.map((item) => (
              <MenuItem
                key={item}
                onClick={closeProductsMenu}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* FAQ */}
          <Button
            component={Link}
            href="/faq"
            startIcon={<QuestionMarkOutlined />}
            sx={navButtonSx}
          >
            سوالی دارید؟
          </Button>

          {/* Tracking */}
          <Button
            component={Link}
            href="/track-order"
            startIcon={<LocalShippingOutlined />}
            sx={navButtonSx}
          >
            پیگیری سفارش
          </Button>

          {/* Blog */}
          <Button
            component={Link}
            href="/blog"
            startIcon={<ArticleOutlined />}
            sx={navButtonSx}
          >
            بلاگ
          </Button>

          {/* Contact */}
          <Button
            component={Link}
            href="/contact"
            startIcon={<ContactPhoneOutlined />}
            sx={navButtonSx}
          >
            تماس با ما
          </Button>
        </Box>

        {/* Special Sale */}
        <Button
          component={Link}
          href="/special-offers"
          startIcon={<LocalOfferOutlined />}
          sx={{
            ...navButtonSx,
            color: "secondary.main",
            fontWeight: 700,
            flexShrink: 0,
            ml: 3,
          }}
        >
          فروش ویژه
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;