import { Grid } from "@mui/material";
import "./style.scss";
import { SignInForm } from "../modules/signin";


export const SignIn = () => {
  return (
    <Grid className="homepage-background">
      <SignInForm />
    </Grid>
  );
};
