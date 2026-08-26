import { Box, Button, List, ListItem, IconButton } from "@mui/material";
import { navItems } from "@/components/data/navigation/navItems";
import Logo from "../Logo";
import { HiOutlineXMark } from "react-icons/hi2";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <Box
      sx={{
        width: 300,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Logo />
        {/* Close button */}
        <IconButton
          onClick={onClose}
          aria-label="بستن منو"
        >
          <Box
            component={HiOutlineXMark}
            sx={{
              fontSize: 26,
            }}
          />
        </IconButton>
      </Box>

      {/* Navigation */}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.label}
              disablePadding
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "flex-start",
                  color: "text.primary",
                  px: 2,
                  py: 2,
                  borderRadius: 0,

                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {Icon ? (
                  <Box
                    component={Icon}
                    sx={{
                      fontSize: 24,
                    }}
                  />
                ) : null}

                {item.label}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default MobileMenu;