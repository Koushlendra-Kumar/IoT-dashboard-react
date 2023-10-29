import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import auth from "../firebase.init"
import { signOut } from "firebase/auth";

const Header = ({ drawerWidth, handleDrawerToggle }) => {

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" variant="outlined" onClick={handleLogout}>Log out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
