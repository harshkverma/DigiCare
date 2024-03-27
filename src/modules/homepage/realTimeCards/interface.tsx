export interface RealTimeDataProps {
  timestamp?: string;
  record_id?: string;
  patient_username?: string;
  o2?: string;
  blood_pressure?: string;
  sugar_level?: string;
  heart_rate?: string;
}

export interface RealTimeRecordProps {
  _id?: string;
  name: string;
  reading: string;
  unit: string;
  img?: string;
  min_value?: string;
  max_value?: string;
}

export interface RealTimeRecordCardProps {
  data: RealTimeRecordProps;
  validateClassName: string;
  setIsAlertOpen: (value: boolean) => void;
  isRecord?: boolean;
}
