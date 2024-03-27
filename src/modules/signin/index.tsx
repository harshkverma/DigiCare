import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { routesName } from "../../router/RoutesList";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { useSignInFormStye } from "./style";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import hostpitalIcon from "../../assets/lottie/hospitalIcon.json";
import { useLocation, useNavigate } from "react-router-dom";
import { EUserRole } from "../avatarPopOverContent/interface";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  capitalize,
} from "@mui/material";
import { adminSignIn, doctorSignIn, patientSignIn } from "../../api/sign";
import { UserSignInAPIProps } from "../../api/interface";
import { getPatientByUsername } from "../../api/patient";
import { getDoctorByUsername } from "../../api/doctor";
import { adminUser } from "../../dummyData/admin";
import { DigicareSnackbar } from "../common/components/DigiSnackbar";

export const SignInForm = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useSignInFormStye();
  const { setIsSignedIn, setUsername, setUser } = React.useContext(
    AppContext
  ) as ContextProps;
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const [apiErrorMessage, setApiErrorMessage] = React.useState<string>();
  const [role, setRole] = React.useState<string>();

  const handleRoleChange = (e) => {
    setRole((e.target as HTMLInputElement).value as EUserRole);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    ) as unknown as UserSignInAPIProps;
    if (role) {
      if (role === EUserRole.patient) {
        patientSignIn(data)
          .then((res) => {
            generateLocalStorage(data, res.data.access_token);
            getPatientByUsername(data.user_name).then((res) => {
              setUser(res.data.data);
            });
          })
          .catch((e) => {
            setApiErrorMessage(e.response.data.message);
          });
      } else if (role === EUserRole.doctor) {
        doctorSignIn(data)
          .then((res) => {
            generateLocalStorage(data, res.data.access_token);
            getDoctorByUsername(data.user_name).then((res) => {
              setUser(res.data.data);
            });
          })
          .catch((e) => {
            setApiErrorMessage(e.response.data.message);
          });
      } else {
        generateLocalStorage(data, adminSignIn(data)?.data.access_token);
        setUser(adminUser);
      }
    }
  };

  const generateLocalStorage = (
    data: UserSignInAPIProps,
    access_token?: string | boolean
  ) => {
    if (access_token) {
      localStorage.setItem("token", access_token as string);
      localStorage.setItem("userName", data.user_name);
      localStorage.setItem("role", role);
      setIsSignedIn(true);
      setUsername(data.user_name);
      navigate(
        location.state?.from ? location.state.from : routesName.dashboard
      );
    }
  };
  const options = {
    animationData: hostpitalIcon,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <Grid className="signin-form-grid">
      <Container component="main" maxWidth="xs" className="signin-box">
        <CssBaseline />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <Box className={classes.signInFormGrid}>
            <span className="sign-tile-data">{t("registration.signin")}</span>
            <div className="topicon-digicare">{View}</div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate={false}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_name"
                type="text"
                label={t("registration.form.username")}
                name="user_name"
                autoFocus
                // onChange={(e) => updateUserName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t("registration.form.password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControl required className="role-form-control">
                <FormLabel id="demo-radio-buttons-group-label-role">
                  Role
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="role"
                  style={{
                    // marginLeft: "2rem",
                    display: "flex",
                    flexDirection: "row",
                  }}
                  value={role}
                  onChange={handleRoleChange}
                >
                  <FormControlLabel
                    value={EUserRole.patient}
                    control={<Radio />}
                    label={capitalize(EUserRole.patient)}
                  />
                  <FormControlLabel
                    value={EUserRole.doctor}
                    control={<Radio />}
                    label={capitalize(EUserRole.doctor)}
                  />
                  <FormControlLabel
                    value={EUserRole.admin}
                    control={<Radio />}
                    label={capitalize(EUserRole.admin)}
                  />
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t("registration.signin")}
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href={routesName.signup} variant="body2">
                    {t("registration.form.signup_message")}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <DigicareSnackbar
        message={apiErrorMessage}
        autoHideDuration={12000}
        color="error"
        variant="filled"
        handleClose={() => setApiErrorMessage(undefined)}
      />
    </Grid>
  );
};
