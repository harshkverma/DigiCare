import { Grid } from "@mui/material";
import "./style.scss";
import { SignUpForm } from "../modules/signup/SignUpForm";

export const SignUp = () => {
  return (
    <Grid className="homepage-background">
      <SignUpForm />
    </Grid>
  );
};
