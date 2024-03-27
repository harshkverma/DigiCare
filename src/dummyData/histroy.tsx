export const historyData = [
  {
    _id: "1",
    timestamp: new Date(),
    record: [
      {
        _id: "1r",
        name: "blood_pressure",
        reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
      },
      {
        _id: "2r",
        name: "heart_rate",
        reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
      },
      {
        _id: "3r",
        name: "bmi",
        reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
      },
      {
        _id: "5r",
        name: "o2",
        reading: `${Math.floor(Math.random() * 100)}`,
        unit: "%",
      },
      {
        _id: "6r",
        name: "sugar_level",
        reading: `${Math.floor(Math.random() * 300)}`,
        unit: "mg/dL",
      },
    ],
  },
  {
    _id: "2",
    timestamp: new Date(),
    record: [
      {
        _id: "7t",
        name: "blood_pressure",
        reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
      },
      {
        _id: "8r",
        name: "heart_rate",
        reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
      },
      {
        _id: "9r",
        name: "bmi",
        reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
      },
    ],
  },
  {
    _id: "3",
    timestamp: new Date(),
    record: [
      {
        _id: "1t",
        name: "blood_pressure",
        reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
      },
      {
        _id: "2t",
        name: "heart_rate",
        reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
      },
      {
        _id: "1mvs",
        name: "bmi",
        reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
      },
    ],
  },
  {
    _id: "4",
    timestamp: new Date(),
    record: [
      {
        _id: "1asdv",
        name: "weight",
        reading: `${Math.floor(Math.random() * 200)}`,
        unit: "Kg",
      },
    ],
  },
  {
    _id: "5",
    timestamp: new Date(),
    record: [
      {
        _id: "1ava",
        name: "o2",
        reading: `${Math.floor(Math.random() * 100)}`,
        unit: "%",
      },
      {
        _id: "1avde",
        name: "sugar_level",
        reading: `${Math.floor(Math.random() * 300)}`,
        unit: "mg/dL",
      },
    ],
  },
];
