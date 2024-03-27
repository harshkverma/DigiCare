export interface IPatient {
  name: string;
  user_name: string;
  contact_number: string;
  email: string;
  address: string;
  role: EUserRole;
  gender: string;
  DOB: string;
  profile_pic?: string;
  doctors: Array<string>;
  room_id: string;
}

export enum EUserRole {
  patient = "patient",
  doctor = "doctor",
  nurse = "nurse",
  admin = "admin",
}
