import { digiAxios } from ".";
import { LinkDoctorPatientProps } from "./interface";

export const linkDoctorPatient = (object: LinkDoctorPatientProps) => {
  return digiAxios.post("/doctorpatientrelation", object);
};
