
import { Box } from "@mui/material"
import FooterContacts from "./FooterContacts"

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
            </Box>
        </footer>
    )
}
export default Footer