import { Box, Button, Menu, MenuItem } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import {
    KeyboardArrowDownOutlined,
    QuestionMarkOutlined,
    LocalOfferOutlined,
} from "@mui/icons-material";
import { PiList } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RxFileText } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";

import { useState } from "react";
import { categories, productsMenu } from "../Header/data/navigation";
import { navButtonSx } from "../Header/style/navButtonStyle"

const Navigation = () => {

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
        <Box
            component="nav"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: 50,
                px: { md: 2 },
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
                    startIcon={<PiList />}
                    endIcon={<KeyboardArrowDownOutlined />}
                    onClick={openCategoryMenu}
                    sx={{
                        ...navButtonSx,
                        color: "text.primary",
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
                    startIcon={<HiOutlineHome />}
                    sx={{
                        ...navButtonSx,
                        color: "text.primary",
                    }}
                >
                    صفحه اصلی
                </Button>

                {/* Products */}
                <Button
                    startIcon={
                        <Box
                            component={AiOutlineShop}
                            sx={{
                                strokeWidth: .5,
                            }}
                        ></Box>
                    }
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
                            component={Link}
                            href={`/products/${item.toLowerCase()}`}
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
                    startIcon={
                        <Box
                            component={TbTruckDelivery}
                            sx={{
                                strokeWidth: 1.5,
                            }}
                        ></Box>}
                    sx={navButtonSx}
                >
                    پیگیری سفارش
                </Button>

                {/* Blog */}
                <Button
                    component={Link}
                    href="/blog"
                    startIcon={
                        <Box
                            component={RxFileText}
                        >

                        </Box>}
                    sx={navButtonSx}
                >
                    بلاگ
                </Button>

                {/* Contact */}
                <Button
                    component={Link}
                    href="/contact"
                    startIcon={
                        <Box
                            component={BsTelephone}
                            sx={{
                                fontSize: "18px !important"
                            }}
                        >

                        </Box>
                    }
                    sx={navButtonSx}
                >
                    تماس با ما
                </Button>
            </Box>

            {/* Special Sale */}
            <Button
                component={Link}
                href="/special-offers"
                sx={{
                    ...navButtonSx,
                    color: "text.primary",
                    fontWeight: 700,
                    flexShrink: 0,
                    ml: 3,
                    "&:hover": {
                        color: "primary.main",
                    }
                }}
                startIcon={
                    <Box
                        component={LocalOfferOutlined}
                        sx={{
                            fontWeight: 700,
                            color:"primary.main"
                        }}
                    >

                    </Box>
                }
            >
                فروش ویژه
            </Button>
        </Box>
    )
}
export default Navigation