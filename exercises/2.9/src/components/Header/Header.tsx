import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <Box component="header" sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'primary.main' }}>
      <Box component="img" src={props.urlLogo} alt="logo" sx={{ height: 40, marginRight: 2 }} />
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {props.children}
      </Typography>
    </Box>
  );
};

export default Header;
