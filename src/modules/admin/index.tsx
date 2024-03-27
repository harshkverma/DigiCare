import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";
import DigicareDateTimePicker from "../common/components/DigicareDateTimePicker";
import { getAllPatients } from "../../api/patient";
import { getAllDoctors } from "../../api/doctor";
import { linkDoctorPatient } from "../../api/admin";

export const AdminTasks = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [registrationDate, setRegistrationDate] = useState<Date | null>();
  const [admitDate, setAdmitDate] = useState<Date | null>();
  const [dischargeDate, setDischargeDate] = useState<Date | null>();
  const [treatment, setTreatment] = useState<string>();
  const [isOngoing, setIsOngoing] = useState<boolean>(false);
  const [patientsList, setPatientsList] = useState<
    Array<DigicareAutoCompleteDataProps>
  >([]);
  const [doctorsList, setDoctorsList] = useState<
    Array<DigicareAutoCompleteDataProps>
  >([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    linkDoctorPatient({
      patient_username: selectedPatient,
      doctor_username: selectedDoctor,
    });
    //return
    // console.log({
    //   patient: selectedPatient,
    //   doctor: selectedDoctor,
    //   treatment: treatment,
    //   registrationDate: registrationDate,
    //   admitDate: admitDate,
    //   isOngoing: isOngoing,
    //   dischargeDate: dischargeDate,
    // });
  };

  useEffect(() => {
    getAllPatients().then((res) => {
      const c = res.data.data.map((d) => {
        return {
          label: d.name,
          value: d.user_name,
        } as DigicareAutoCompleteDataProps;
      });
      setPatientsList(c);
    });

    getAllDoctors().then((res) => {
      const c = res.data.data.map((d) => {
        return {
          label: d.name,
          value: d.user_name,
        } as DigicareAutoCompleteDataProps;
      });
      setDoctorsList(c);
    });
  }, []);

  const handlePatientChange = (e: DigicareAutoCompleteDataProps) => {
    setSelectedPatient(e?.value as string);
  };
  const handleDoctorChange = (e: DigicareAutoCompleteDataProps) => {
    setSelectedDoctor(e?.value as string);
  };
  const handleIsOngoingChange = () => {
    setIsOngoing(!isOngoing);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom marginBottom={2}>
        Patient - Doctor Assignment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <DigiCareAutocomplete
                placeHolder="Select Patient Username"
                data={patientsList}
                handleAutocompleteChange={handlePatientChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <DigiCareAutocomplete
                placeHolder="Select Doctor"
                data={doctorsList}
                handleAutocompleteChange={handleDoctorChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              // required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DigicareDateTimePicker
              label="Registration Date"
              handleDateChange={(v) => setRegistrationDate(new Date(v))}
              value={registrationDate}
              className="book-an-appointment-date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DigicareDateTimePicker
              label="Admit Date"
              handleDateChange={(v) => setAdmitDate(new Date(v))}
              value={admitDate}
              className="book-an-appointment-date-picker"
            />
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent={"flex-start"}
            padding={"1rem 2rem 0rem"}
          >
            <FormControlLabel
              control={
                <Checkbox checked={isOngoing} onClick={handleIsOngoingChange} />
              }
              label="Ongoing Treatment"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DigicareDateTimePicker
              disabled={isOngoing}
              label="Discharge Date"
              handleDateChange={(v) => setDischargeDate(new Date(v))}
              value={isOngoing ? null : dischargeDate}
              className="book-an-appointment-date-picker"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // disabled={
              //   !selectedPatient ||
              //   !selectedDoctor ||
              //   !treatment ||
              //   !registrationDate
              // }
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
