
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
                        display: {
                            md:"grid",
                        },
                        flexDirection:{
                            xs:"column"
                        },
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
                <Box
                sx={{
                    color:"text.disabled",
                    fontSize:"12px",
                    pt:2,
                    borderTop:"1px solid",
                    borderTopColor:"divider",
                    fontWeight:"600"
                }}
                >
                    استفاده از مطالب فروشگاه اینترنتی پارس کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا می‌باشد. Copyright © 2020 - 2026
                </Box>
            </Box>
        </footer>
    )
}
export default Footer