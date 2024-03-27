import { ILoginUser } from "../context/interface";
import { EUserRole } from "../modules/avatarPopOverContent/interface";

export const LoginPatientData: ILoginUser = {
  name: "Ayush Verma",
  profile_pic: "profilePic.jpeg",
  user_name: "ayush_verma",
  email: "ayushverma@gmail.com",
  contact_number: "+1(382)880-2626",
  role: EUserRole.patient,
};

export const LoginDoctorData: ILoginUser = {
  user_name: "arun_tyagi",
  name: "Dr. Arun Tyagi",
  contact_number: "+1(382)-880-1789",
  profile_pic: "doctor.jpeg",
  email: "arun@gmail.com",
  role: EUserRole.doctor,
};

export const LoginSecondDoctorData: ILoginUser = {
  user_name: "asha_negi",
  name: "Dr. Aasha Negi",
  contact_number: "+1(382)-880-0995",
  profile_pic: "doctor.jpeg",
  email: "aasha@gmail.com",
  role: EUserRole.doctor,
};
