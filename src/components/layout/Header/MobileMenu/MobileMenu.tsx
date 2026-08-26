import { Box, Button, List, ListItem } from "@mui/material";
import { navItems } from "@/components/data/navigation/navItems";

const MobileMenu = () => {
  return (
    <Box
      sx={{
        width: 300,
        p: 2,
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.label}
              disablePadding
            >
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "flex-start",
                  color: "text.primary",
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "action.hover",
                    color: "primary.main",
                  },
                }}
              >
                {
                  Icon ? (
                    <Box
                      component={Icon}
                      sx={{
                        fontSize: 24,
                      }}
                    />
                  ) : null
                }
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