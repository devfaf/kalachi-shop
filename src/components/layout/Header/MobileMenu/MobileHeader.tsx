import { Box } from "@mui/material";
import Logo from "../Logo";
import Search from "../Search";
import Contact from "../Contact";
import Auth from "../Auth";
import Cart from "../Cart";

const MobileHeader = () => {
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Contact />
                <Logo />
            </Box>

            {/* Row 2 */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Search />

                <Auth />
                <Cart />
            </Box>
        </Box>
    )
}
export default MobileHeader