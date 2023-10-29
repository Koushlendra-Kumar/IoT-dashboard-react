import { Box, Toolbar, Typography } from "@mui/material";
import DeviceCard from "./DeviceCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = ({ drawerWidth }) => {
  const [devices, setDevices] = useState([]);
  useEffect(()=>{
    const getAllDevices = async ()=>{
      await axios.get('https://smart-devices-dashboard.up.railway.app/getAllDevices').then((res)=>{
        setDevices(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    getAllDevices();
  },[devices])
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      <Box component="div" sx={{ display:'flex', flexWrap:'wrap', gap: '10px'}}>
        {devices.length >0 ? devices.map(device => <DeviceCard key={device._id} device={device}/>): <Typography variant="p">No device found</Typography>}
      </Box>
    </Box>
  );
};

export default Main;
