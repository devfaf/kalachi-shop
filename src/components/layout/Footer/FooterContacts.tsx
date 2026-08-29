import { Box } from "@mui/material"
import Logo from "../Header/Logo"
import AppButton from "@/components/common/AppButton"
import DistanceLine from "@/components/common/DistanceLine"
const FooterContacts = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Logo />
                <AppButton>
                    برگشت با بالا
                </AppButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <Box>
                    <Box component={"span"}
                        sx={{
                            color: "text.secondary"
                        }}
                    >
                        شماره تماس:
                    </Box>
                    <Box component={"span"}>
                        061-535-10225
                    </Box>
                </Box>
                <DistanceLine />
                <Box>
                    <Box component={"span"}
                        sx={{
                            color: "text.secondary"
                        }}
                    >
                        آدرس ایمیل:
                    </Box>
                    <Box component={"span"}>

                        info@parskala.com
                    </Box>
                </Box>
                <DistanceLine />
                <Box>
                    هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
                </Box>
            </Box>
        </Box>
    )
}
export default FooterContacts