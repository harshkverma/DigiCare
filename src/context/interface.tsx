import { EUserRole, IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";

export interface ContextProps {
  isSignedIn: boolean;
  setIsSignedIn: (newBalue: boolean) => void;
  userName: string | null | undefined;
  setUsername: (value: string | null | undefined) => void;
  user: ILoginUser | IPatient | IDoctorHistory | undefined;
  setUser: (value?: ILoginUser | IPatient | IDoctorHistory) => void;
  meetingRoomId: string | null | undefined;
  setMeetingRoomId: (value: string | null | undefined) => void;
  getUser: () => void;
}

export interface DashboardContextProps {
  searchList: Array<DashboardSearchInterface>;
  setSearchList: (newList: Array<DashboardSearchInterface>) => void;
  getSearchListAsPerParam: (paramKey: string) => Array<any>;
  currentPageId: string | undefined | null;
  setCurrentPageId: (value: string | undefined | null) => void;
}

export interface DashboardSearchInterface {
  name: string;
  userId: string;
}

export interface IProfileContext {
  user: IUser | null | undefined;
  setUser: (user: IUser | null | undefined) => void;
}

export interface IUser {
  name: string;
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface INotifyContext {}

export interface ISettingContext {}

export interface IAboutContext {}

export interface IContactContext {}

export interface ILoginUser {
  name: string; //
  address?: string; //
  profile_pic?: string;
  user_name: string; //
  contact_number: string; //
  email: string; //
  role: EUserRole; //
  gender?: EGender; //
  DOB?: string; //
  room_id?: string; //
  password?: string; //
}

export enum EGender {
  male = "male",
  female = "female",
  other = "other",
}
