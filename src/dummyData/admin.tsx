import { EGender, ILoginUser } from "../context/interface";
import { EUserRole } from "../modules/avatarPopOverContent/interface";

export const adminUser: ILoginUser = {
  name: "Ashma Garg",
  user_name: "ashma_garg",
  email: "ashmagarg77u@gmail.com",
  contact_number: "+1(382)-880-2727",
  role: EUserRole.admin,
  gender: EGender.female,
  DOB: `${new Date("22-07-2005")}`,
  password: "ashmagarg",
};
