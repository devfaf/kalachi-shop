
import { Box } from "@mui/material"
import FooterContacts from "./FooterContacts"
import FooterLinks from "./FooterLinks"

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
                <FooterLinks />
            </Box>
        </footer>
    )
}
export default Footer