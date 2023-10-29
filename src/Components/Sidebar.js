import { AddToQueue, PersonAddAlt } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NewUserForm from "./NewUserForm";
import NewDeviceForm from "./NewDeviceForm";

const Sidebar = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const [openNewUser, setOpenNewUser] = useState(false);
  const [openNewDeviceForm, setOpenNewDeviceForm] = useState(false);
  const openNewUserForm = ()=> setOpenNewUser(true);
  const openDeviceForm = ()=> setOpenNewDeviceForm(true);

  const drawer = (
    <div>
      <Typography variant="h4" sx={{color: 'teal',display: 'flex', alignItems:'center', justifyContent:'center'}}>
         IoT
      </Typography>
      <Divider />
      <NewUserForm open={openNewUser} setOpen={setOpenNewUser}/>
      <NewDeviceForm open={openNewDeviceForm} setOpen={setOpenNewDeviceForm}/>
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={openNewUserForm}>
              <ListItemIcon>
                <PersonAddAlt/>
              </ListItemIcon>
              <ListItemText primary={'New User'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={openDeviceForm}>
              <ListItemIcon>
                <AddToQueue/>
              </ListItemIcon>
              <ListItemText primary={'New Device'} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
