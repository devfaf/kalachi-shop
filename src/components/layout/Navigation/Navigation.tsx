import { Box, Button, Menu, MenuItem } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
import {
    KeyboardArrowDownOutlined,
    HomeOutlined,
    Inventory2Outlined,
    QuestionMarkOutlined,
    LocalShippingOutlined,
    ArticleOutlined,
    ContactPhoneOutlined,
    LocalOfferOutlined,
} from "@mui/icons-material";
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
    )
}
export default Navigation