export interface IDoctorHistory {
  name: string;
  user_name: string;
  Hospital: string;
  treatments: Array<string>;
  registration_date: string;
  start_date: string;
  end_date: string;
  specialization: Array<string>;
  study_history: Array<string>;
  contact_number?: string;
  assistant_id?: string | null;
  DOB?: string;
  age: number;
  gender: string;
  year_of_practice: number;
  assosiated_with: Array<IDoctorAssositedWork>;
  availability_hours: Array<string>;
  profile_pic?: string;
  email: string;
  address: string;
  role: string;
  ongoing_treatment: boolean;
  patients: Array<string>
  // patient age at which the treatment was done
}

export interface IDoctorAssositedWork {
  type: string;
  hospital: string;
}
