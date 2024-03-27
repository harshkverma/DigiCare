import {
  Tabs,
  Tab,
  Typography,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  capitalize,
} from "@mui/material";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { EUserRole, IPatient } from "../../avatarPopOverContent/interface";
import { IAppointmnets } from "../interface";
import { IDoctorHistory } from "../../doctorHistory/interface";
import "./style.scss";
import {
  getAllBookedAppointment,
  getPatientByUsername,
} from "../../../api/patient";
import { DigicareSnackbar } from "../../common/components/DigiSnackbar";
import {
  getAllDoctorBookedAppointments,
  getDoctorByUsername,
} from "../../../api/doctor";

export const MAppointmentList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [appointments, setAppointments] = useState<IAppointmnets[]>([]);
  const { user } = useContext(AppContext) as ContextProps;
  const [apiErrorMessage, setApiErrorMessage] = useState<string>();
  const [uLinkedUserInfo, setULinkedUserInfo] = useState<
    IDoctorHistory[] | IPatient[]
  >([]);
  const [pLinkedUserInfo, setPLinkedUserInfo] = useState<
    IDoctorHistory[] | IPatient[]
  >([]);
  const currentDate = new Date();

  useEffect(() => {
    if (user) {
      if (user?.role === EUserRole.patient) {
        getAllBookedAppointment(user.user_name)
          .then((res) => {
            setAppointments(res.data);
          })
          .catch((e) => {
            setApiErrorMessage(e.response.data.message);
          });
      } else {
        getAllDoctorBookedAppointments(user?.user_name)
          .then((res) => {
            setAppointments(res.data);
          })
          .catch((e) => {
            setApiErrorMessage(e.response.data.message);
          });
      }
    }
  }, [user]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const pastAppointments = useMemo(() => {
    return appointments
      ?.filter((appointment) => new Date(appointment.date) < currentDate)
      .sort((a, b) => {
        if (a.date < b.date) return -1;
        else return 1;
      });
  }, [appointments]);

  const getDoctorInformation = async (doctor_username: string) => {
    return await getDoctorByUsername(doctor_username)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        setApiErrorMessage("No doctor found as " + doctor_username);
        return null;
      });
  };

  const getPatientInformation = async (patient_username: string) => {
    return await getPatientByUsername(patient_username)
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        setApiErrorMessage("No Patient found as " + patient_username);
        return null;
      });
  };

  const upcomingAppointments = useMemo(() => {
    return appointments
      ?.filter((appointment) => new Date(appointment.date) >= currentDate)
      .sort((a, b) => {
        if (a.date < b.date) return -1;
        else return 1;
      });
  }, [appointments]);

  useMemo(() => {
    if (appointments?.length) {
      const fetchDoctorInfo = async () => {
        const u = appointments
          ?.filter((appointment) => new Date(appointment.date) >= currentDate)
          .sort((a, b) => {
            if (a.date < b.date) return -1;
            else return 1;
          });

        const p = appointments
          ?.filter((appointment) => new Date(appointment.date) < currentDate)
          .sort((a, b) => {
            if (a.date < b.date) return -1;
            else return 1;
          });

        const UdoctorInfoPromises = u?.map(async (a) => {
          return user?.role === EUserRole.patient
            ? await getDoctorInformation(a.doctor_username)
            : await getPatientInformation(a.patient_username);
        });
        const UdoctorInfoResults = await Promise.all(UdoctorInfoPromises);
        setULinkedUserInfo(UdoctorInfoResults);

        const PdoctorInfoPromises = p?.map(async (a) => {
          return user?.role === EUserRole.patient
            ? await getDoctorInformation(a.doctor_username)
            : await getPatientInformation(a.patient_username);
        });
        const PdoctorInfoResults = await Promise.all(PdoctorInfoPromises);
        setPLinkedUserInfo(PdoctorInfoResults);
      };

      fetchDoctorInfo();
    }
  }, [appointments]);

  const handleJoin = (room_id) => {
    window.open(`/room/${room_id}`, "_blank", "rel=noopener noreferrer");
  };

  const handleClose = () => {
    setApiErrorMessage(undefined);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab className="appointment-list-tab" label="Upcoming Appointments" />
          <Tab className="appointment-list-tab" label="Past Appointments" />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          {uLinkedUserInfo &&
            upcomingAppointments?.map((appointment, i) => {
              return (
                <TabContent
                  appointment={appointment}
                  linkedTo={uLinkedUserInfo[i]}
                  isPast={false}
                  handleJoin={() => handleJoin(appointment.room_id)}
                />
              );
            })}
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          {pLinkedUserInfo &&
            pastAppointments?.map((appointment, i) => {
              return (
                <TabContent
                  appointment={appointment}
                  linkedTo={pLinkedUserInfo[i]}
                  isPast={true}
                />
              );
            })}
        </TabPanel>
      </Box>
      <DigicareSnackbar
        message={apiErrorMessage}
        autoHideDuration={12000}
        color="error"
        variant="filled"
        handleClose={handleClose}
      />
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface TabContentProps {
  appointment: IAppointmnets;
  linkedTo?: IDoctorHistory | IPatient;
  isPast?: boolean;
  handleJoin?: () => void;
}
const TabContent = ({
  appointment,
  linkedTo,
  isPast,
  handleJoin,
}: TabContentProps) => {
  return linkedTo ? (
    <ListItem
      key={appointment.id}
      secondaryAction={!isPast && <button onClick={handleJoin}>Join</button>}
    >
      <ListItemAvatar>
        <Avatar
          alt={linkedTo.name}
          src={process.env.REACT_APP_FRONTEND_HOST + linkedTo.profile_pic}
        />
      </ListItemAvatar>
      <ListItemText
        primary={capitalize(linkedTo.name)}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {appointment.date.toLocaleString()}
            </Typography>
            {` — ${appointment.description}`}
          </React.Fragment>
        }
      />
    </ListItem>
  ) : (
    <></>
  );
};
