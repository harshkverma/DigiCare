import { EGender } from "../context/interface";
import { EUserRole, IPatient } from "../modules/avatarPopOverContent/interface";

export const patientData: IPatient[] = [
  {
    name: "Ayush Verma",
    DOB: `${new Date("22-09-2006")}`,
    profile_pic: "profilePic.jpeg",
    user_name: "ayush_verma",
    email: "ayushverma@gmail.com",
    contact_number: "+1(382)880-9067",
    address: "BHU, Windsor, Canada",
    role: "patient" as EUserRole,
    gender: EGender.male,
    room_id: "1rp",
    doctors: ["arun_tyagi", "asha_negi"],
  },
  {
    name: "Tom Cruise",
    DOB: `${new Date("01-01-2010")}`,
    profile_pic: "patient_1.jpeg",
    user_name: "tom_cruise",
    email: "tomcruise@gmail.com",
    contact_number: "+1(382)880-3489",
    address: "EGH, Windsor, Canada",
    role: "patient" as EUserRole,
    gender: EGender.male,
    room_id: "2rp",
    doctors: ["arun_tyagi", "asha_negi"],
  },
  {
    name: "Kiya Johnson",
    DOB: `${new Date("15-03-2021")}`,
    profile_pic: "patient_2.jpeg",
    user_name: "kiya_johnson",
    email: "kiyajohnson@gmail.com",
    contact_number: "+1(382)880-1234",
    address: "CJI, Windsor, Canada",
    role: "patient" as EUserRole,
    gender: EGender.female,
    room_id: "3rp",
    doctors: ["arun_tyagi", "asha_negi"],
  },
];
