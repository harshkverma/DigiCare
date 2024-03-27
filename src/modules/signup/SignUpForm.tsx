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
import { useSignUpFormStye } from "./style";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import hostpitalIcon from "../../assets/lottie/hospitalIcon.json";
import DigicareDatePicker from "../common/components/DigiDatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { EUserRole } from "../avatarPopOverContent/interface";
import { capitalize } from "@mui/material";
import { doctorSignupService, patientSignupService } from "../../api/sign";
import {
  DoctorSignUpApiProps,
  PatientSignUpAPIProps,
} from "../../api/interface";
import { useNavigate } from "react-router-dom";
import { EGender } from "../../context/interface";
import { digicareConfig } from "../../assets/constants/config";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";
import { DigicareSnackbar } from "../common/components/DigiSnackbar";

export const SignUpForm = () => {
  const { t } = useTranslation();
  const { classes } = useSignUpFormStye();
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = React.useState<Date | null>();
  const [gender, setGender] = React.useState<EGender>();
  const [role, setRole] = React.useState<EUserRole>();
  const [specialization, setSpecialization] = React.useState<Array<string>>();
  const [doctorStudy, setDoctorStudy] = React.useState<Array<string>>();
  const [apiMessage, setApiMessage] = React.useState<string>();

  const handleDateChange = (value: Date | null) => {
    setBirthDate(new Date(value));
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value as EGender);
  };

  const handleRoleChange = (e: DigicareAutoCompleteDataProps) => {
    setRole(e?.value as EUserRole);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ...Object.fromEntries(new FormData(event.currentTarget).entries()),
      role: role,
      DOB: birthDate,
      gender: gender,
    };
    if (data.role === EUserRole.patient) {
      patientSignupService({
        ...data,
      } as unknown as PatientSignUpAPIProps)
        .then(() => {
          navigate("/");
        })
        .catch((e) => {
          setApiMessage(JSON.stringify(e.response.data.message));
        });
    } else {
      doctorSignupService({
        ...data,
        specialization: specialization,
        study_history: doctorStudy,
      } as unknown as DoctorSignUpApiProps)
        .then(() => {
          navigate("/");
        })
        .catch((e) => {
          setApiMessage(e.response.data.message);
        });
    }
  };

  const handleSpecializationChange = (e: DigicareAutoCompleteDataProps[]) => {
    setSpecialization(
      e.map((ele) => {
        return ele.value as string;
      })
    );
  };

  const handleMedicalDegreesChanges = (e: DigicareAutoCompleteDataProps[]) => {
    setDoctorStudy(
      e.map((ele) => {
        return ele.value as string;
      })
    );
  };

  const handleClose = () => {
    setApiMessage(undefined);
  };
  const options = {
    animationData: hostpitalIcon,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <Grid className="signup-form-grid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={classes.signUpFormGrid}>
            <span className="sign-tile-data">{t("registration.signup")}</span>
            <div className="topicon-digicare">{View}</div>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label={t("registration.form.name")}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="user_name"
                    label={t("registration.form.username")}
                    name="user_name"
                    autoComplete="user_name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t("registration.form.email")}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={t("registration.form.password")}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <FormControl
                  required
                  fullWidth
                  style={{ padding: "1.5rem 0rem 0rem 1.5rem" }}
                >
                  <DigicareDatePicker
                    label="Birth Date*"
                    handleDateChange={handleDateChange}
                    value={birthDate}
                    className="book-an-appointment-date-picker"
                  />
                </FormControl>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="contact_number"
                    label={t("registration.form.contact")}
                    type="contact_number"
                    id="contact_number"
                    autoComplete="contact_number-number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label={t("registration.form.address")}
                    type="text"
                    id="address"
                    autoComplete="address"
                  />
                </Grid>
                <FormControl
                  fullWidth
                  style={{ padding: "1.5rem 0rem 0rem 1.5rem" }}
                  required
                >
                  <DigiCareAutocomplete
                    placeHolder="Select Role"
                    data={[
                      { label: "Doctor", value: "doctor" },
                      { label: "Patient", value: "patient" },
                    ]}
                    handleAutocompleteChange={handleRoleChange}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  required
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "1.5rem 0rem 0rem 7rem",
                  }}
                >
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="gender"
                    style={{
                      marginLeft: "2rem",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value={EGender.male}
                      control={<Radio />}
                      label={capitalize(EGender.male)}
                    />
                    <FormControlLabel
                      value={EGender.female}
                      control={<Radio />}
                      label={capitalize(EGender.female)}
                    />
                    <FormControlLabel
                      value={EGender.other}
                      control={<Radio />}
                      label={capitalize(EGender.other)}
                    />
                  </RadioGroup>
                </FormControl>
                {role === EUserRole.doctor && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Hospital"
                        label={t("registration.form.hospital")}
                        type="text"
                        id="Hospital"
                        autoComplete="Hospital"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="start_year_of_practice"
                        label={t("registration.form.start_year_of_practice")}
                        type="text"
                        id="start_year_of_practice"
                        autoComplete="start_year_of_practice"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DigiCareAutocomplete
                        data={digicareConfig.specialization}
                        handleAutocompleteChange={handleSpecializationChange}
                        isMultiSelect={true}
                        placeHolder={"Specialization"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DigiCareAutocomplete
                        data={digicareConfig.study_history}
                        handleAutocompleteChange={handleMedicalDegreesChanges}
                        isMultiSelect={true}
                        placeHolder={"Doctoral Degrees"}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              <Button
                type="submit"
                className="sing-button-data"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t("registration.signup")}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={routesName.signin} variant="body2">
                    {t("registration.form.already_account")}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </motion.div>
      <DigicareSnackbar
        message={apiMessage}
        autoHideDuration={12000}
        color="error"
        variant="filled"
        handleClose={handleClose}
      />
    </Grid>
  );
};
