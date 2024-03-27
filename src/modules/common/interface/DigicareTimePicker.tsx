import { Dayjs } from "dayjs";

export interface DigicareTimePickerProps {
  label?: string;
  handleChange?: (event: any) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
  minTime?: Dayjs;
  defaultValue?: any;
}
