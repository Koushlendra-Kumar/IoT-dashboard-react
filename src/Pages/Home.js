import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import Header from "../Components/Header";

const drawerWidth = 240;

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Main drawerWidth={drawerWidth} />
    </Box>
  );
}

export default Home;
