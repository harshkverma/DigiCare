import dayjs from "dayjs";

export const timeDiffToYear = (
  start_date: string | Date,
  end_date: string | Date,
) => {
  const diff = dayjs(end_date).diff(start_date);
  const inYears = diff / 1000 / 60 / 60 / 24 / 365;
  return Math.trunc(inYears).toString();
};
