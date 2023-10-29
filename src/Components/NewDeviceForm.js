import React, { useEffect } from 'react';
import {Box, Button, Typography, Grid, Modal,Paper, Container, MenuItem, Select, InputLabel} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
};

function NewDeviceForm({open, setOpen}) {
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState([])
  const clearForm = () => {
    setSelectedUser('')
    handleClose();
  }
  const handleClose = () => setOpen(false);
  const allotDevice = async () =>{
    console.log(selectedUser)
    await axios.post('https://smart-devices-dashboard.up.railway.app/allotDevice', {userId: selectedUser})
    clearForm();
  }
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('https://smart-devices-dashboard.up.railway.app/getAllUsers');
        const users = response.data;
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [users]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="div" maxWidth="sm" sx={style}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Create and allot new device
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <InputLabel>Users</InputLabel>
        <Select
          fullWidth
          labelId="user"
          id="user"
          value={selectedUser}
          label="Users"
          onChange={(e)=> setSelectedUser(e.target.value)}
        >
          {users.length > 0 ? users.map(user=><MenuItem key={user._id} value={user._id}>{user.name}</MenuItem>): <MenuItem value={'none'}>No user</MenuItem>}
        </Select>
                </Grid>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ mt: 3, ml: 1 }} onClick={clearForm}>Cancel</Button>

                <Button variant="contained" sx={{ mt: 3, ml: 1 }} onClick={allotDevice}>
                  Save
                </Button>
              </Box>
            </React.Fragment>
          </Paper>
        </Container>
      </Modal>
    </div>
  );
}
export default NewDeviceForm;