export interface DigicareDatePickerProps {
  label?: string;
  handleDateChange: (event: Date | null) => void;
  value: Date | null;
  minDate?: number | null;
  maxDate?: number | null;
  className?: string;
  disabled?: boolean;
}
