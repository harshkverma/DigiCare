import { Button, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DigiCareAutocomplete from "../../common/components/DigicareAutoComplete";
import { digicareConfig } from "../../../assets/constants/config";
import { DigicareTimePicker } from "../../common/components/DigicareTimePicker";
import { DigicareAutoCompleteDataProps } from "../../common/interface/DigicareAutoComplete";
import "./style.scss";
import dayjs from "dayjs";
import { IAppointmentSchedule } from "../interface";
import {
  addScheduleForDoctor,
  getAllTimeSlots,
  updateScheduleForDoctor,
} from "../../../api/doctor";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { IAPIMessage } from "../../../api/interface";
import { DigicareSnackbar } from "../../common/components/DigiSnackbar";

export const MAddSchedule = () => {
  const [daysOptions, setDaysOptions] = useState<
    DigicareAutoCompleteDataProps[]
  >(digicareConfig.days);
  const [appointmentSchedule, setAppointmentSchedule] = useState<
    Array<IAppointmentSchedule>
  >([]);
  const { user } = useContext(AppContext) as ContextProps;
  const [apiMessage, setApiMessage] = useState<IAPIMessage>();
  const [isExistingTimeSlots, setIsExistingTimeSlots] =
    useState<boolean>(false);

  useEffect(() => {
    getAllTimeSlots(user?.user_name)
      .then((res) => {
        const days = [];
        const time_slots = res.data?.data
          ?.map((added_slots) => {
            if (!days.includes(added_slots.day_name)) {
              days.push(added_slots.day_name);
              const a = {
                day_name: added_slots.day_name,
                start_time: added_slots.parent_start_time,
                end_time: added_slots.parent_end_time,
              };
              return a;
            }
          })
          .filter(Boolean)
          .sort((a, b) => {
            if (
              digicareConfig.days.findIndex((v) => v.value === a.day_name) <
              digicareConfig.days.findIndex((v) => v.value === b.day_name)
            )
              return -1;
            else return 1;
          });
        setAppointmentSchedule([...time_slots]);
        setIsExistingTimeSlots(true);
      })
      .catch((e) => {
        setAppointmentSchedule([
          {
            day_name: "",
            start_time: "",
            end_time: "",
          },
        ]);
        setApiMessage({
          message: e.response?.data?.message,
          variant: "error",
        });
      });
  }, [user]);

  const handleAddInput = () => {
    setAppointmentSchedule([
      ...appointmentSchedule,
      { day_name: "", start_time: "", end_time: "" },
    ]);
  };

  const handleStartTime = (event: any, index: number) => {
    const start_time = `${new Date(event).getHours()}:${new Date(event).getMinutes()}`;
    addOrUpdate("start_time", start_time, index);
  };

  const handleEndTime = (event: any, index: number) => {
    const end_time = `${new Date(event).getHours()}:${new Date(event).getMinutes()}`;
    addOrUpdate("end_time", end_time, index);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...appointmentSchedule];
    newArray.splice(index, 1);
    setAppointmentSchedule(newArray);
  };

  const handleAutoCompleteChange = (
    value: DigicareAutoCompleteDataProps,
    index: number
  ) => {
    addOrUpdate("day_name", value.value as string, index);
  };

  const addOrUpdate = (refField: string, value: string, index: number) => {
    const ref = appointmentSchedule.slice();
    ref[index] = { ...ref[index], [refField]: value } as IAppointmentSchedule;
    setAppointmentSchedule(ref);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isExistingTimeSlots) {
      updateScheduleForDoctor(user.user_name, appointmentSchedule)
        .then((res) => {
          setApiMessage({
            message: "Linking Successfull!",
            variant: "success",
          });
        })
        .catch((e) => {
          setApiMessage({
            message: e.response.data.message,
            variant: "error",
          });
        });
    } else {
      addScheduleForDoctor(user.user_name, appointmentSchedule)
        .then((res) => {
          setApiMessage({
            message: "Linking Successfull!",
            variant: "success",
          });
        })
        .catch((e) => {
          setApiMessage({
            message: e.response.data.message,
            variant: "error",
          });
        });
    }
  };

  const handleFocus = () => {
    const selectedDays = appointmentSchedule?.map((a) => a?.day_name);
    const daysOptionsDummy = daysOptions?.map((d) => {
      if (selectedDays.includes(d.value as string)) {
        return { ...d, disabled: true };
      } else return { ...d, disabled: false };
    });
    setDaysOptions(daysOptionsDummy);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {appointmentSchedule?.map((item, index) => (
          <Grid container spacing={2} className="add-schedule-doctor-grid">
            <Grid item xs={3} alignItems={"flex-end"}>
              <DigiCareAutocomplete
                data={daysOptions}
                handleAutocompleteChange={(v: DigicareAutoCompleteDataProps) =>
                  handleAutoCompleteChange(v, index)
                }
                placeHolder={"Week day"}
                unsorted={true}
                handleFocus={handleFocus}
                value={item?.day_name}
              />
            </Grid>
            <Grid item>
              <DigicareTimePicker
                name="start_time"
                handleChange={(v) => handleStartTime(v, index)}
                defaultValue={item?.start_time}
              />
            </Grid>
            <Grid item>
              <DigicareTimePicker
                name="end_time"
                handleChange={(v) => handleEndTime(v, index)}
                defaultValue={item?.end_time}
                minTime={dayjs()
                  .set(
                    "hour",
                    appointmentSchedule[index]?.start_time?.length
                      ? (appointmentSchedule[index]?.start_time.split(
                          ":"
                        )[0] as unknown as number)
                      : 0
                  )
                  .set(
                    "minute",
                    appointmentSchedule[index]?.start_time?.length
                      ? (appointmentSchedule[index]?.start_time.split(
                          ":"
                        )[1] as unknown as number)
                      : 0
                  )}
              />
            </Grid>
            <Grid item>
              {appointmentSchedule?.length > 1 && (
                <Button onClick={() => handleDeleteInput(index)}>Delete</Button>
              )}
            </Grid>
          </Grid>
        ))}
        <Grid container gap={2} className="add-schedule-doctor-grid">
          <Button
            disabled={appointmentSchedule?.length === 7}
            style={{ marginTop: "1rem" }}
            onClick={handleAddInput}
            variant="contained"
            color="success"
          >
            Add More
          </Button>
          <Button
            style={{ marginTop: "1rem" }}
            type={"submit"}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </form>
      <DigicareSnackbar
        message={apiMessage?.message}
        autoHideDuration={12000}
        color={apiMessage?.variant}
        variant="filled"
        handleClose={() => setApiMessage(undefined)}
      />
    </div>
  );
};
