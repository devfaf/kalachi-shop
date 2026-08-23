import { Box, Button, Popper, Paper } from "@mui/material";
import { navItems } from "@/components/data/navigation/navItems"
import { useState } from "react";
import type { NavItem } from "@/components/data/navigation/navItems";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const [subMenuAnchor, setSubMenuAnchor] =
        useState<HTMLElement | null>(null);
    const [activeChild, setActiveChild] =
        useState<number | null>(null);

    const openSubMenu = (e: React.MouseEvent<HTMLElement>,
        item: NavItem,
        index: number,
    ) => {
        if (item.children) {
            setAnchorEl(e.currentTarget)
            setActiveItem(index)
        }
    }
    const closeSubMenu = () => {
        setAnchorEl(null);
        setActiveItem(null);
    };

    return (
        <Box>
            {
                navItems.map((item, index) => {
                    return (
                        <Button
                            key={item.label}
                            startIcon={
                                <Box
                                    component={item.icon}
                                />
                            }
                            onMouseEnter={(event) => openSubMenu(
                                event, item, index
                            )}
                        >
                            {item.label}
                        </Button>
                    )
                })
            }
            <Popper
                open={anchorEl !== null}
                anchorEl={anchorEl}
                placement="bottom-start"
                onMouseLeave={() => {
                    setAnchorEl(null);
                    setActiveItem(null);
                }}
            >
                <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    p:2,
                    borderRadius: "0 0 16px 16px",
                }}
                >
                    {activeItem !== null &&
                        navItems[activeItem].children?.map((child) => (
                            <Button key={child.label}>
                                {child.label}
                            </Button>
                        ))}
                </Box>
            </Popper>
        </Box>
    );
}
// <Box
//     component="nav"
//     sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1,
//     }}
// >
//     {navItems.map((item, index) => {
//         const Icon = item.icon;
//         const hasChildren = Boolean(item.children);

//         return (
//             <Box
//                 key={item.label}
//                 onMouseEnter={(event) => {
//                     if (hasChildren) {
//                         setAncherEl(event.currentTarget);
//                         setActiveItem(index);
//                     }
//                 }}
//             >
//                 <Button
//                     startIcon={
//                         <Box
//                             component={Icon}
//                             sx={{
//                                 fontSize: 20,
//                             }}
//                         />
//                     }
//                 >
//                     {item.label}
//                 </Button>
//             </Box>
//         );
//     })}

//     <Popper
//         open={ancherEl !== null}
//         anchorEl={ancherEl}
//         placement="bottom-start"
//     >
//         <Paper
//             elevation={3}
//             sx={{
//                 mt: 1,
//                 p: 2,
//                 minWidth: 220,
//             }}
//         >
//             {activeItem !== null &&
//                 navItems[activeItem].children?.map((child, index) => (
//                     <Box
//                         key={child.label}
//                         onMouseEnter={(event) => {
//                             if (child.children) {
//                                 setSubMenuAnchor(event.currentTarget);
//                                 setActiveChild(index);
//                             }
//                         }}
//                     >
//                         <Button
//                             fullWidth
//                             sx={{
//                                 justifyContent: "space-between",
//                             }}
//                         >
//                             {child.label}
//                         </Button>
//                     </Box>
//                 ))}
//         </Paper>
//     </Popper>

//     <Popper
//         open={subMenuAnchor !== null}
//         anchorEl={subMenuAnchor}
//         placement="right-start"
//     >
//         <Paper
//             elevation={3}
//             sx={{
//                 ml: 1,
//                 p: 1,
//                 minWidth: 200,
//             }}
//         >
//             {activeItem !== null &&
//                 activeChild !== null &&
//                 navItems[activeItem].children?.[activeChild].children?.map(
//                     (item) => (
//                         <Button
//                             key={item.href}
//                             href={item.href}
//                             fullWidth
//                             sx={{
//                                 justifyContent: "flex-start",
//                             }}
//                         >
//                             {item.label}
//                         </Button>
//                     )
//                 )}
//         </Paper>
//     </Popper>
// </Box>