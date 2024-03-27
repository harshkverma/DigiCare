import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { IDoctorHistory } from "../../doctorHistory/interface";
import DigicareDatePicker from "../../common/components/DigiDatePicker";
import { digicareConfig } from "../../../assets/constants/config";
import "./style.scss";
import { bookAppointmentDummyData } from "../../../dummyData/bookAppointment";
import { IDoctorTimeSlots } from "../interface";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { IPatient } from "../../avatarPopOverContent/interface";
import { getDoctorByUsername } from "../../../api/doctor";
import {
  getAllTimeSlotsForDoctor,
  makeAnAppointment,
} from "../../../api/patient";
import { IAPIMessage, IMakeAnAppointmentAPI } from "../../../api/interface";
import { DigicareSnackbar } from "../../common/components/DigiSnackbar";
import dayjs from "dayjs";

export const MBookAPpointment = () => {
  const { user } = useContext(AppContext) as ContextProps;
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<Date | null>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [desc, setDesc] = useState<string>();
  const [patientRecord, setPatientRecord] = useState<IDoctorHistory[]>([]);
  const [timeSlots, setTimeSlots] = useState<Array<IDoctorTimeSlots>>([]);
  const [apiMessage, setApiMessage] = useState<IAPIMessage>();

  useMemo(() => {
    setPatientRecord([]);
    (user as IPatient).doctors.forEach((doctorUsername) => {
      getDoctorByUsername(doctorUsername).then((res) => {
        const patientRecordClone = patientRecord.slice();
        patientRecordClone.push(res.data.data);
        setPatientRecord(patientRecordClone);
      });
    });
  }, [user.user_name]);

  useEffect(() => {
    setSelectedDoctor("");
  }, [selectedHospital]);

  useEffect(() => {
    setAppointmentDate(null);
  }, [selectedDoctor]);

  useEffect(() => {
    setSelectedTime("");
  }, [appointmentDate]);

  const getHospitalsList = useMemo(() => {
    return patientRecord?.map((data) => {
      return { id: data.user_name, name: data.Hospital };
    });
  }, [patientRecord]);

  const getDoctorList = () => {
    return patientRecord
      ?.filter((data) => {
        if (selectedHospital) return data.Hospital === selectedHospital;
        else return true;
      })
      .map((data) => {
        return { id: data.user_name, name: data.name };
      });
  };

  useMemo(() => {
    if (selectedDoctor && appointmentDate) {
      getAllTimeSlotsForDoctor(
        selectedDoctor,
        digicareConfig.days[appointmentDate?.getDay()]?.value
      )
        .then((res) => {
          setTimeSlots(
            res.data?.data
              ?.sort((a, b) => {
                if (a.start_time > b.start_time) return 1;
                else return -1;
              })
              // .filter((r) => {
              //   let value = new Date();
              //   value.setHours(r.start_time.split(":")[0]);
              //   value.setMinutes(r.start_timeF.split(":")[1]);
              //   return dayjs(value) > dayjs(new Date())
              // })
          );
        })
        .catch((e) => {
          setTimeSlots([]);
          setApiMessage({
            message: e.response.data.message,
            variant: "error",
          });
        });
    }
  }, [selectedDoctor, appointmentDate]);

  const handleHospitalChange = (event: any) => {
    setSelectedHospital(event.target.value);
  };

  const handleDoctorChange = (event: any) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (value: Date | null) => {
    setAppointmentDate(new Date(value));
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value as string);
  };

  const handleMenuItemTimeClick = (time: IDoctorTimeSlots) => {
    var date = Object.assign(appointmentDate, {});
    date.setHours(Number(time.start_time.split(":")[0]));
    date.setMinutes(Number(time.start_time.split(":")[1]));
    setAppointmentDate(date);
  };

  const handleDescriptionChange = (e: any) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDoctor && appointmentDate && selectedTime && selectedHospital) {
      const appointmentDetails: IMakeAnAppointmentAPI = {
        date: appointmentDate.toString(),
        doctor_username: selectedDoctor,
        day: digicareConfig.days[appointmentDate?.getDay()]?.value,
        time: selectedTime,
        description: desc,
      };
      setSelectedHospital("");
      setSelectedDoctor("");
      setAppointmentDate(null);
      setSelectedTime("");
      setDesc("");
      makeAnAppointment(user.user_name, appointmentDetails).then((res) => {
        setApiMessage({
          message: "Appointment Booked Successfully!",
          variant: "success",
        });
      });
    } else {
      alert("Please select hospital, doctor, appointment date, and time.");
    }
  };

  const handleClose = () => {
    setApiMessage(undefined);
  };

  return (
    <Container className="appointment-container">
      <Typography variant="h4" gutterBottom marginBottom={2}>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel className="select-label">Select Hospital</InputLabel>
              <Select
                value={selectedHospital}
                onChange={handleHospitalChange}
                required
              >
                <MenuItem value="">Select Hospital</MenuItem>
                {getHospitalsList?.map((hospital) => (
                  <MenuItem key={hospital.id} value={hospital.name}>
                    {hospital.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel className="select-label">Select Doctor</InputLabel>
              <Select
                value={selectedDoctor}
                onChange={handleDoctorChange}
                required
              >
                <MenuItem value="">Select Doctor</MenuItem>
                {getDoctorList()?.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DigicareDatePicker
              label="Appointment Date*"
              handleDateChange={handleDateChange}
              value={appointmentDate}
              minDate={0}
              maxDate={6}
              className="book-an-appointment-date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel className="select-label">Select Time</InputLabel>
              <Select value={selectedTime} onChange={handleTimeChange} required>
                <MenuItem value="">Select Time</MenuItem>
                {timeSlots?.map((time) => (
                  <MenuItem
                    key={time.start_time}
                    value={time.start_time}
                    disabled={time.is_booked}
                    onClick={() => handleMenuItemTimeClick(time)}
                  >
                    {time.start_time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              rows={6}
              multiline
              label="Add Details"
              value={desc}
              onChange={handleDescriptionChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
      <DigicareSnackbar
        message={apiMessage?.message}
        autoHideDuration={12000}
        color={apiMessage?.variant || "error"}
        variant="filled"
        handleClose={handleClose}
      />
    </Container>
  );
};
