import { Box, Link } from "@mui/material";
import Navbar from "./Navbar";
import { LiaFireAltSolid } from "react-icons/lia";

const Navigation = () => {

    return (
        <Box
            component={"nav"}
            sx={{
                px:2,
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',

            }}
        >
            <Navbar />
            <Box>
                <ul>
                    <li>
                        <Link
                        href={"/"}
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            textDecoration:"none",
                            p:'10px',
                            fontWeight:700,
                            transition: "color 0.2s ease",
                            "&:hover":{
                                color:"primary.light"
                            }
                        }}
                        >
                            <Box
                            component={LiaFireAltSolid}
                            sx={{
                                fontSize:"25px"
                            }}
                            ></Box>
                            فروش ویژه
                        </Link>
                    </li>
                </ul>
            </Box>
        </Box>

    )
}
export default Navigation