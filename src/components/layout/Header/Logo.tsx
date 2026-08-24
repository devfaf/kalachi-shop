import { Box, Link } from "@mui/material"
import Image from "next/image"

const Logo = () => {
    return (
        <Box
            sx={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Link href="/"
            aria-label="فروشگاه اینترنتی کالاچی">
            <Box 
                sx={{
                    display:"flex"
                }}
            >
                <Image
                    src="/logo/logo.png"
                    alt="کالاچی"
                    width={130}
                    height={50}
                    priority
                />
            </Box>
            </Link>
        </Box>
    )
}
export default Logo