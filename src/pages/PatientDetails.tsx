import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientDetails } from "../modules/patientDetails";
import { useParams } from "react-router";

export const DigicarePatientDetails = () => {
  const { patient_username } = useParams();

  return (
    <DigiCareDrawer>
      <MPatientDetails patient_username={patient_username} />
    </DigiCareDrawer>
  );
};
