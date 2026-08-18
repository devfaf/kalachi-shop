import { styled } from "@mui/material/styles";
import { Box, Toolbar } from "@mui/material";

export const HeaderToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
});

export const LogoWrapper = styled(Box)({
  flexShrink: 0,

  "& img": {
    display: "block",
    width: "130px",
    height: "auto",
  },
});

export const SearchWrapper = styled(Box)({
  flex: 1,
  maxWidth: "600px",
});

export const ActionsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexShrink: 0,
});

export const Navigation = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "28px",
  padding: "8px 24px",
});

export const NavigationItem = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const NavigationLink = styled("a")({
  textDecoration: "none",
  cursor: "pointer",
  color: "inherit",
  fontSize: "14px",
});