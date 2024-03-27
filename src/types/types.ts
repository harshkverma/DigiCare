// types.ts

export interface HealthParameter {
  name: string;
  reading: number;
  unit: string;
  img: string;
}

export interface HealthRecord {
  _id: string; // Add the _id property
  timestamp: string;
  parameters: HealthParameter[];
}

export const generateRandomHealthParameter = (): HealthParameter => {
  const parameterNames = ["Blood Pressure", "Heart Rate", "O2"];
  const randomName =
    parameterNames[Math.floor(Math.random() * parameterNames.length)];

  return {
    name: randomName,
    reading: Math.floor(Math.random() * 100),
    unit: "mmHg",
    img: "path/to/image",
  };
};

export const generateRandomHealthRecord = (): HealthRecord => {
  const currentDate = new Date();
  const timestamp = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}*${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  const parameters = Array.from({ length: 3 }, () =>
    generateRandomHealthParameter(),
  );

  return {
    _id: Math.random().toString(36).substring(7), // Generate a random _id
    timestamp,
    parameters,
  };
};
