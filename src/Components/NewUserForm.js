import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Modal,
  Paper,
  Container,
} from "@mui/material";
import axios from "axios";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../firebase.init'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

function NewUserForm({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const handleClose = () => setOpen(false);
  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setWarning("")
    handleClose();
  };
  const createNewUser = async () => {
    const newUser = {
      name,
      email,
    };
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await axios.post("https://smart-devices-dashboard.up.railway.app/createNewUser", newUser).then((res)=>{
          clearForm();
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        setWarning(`${errorMessage} ${error.code}`);
      });
  };
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
                Add new user
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Typography variant="p" sx={{color:'red'}}>{warning}</Typography>
            </React.Fragment>
            <React.Fragment>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ mt: 3, ml: 1 }} onClick={clearForm}>
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={createNewUser}
                >
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
export default NewUserForm;
