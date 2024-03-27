import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DigicareDatePickerProps } from "../interface/DigiDatePicker";
import dayjs, { Dayjs } from "dayjs";

export default function DigicareDateTimePicker({
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
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker<Date | Dayjs>
          className={className}
          disabled={disabled}
          label={label}
          onChange={handleDateChange}
          value={value}
          minDate={dayjs().subtract(minDate, "days")}
          maxDate={dayjs().add(maxDate, "days")}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
