import { Box, IconButton, Drawer } from "@mui/material";
import Logo from "../Logo";
import Search from "../Search";
import Contact from "../Contact";
import Auth from "../Auth";
import Cart from "../Cart";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const mobileMenuHandler = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <Box
            sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                width: "100%",
                gap: 1.5,
            }}
        >
            {/* Row 1 */}
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 60,
                }}
            >
                {/* Hamburger */}
                <IconButton
                    onClick={mobileMenuHandler}
                >
                    <Box
                        component={HiOutlineBars3}
                        sx={{
                            fontSize: "30px"
                        }}
                    />
                </IconButton>

                {/* Logo - دقیقاً وسط */}
                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <Logo />
                </Box>

                {/* Contact */}
                <Contact />
            </Box>

            {/* Row 2 */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                }}
            >
                <Search />

                <Auth />

                <Cart />
            </Box>
            {/* Drawer */}
            <Drawer
                anchor="right"
                open={isMenuOpen}
                onClose={mobileMenuHandler}
            >
                <MobileMenu onClose={mobileMenuHandler} />
            </Drawer>
        </Box>
    );
};

export default MobileHeader;