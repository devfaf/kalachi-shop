import { Box, type SxProps, type Theme } from "@mui/material";

const DistanceLine = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Box
      sx={{
        width: "1px",
        height: "20px",
        bgcolor: "divider",
        ...sx,
      }}
    />
  );
};

export default DistanceLine;