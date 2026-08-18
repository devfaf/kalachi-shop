"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";

import {
  KeyboardArrowDown,
  LocationOn,
  Phone,
  ShoppingCart,
} from "@mui/icons-material";

import {
  HeaderToolbar,
  LogoWrapper,
  SearchWrapper,
  ActionsWrapper,
  Navigation,
  NavigationItem,
  NavigationLink,
} from "./Header.styles";

import {
  categories,
  productsMenu,
} from "./data/navigation";

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
    <AppBar component="header" position="static">
      <HeaderToolbar>
        <LogoWrapper>
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="کالاچی"
              width={350}
              height={130}
            />
          </Link>
        </LogoWrapper>

        <SearchWrapper>
          <TextField
            fullWidth
            placeholder="جستجوی محصول..."
          />
        </SearchWrapper>

        <ActionsWrapper>
          <Button startIcon={<LocationOn />}>
            انتخاب شهر
          </Button>

          <IconButton>
            <Phone />
          </IconButton>

          <Button>
            ورود / ثبت‌نام
          </Button>

          <IconButton>
            <Badge badgeContent={3}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </ActionsWrapper>
      </HeaderToolbar>

      <Navigation>
        {/* دسته‌بندی کالاها */}
        <NavigationItem>
          <Button
            endIcon={<KeyboardArrowDown />}
            onClick={openCategoryMenu}
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
        </NavigationItem>

        {/* صفحه اصلی */}
        <NavigationLink
          as={Link}
          href="/"
        >
          صفحه اصلی
        </NavigationLink>

        {/* لیست کالاها */}
        <NavigationItem>
          <Button
            endIcon={<KeyboardArrowDown />}
            onClick={openProductsMenu}
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
        </NavigationItem>

        {/* سوالی دارید؟ */}
        <NavigationLink
          as={Link}
          href="/faq"
        >
          سوالی دارید؟
        </NavigationLink>

        {/* پیگیری سفارش */}
        <NavigationLink
          as={Link}
          href="/track-order"
        >
          پیگیری سفارش
        </NavigationLink>

        {/* بلاگ */}
        <NavigationLink
          as={Link}
          href="/blog"
        >
          بلاگ
        </NavigationLink>

        {/* تماس با ما */}
        <NavigationLink
          as={Link}
          href="/contact"
        >
          تماس با ما
        </NavigationLink>

        {/* فروش ویژه */}
        <NavigationLink
          as={Link}
          href="/special-offers"
        >
          فروش ویژه
        </NavigationLink>
      </Navigation>
    </AppBar>
  );
};

export default Header;