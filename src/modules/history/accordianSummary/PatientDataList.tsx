// src/components/PatientDataList.tsx

import React from "react";
import { Box, Typography } from "@mui/material";

interface HealthParameter {
  name: string;
  reading: number;
  unit: string;
  img: string;
}

interface PatientDataListProps {
  patientData: HealthParameter[];
}

const PatientDataList: React.FC<PatientDataListProps> = ({ patientData }) => {
  return (
    <div>
      {patientData.map((parameter, index) => (
        <Box key={index} className="parameter-box-vertical">
          <Typography variant="subtitle1">{`Name: ${parameter.name}`}</Typography>
          <Typography variant="body1">{`Reading: ${parameter.reading}`}</Typography>
          <Typography variant="body1">{`Unit: ${parameter.unit}`}</Typography>
        </Box>
      ))}
    </div>
  );
};

export default PatientDataList;
