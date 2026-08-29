"use client";

import Logo from "./Logo";
import Search from "./Search";
import Location from "./Location";
import Contact from "./Contact";
import Auth from "./Auth";
import Cart from "./Cart";
import Navigation from "../Navigation/Navigation";
import MobileHeader from "./MobileMenu/MobileHeader";
import DistanceLine from "@/components/common/DistanceLine";

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
        pb: {
          xs: 2,
          md: 0,
        }
      }}
    >
      {/* ================= TOP HEADER ================= */}
      <Toolbar
        sx={{
          minHeight: 105,
          px: { xs: 2, md: 4 },
          gap: 2,
        }}
      >
        {/* Logo + Search + Location */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 2 },
            flex: 1,
            minWidth: 0,
            height: "80px",
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
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            pl: 2,
          }}
        >

          <Contact />
          <DistanceLine />

          <Auth />

          <DistanceLine />

          <Cart />
        </Box>


        {/* Mobile / Tablet */}
        <MobileHeader />
      </Toolbar>


      {/* ================= NAVIGATION ================= */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Navigation />
      </Box>
    </AppBar>
  );
};

export default Header;