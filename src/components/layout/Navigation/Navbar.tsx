import { Box, Button, Popper, Link } from "@mui/material";
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
            component={"ul"}
            sx={{
                display: "flex",
            }}
        >
            {
                navItems.map((item, index) => {
                    return (
                        <Box
                            component="li"
                        >
                            <Link href={item.href}
                                key={item.label}
                                sx={{
                                    color: "text.primary",
                                    display: "flex",
                                    gap: "5px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: "10px",
                                    textDecoration: "none",
                                    "&:hover": {
                                        color: "text.primary",
                                    }
                                }}
                                onMouseEnter={(event) => openSubMenu(
                                    event, item, index
                                )}
                            >
                                <Box
                                    component={item.icon}
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "20px",
                                    }}></Box>
                                {item.label}
                            </Link>
                        </Box>
                    )
                })
            }
            <Popper
                open={anchorEl !== null}
                anchorEl={anchorEl}
                placement="bottom-end"
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
        </Box >
    );
}
