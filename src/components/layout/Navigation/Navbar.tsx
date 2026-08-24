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
        <Box
        sx={{
            display:"flex"
        }}
        >
            {
                navItems.map((item, index) => {
                    return (
                        <Button
                            key={item.label}
                            sx={{
                                color: "text.secondary",
                                display:"flex",
                                gap:"10px",
                                justifyContent:"center",
                                alignItems:"center"
                            }}
                            startIcon={
                                <Box
                                    component={item.icon}
                                    sx={{
                                        color: "text.secondary"
                                    }}
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
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        p: 2,
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
