import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Calling.scss"; // Import SCSS file
import { CallingProps } from "./interface";

export const Calling = ({ roomId }: CallingProps) => {
  const navigate = useNavigate();

  function handleJoin() {
    navigate(`/room/${roomId}`);
  }

  return (
    <Grid className="calling-container">
      <Grid className="calling-container-header">
        <Typography variant="h4">Join an Appointment</Typography>
      </Grid>
      <Grid className="input-container">
        <input
          type="text"
          placeholder="Enter room ID"
          value={roomId}
          disabled
        />
        <button onClick={handleJoin}>Join</button>
      </Grid>
    </Grid>
  );
};
