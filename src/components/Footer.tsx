import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", marginTop: "auto" }}>
      <Typography align="center" variant="body2">
        © 2025 - Meu Portfólio
      </Typography>
    </Box>
  );
};

export default Footer;
