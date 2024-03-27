// healthUtils.ts

import { HealthParameter, HealthRecord } from "../types/types";

export const generateRandomHealthParameter = (): HealthParameter => {
  const parameterNames = ["blood_pressure", "heart_rate", "temperature"];
  const randomName =
    parameterNames[Math.floor(Math.random() * parameterNames.length)];

  return {
    name: randomName,
    reading: Math.floor(Math.random() * 100), // Random value for demonstration
    unit: "mmHg", // Replace with appropriate units
    img: "path/to/image", // Replace with actual image path
  };
};

const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 10); // Adjust the length as needed
};

export const generateRandomHealthRecord = (): HealthRecord => {
  const parameters = Array.from({ length: 3 }, () =>
    generateRandomHealthParameter(),
  );

  const currentDate = new Date();
  const timestamp = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}*${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  return {
    _id: generateRandomId(),
    timestamp,
    parameters,
  };
};

export const generateRandomPatientData = (
  entryCount: number,
): HealthRecord[] => {
  return Array.from({ length: entryCount }, () => generateRandomHealthRecord());
};
