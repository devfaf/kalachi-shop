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
            <Link href="/">
                <Image
                    src="/logo/logo.png"
                    alt="کالاچی"
                    width={175}
                    height={65}
                    priority
                />
            </Link>
        </Box>
    )
}
export default Logo