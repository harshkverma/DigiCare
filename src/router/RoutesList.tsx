import { EUserRole } from "../modules/avatarPopOverContent/interface";
import { DigicareAbout } from "../pages/About";
import { DigicareContact } from "../pages/Contact";
import { DoctorHistory } from "../pages/DoctorHistory";
import HistoryPage from "../pages/HistoryPage";
import { Homepage } from "../pages/Homepage";
import { DigicarePatientDetails } from "../pages/PatientDetails";
import { PatientsList } from "../pages/PatientsList";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { IRoutesPath } from "./interface";
import { DigicareProfile } from "../pages/Profile";
import { CallingRoom } from "../pages/CallingRoom";
import { BookAppointemnt } from "../pages/BookAppointment";
import { AppointmentList } from "../pages/AppointmentList";
import { AddSchedule } from "../pages/AddSchedule";

export const routesName = {
  signin: "/signin",
  signup: "/signup",
  dashboard: "/dashboard",
  doctorList: "/doctor-list",
  patientList: "/patient-list",
  about: "/about",
  contact: "/contact",
  history: "/history",
  patientDetails: "/patient-details/:patient_username",
  profile: "/profile",
  room: "room/:roomId",
  bookAppointment: "/book_appointment",
  appointmentList: "/appointment/list",
  calling: "/room/:roomId",
  default: "/*",
  adminHome: "/admin",
  addSchedule: "/add-schedule",
};

export const RoutesList: IRoutesPath[] = [
  {
    name: "drawer.drawerLink.signin",
    link: routesName.signin,
    id: "signin",
    renderDrawerComponents: false,
    component: <SignIn />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.signup",
    link: routesName.signup,
    id: "signup",
    renderDrawerComponents: false,
    component: <SignUp />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.dashboard",
    link: routesName.dashboard,
    id: "dashboard",
    renderDrawerComponents: true,
    component: <Homepage />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.history",
    link: routesName.history,
    id: "history",
    renderDrawerComponents: true,
    component: <HistoryPage />,
    valid_role: EUserRole.patient,
  },
  {
    name: "drawer.drawerLink.patientList",
    link: routesName.patientList,
    id: "patientList",
    renderDrawerComponents: true,
    component: <PatientsList />,
    valid_role: EUserRole.doctor,
  },
  {
    name: "drawer.drawerLink.doctorList",
    link: routesName.doctorList,
    id: "doctorList",
    renderDrawerComponents: true,
    component: <DoctorHistory />,
    valid_role: EUserRole.patient,
  },
  {
    name: "drawer.drawerLink.bookAppointment",
    link: routesName.bookAppointment,
    id: "bookAppointment",
    renderDrawerComponents: true,
    component: <BookAppointemnt />,
    valid_role: EUserRole.patient,
  },
  {
    name: "drawer.drawerLink.appointmentList",
    link: routesName.appointmentList,
    id: "appointmentList",
    renderDrawerComponents: true,
    component: <AppointmentList />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.addSchedule",
    link: routesName.addSchedule,
    id: "addSchedule",
    renderDrawerComponents: true,
    component: <AddSchedule />,
    valid_role: EUserRole.doctor,
  },
  {
    name: "drawer.drawerLink.profile",
    link: routesName.profile,
    id: "profile",
    renderDrawerComponents: true,
    component: <DigicareProfile />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.about",
    link: routesName.about,
    id: "about",
    renderDrawerComponents: true,
    component: <DigicareAbout />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.contact",
    link: routesName.contact,
    id: "contact",
    renderDrawerComponents: true,
    component: <DigicareContact />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.patientDetails",
    link: routesName.patientDetails,
    id: "patientDetails",
    renderDrawerComponents: false,
    component: <DigicarePatientDetails />,
    valid_role: EUserRole.doctor,
  },
  {
    name: "drawer.drawerLink.calling",
    link: routesName.calling,
    id: "calling",
    renderDrawerComponents: false,
    component: <CallingRoom />,
    valid_role: "all",
  },
  {
    name: "drawer.drawerLink.default",
    link: routesName.default,
    id: "default",
    renderDrawerComponents: false,
    component: <Homepage />,
    valid_role: "all",
  },
];
