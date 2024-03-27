import { ILoginUser } from "../../context/interface";
import { IPatient } from "../avatarPopOverContent/interface";
import { IDoctorHistory } from "../doctorHistory/interface";

export interface ProfileProps {
  user: IPatient | IDoctorHistory | ILoginUser;
  isEdit?: boolean;
}
