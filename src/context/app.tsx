import React, { useEffect, useState } from "react";
import { ContextProps, ILoginUser } from "./interface";
import { EUserRole, IPatient } from "../modules/avatarPopOverContent/interface";
import { getPatientByUsername } from "../api/patient";
import { getDoctorByUsername } from "../api/doctor";
import { IDoctorHistory } from "../modules/doctorHistory/interface";

export const AppContext = React.createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(
    !!localStorage.getItem("token"),
  );
  const [user, setUser] = useState<ILoginUser | IPatient | IDoctorHistory>();
  const [userName, setUsername] = useState<string | null | undefined>(
    localStorage.getItem("userName"),
  );
  const [meetingRoomId, setMeetingRoomId] = useState<
    string | null | undefined
  >();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    if (localStorage.getItem("role") === EUserRole.patient) {
      getPatientByUsername(userName).then((res) => setUser(res.data.data));
    } else if (localStorage.getItem("role") === EUserRole.doctor) {
      getDoctorByUsername(userName).then((res) => setUser(res.data.data));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      setUser(undefined);
      setIsSignedIn(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        userName,
        setUsername,
        user,
        setUser,
        meetingRoomId,
        setMeetingRoomId,
        getUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
