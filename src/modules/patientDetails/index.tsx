import { Grid, Typography, Tabs, Tab, Box } from "@mui/material";
import { History } from "../history";
import { DigiProfile } from "../profile/Profile";
import { PatientDetailsProps } from "./interface";
import { MDoctorHistory } from "../doctorHistory";
import { useState } from "react";
import "./style.scss";
import { getPatientByUsername } from "../../api/patient";
import { IPatient } from "../avatarPopOverContent/interface";

export const MPatientDetails = ({ patient_username }: PatientDetailsProps) => {
  const [patientInfo, setPatientInfo] = useState<IPatient>();
  getPatientByUsername(patient_username).then((res) => {
    setPatientInfo(res.data.data);
  });

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab
          className="patient-details-tab"
          label="Patient's Medical History"
        />
        <Tab
          className="patient-details-tab"
          label="Realtime constant's History"
        />
        <Tab className="patient-details-tab" label="Patient's Profile" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <MDoctorHistory />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <History username={patientInfo?.user_name} />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <DigiProfile user={patientInfo} isEdit={false} />
      </TabPanel>
    </Grid>
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
