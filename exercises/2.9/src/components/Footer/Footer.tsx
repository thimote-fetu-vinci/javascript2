import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <Box component="footer" sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'primary.main' }}>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {props.children}
      </Typography>
      <Box component="img" src={props.urlLogo} alt="logo" sx={{ height: 40, marginLeft: 2 }} />
    </Box>
  );
};

export default Footer;
