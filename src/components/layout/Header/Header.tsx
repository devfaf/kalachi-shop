"use client";

import Logo from "./Logo";
import Search from "./Search";
import Location from "./Location";
import Support from "./Support";
import Auth from "./Auth";
import Cart from "./Cart";
import Navigation from "../Navigation/Navigation";

import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      component="header"
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      {/* ================= TOP HEADER ================= */}
      <Toolbar
        sx={{
          minHeight: 105,
          px: { xs: 2, md: 4 },
          gap: 4,
        }}
      >
        {/* Logo + Search + Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Logo */}
          <Logo />

          {/* Search */}
          <Search />

          {/* Location */}
          <Location />
        </Box>

        {/* Other Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexShrink: 0,
            pl: 2,
          }}
        >

          <Support />
          <Auth />

          <Cart />
        </Box>
      </Toolbar>

      {/* ================= NAVIGATION ================= */}
      <Navigation />
    </AppBar>
  );
};

export default Header;