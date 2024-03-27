import { digiAxios } from ".";
import { adminUser } from "../dummyData/admin";
import {
  DoctorSignUpApiProps,
  PatientSignUpAPIProps,
  UserSignInAPIProps,
} from "./interface";

export const userSignIn = () => {
  return digiAxios.get("");
};

export const patientSignupService = (data: PatientSignUpAPIProps) => {
  return digiAxios.post("/register-patient", data);
};

export const doctorSignupService = (data: DoctorSignUpApiProps) => {
  return digiAxios.post("/register-doctor", data);
};

export const patientSignIn = (data: UserSignInAPIProps) => {
  return digiAxios.post("/patient-login", data);
};

export const doctorSignIn = (data: UserSignInAPIProps) => {
  return digiAxios.post("/doctor-login", data);
};

export const adminSignIn = (data: UserSignInAPIProps) => {
  if (
    data.user_name === adminUser.user_name &&
    data.password === adminUser.password
  )
    return {
      data: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMTA2NTM2NCwianRpIjoiZTU5OWViYjUtNmZmNi00Yjg5LWIxMzAtYjYwMzY3Njg4OTgyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InNhbmplZXZfc2hhcm1hIiwibmJmIjoxNzExMDY1MzY0LCJleHAiOjE3MTEwNjYyNjR9.teXq4_oAFqR8q4FGLW14hz7SLaKNfjKrsNcg6dnm0MI",
        refresh_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxMTA2NTM2NCwianRpIjoiYWQ5YTRlYTMtZWEyZC00ZjRiLWIxZGItOTFlNmFkYmYyNWM4IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOiJzYW5qZWV2X3NoYXJtYSIsIm5iZiI6MTcxMTA2NTM2NCwiZXhwIjoxNzEzNjU3MzY0fQ.lPuvj0nn3J82sTSDmLuVT4_yR54aG7OCXebRqyW0ksw",
      },
    };
  else return { data: { access_token: false, refresh_token: false } };
};
