export interface PatientSignUpAPIProps {
  user_name: string;
  name: string;
  contact_number: string;
  email: string;
  role: string;
  DOB: string;
  gender: string;
  address: string;
  password: string;
  doctors: Array<string>;
  room_id?: string;
}

export interface DoctorSignUpApiProps {
  user_name: string;
  name: string;
  contact_number: string;
  email: string;
  role: string;
  DOB: string;
  gender: string;
  address: string;
  Hospital: string;
  start_year_of_practice: string;
  availability_hours?: Array<string>;
  specialization: Array<string>;
  study_history?: Array<string>;
  patients?: Array<string>;
  password: string;
}

export interface UserSignInAPIProps {
  user_name: string;
  password: string;
}

export interface LinkDoctorPatientProps {
  patient_username: string;
  doctor_username: string;
}

export interface IMakeAnAppointmentAPI {
  date: string;
  doctor_username: string;
  day: string;
  time: string;
  description: string;
}

export interface IAPIMessage {
  message: string;
  variant?: "success" | "info" | "warning" | "error";
}
