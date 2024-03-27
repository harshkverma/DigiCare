import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DigicareDatePickerProps } from "../interface/DigiDatePicker";
import dayjs, { Dayjs } from "dayjs";

export default function DigicareDatePicker({
  label,
  handleDateChange,
  value,
  minDate,
  maxDate,
  className,
  disabled,
}: DigicareDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker<Date | Dayjs>
        className={className}
        disabled={disabled}
        label={label}
        onChange={handleDateChange}
        value={value}
        minDate={dayjs().subtract(minDate, "days")}
        maxDate={dayjs().add(maxDate, "days")}
      />
    </LocalizationProvider>
  );
}
