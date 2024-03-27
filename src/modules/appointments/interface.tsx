export interface IBookAppointment {
  id: string;
  doctor_username: string;
  online_availability?: IDoctorOnlineAvailability;
  appointments?: IAppointmnets[];
}

export interface IDoctorOnlineAvailability {
  timeIntervals: number;
  days: IDoctorOnlineAvailabilityDays[];
}

export interface IDoctorOnlineAvailabilityDays {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
  time_slots?: IDoctorTimeSlots[];
}

export interface IDoctorTimeSlots {
  id: string;
  day_name?: string;
  start_time: string;
  is_booked: boolean;
}

export interface IAppointmnets {
  id: string;
  date: Date;
  description: string;
  patient_username?: string;
  doctor_username?: string;
  room_id: string;
}

export interface IAppointmentSchedule {
  day_name: string;
  start_time: string;
  end_time: string;
}
