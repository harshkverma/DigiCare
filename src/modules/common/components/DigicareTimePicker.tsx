import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigicareTimePickerProps } from "../interface/DigicareTimePicker";
import dayjs from "dayjs";

export const DigicareTimePicker = ({
  label,
  handleChange,
  name,
  disabled,
  className,
  minTime,
  defaultValue,
}: DigicareTimePickerProps) => {
  let value = new Date();
  value.setHours(defaultValue.split(":")[0]);
  value.setMinutes(defaultValue.split(":")[1]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        onChange={handleChange}
        name={name}
        className={className}
        disabled={disabled}
        minTime={minTime}
        label={label}
        defaultValue={dayjs(value)}
      />
    </LocalizationProvider>
  );
};
