import { AppBar, Typography, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
