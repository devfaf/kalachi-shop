
import { Box } from "@mui/material"
import FooterContacts from "./FooterContacts"
import FooterLinks from "./FooterLinks"
import FooterSocials from "./FooterSocials"
import FooterAbout from "./FooterAbout"

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    py: 2,
                    px: 4,
                    bgcolor: "background.paper",
                    borderTop: "1px solid #E5E7EB",

                }}
            >
                <FooterContacts />
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: 4,
                        alignItems: "start",
                        py:4,
                    }}
                >
                    <FooterLinks />
                    <FooterSocials />
                </Box>
                <FooterAbout/>
            </Box>
        </footer>
    )
}
export default Footer