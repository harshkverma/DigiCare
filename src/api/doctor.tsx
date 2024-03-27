import { digiAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IAppointmentSchedule } from "../modules/appointments/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { DoctorSignUpApiProps } from "./interface";

export const getDoctorByUsername = (username: string) => {
  return digiAxios.get(`/doctor/${username}`);
};

export const getAllDoctors = () => {
  return digiAxios.get("/doctors");
};

export const updateDoctorProfileDetails = (
  patient_username: string,
  profileUser: IPatient | ILoginUser | IDoctorHistory
) => {
  return digiAxios.put(
    `/doctor/${patient_username}`,
    profileUser as DoctorSignUpApiProps
  );
};

export const addScheduleForDoctor = (
  username: string,
  addedSchedule: Array<IAppointmentSchedule>
) => {
  return digiAxios.post(`/time-slots/${username}`, addedSchedule);
};

export const updateScheduleForDoctor = (
  username: string,
  addedSchedule: Array<IAppointmentSchedule>
) => {
  return digiAxios.put(`/time-slots/${username}`, addedSchedule);
};

export const getAllDoctorBookedAppointments = (username: string) => {
  return digiAxios.get(`/book-appointment/doctor/${username}`);
};

export const getAllTimeSlots = (username: string) => {
  return digiAxios.get(`/time-slots/${username}`);
};
