import {
  Card,
  CardActions,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Switch,
} from "@mui/material";

const DeviceCard = ({device}) => {

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardActions>
        <FormControl component="fieldset">
          <FormLabel component="legend">{device.alloted_to_user.name}</FormLabel>
          <FormGroup aria-label="position">
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label="Fan"
              labelPlacement="start"
              checked={device.state.fan ? true: false}
            />
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label="Light"
              labelPlacement="start"
              checked={device.state.light ? true: false}
            />
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label="Mis"
              labelPlacement="start"
              checked={device.state.mis ? true: false}
            />
          </FormGroup>
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default DeviceCard;
