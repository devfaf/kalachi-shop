import { Box, Button, Popper, Link } from "@mui/material";
import { navItems } from "@/components/data/navItems"
import { useState } from "react";
import { categories } from "@/components/data/categories";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

    const categoryParents = categories.filter(category => !category.parentId)

    const categoryChildren = categories.filter(category => category.parentId === activeCategoryId)
    

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
                            key={item.label}
                            onMouseEnter={(event) => {
                                if(item.label === "دسته‌بندی کالاها"){
                                    setAnchorEl(event.currentTarget)
                                }
                            }}

                        >
                            <Link href={item.href}
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
                    {
                        categoryParents.map((child) => (
                            <Button
                                key={child.id}
                                onMouseEnter={() => setActiveCategoryId(child.id)}
                            >
                                {child.name}
                            </Button>
                        ))
                    }
                </Box>
                {categoryChildren.map(submenu => (
                    <Box key={submenu.id}>
                        {submenu.name}
                    </Box>
                ))
                }
            </Popper>
        </Box >
    );
}
