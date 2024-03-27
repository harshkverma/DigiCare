import { IBookAppointment } from "../modules/appointments/interface";

export const bookAppointmentDummyData: IBookAppointment[] = [
  {
    id: "1b",
    doctor_username: "arun_tyagi",
    online_availability: {
      timeIntervals: 15,
      days: [
        {
          id: "arun_tyagiay",
          name: "Mon",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "1time",
              start_time: "09:00",
              is_booked: true,
            },
            {
              id: "2time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "3time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "4time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "5time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "6time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "7time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "8time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "asha_negiay",
          name: "Tue",
          start_time: "21:00",
          end_time: "23:00",
          time_slots: [
            {
              id: "21time",
              start_time: "21:00",
              is_booked: false,
            },
            {
              id: "22time",
              start_time: "21:15",
              is_booked: false,
            },
            {
              id: "23time",
              start_time: "21:30",
              is_booked: false,
            },
            {
              id: "24time",
              start_time: "21:45",
              is_booked: false,
            },
            {
              id: "25time",
              start_time: "22:00",
              is_booked: false,
            },
            {
              id: "26time",
              start_time: "22:15",
              is_booked: false,
            },
            {
              id: "27time",
              start_time: "22:30",
              is_booked: false,
            },
            {
              id: "28time",
              start_time: "22:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "3Day",
          name: "Wed",
          start_time: "16:00",
          end_time: "17:00",
          time_slots: [
            {
              id: "31time",
              start_time: "16:00",
              is_booked: false,
            },
            {
              id: "32time",
              start_time: "16:15",
              is_booked: false,
            },
            {
              id: "33time",
              start_time: "16:30",
              is_booked: false,
            },
            {
              id: "34time",
              start_time: "16:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "4Day",
          name: "Thu",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "41time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "42time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "43time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "44time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "45time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "46time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "47time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "48time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "5Day",
          name: "Fri",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "51time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "52time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "53time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "54time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "55time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "56time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "57time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "58time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "6Day",
          name: "Sat",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "61time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "62time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "63time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "64time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "65time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "66time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "67time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "68time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "7Day",
          name: "Sun",
          start_time: "09:00",
          end_time: "10:00",
          time_slots: [
            {
              id: "71time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "72time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "73time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "74time",
              start_time: "09:45",
              is_booked: false,
            },
          ],
        },
      ],
    },
    appointments: [
      {
        id: "1a",
        date: new Date("2024-03-24T09:00:00"),
        description: "Dentist appointment",
        patient_username: "ayush_verma",
        doctor_username: "arun_tyagi",
        room_id: "1rp",
      },
      {
        id: "2a",
        date: new Date("2024-03-22T14:30:00"),
        description: "To update on heart condition",
        patient_username: "tom_cruise",
        doctor_username: "arun_tyagi",
        room_id: "2rp",
      },
      {
        id: "3a",
        date: new Date("2024-03-25T11:00:00"),
        description: "Follow-up doctor's appointment",
        patient_username: "ayush_verma",
        doctor_username: "arun_tyagi",
        room_id: "1rp",
      },
      {
        id: "4a",
        date: new Date("2024-03-10T16:00:00"),
        description: "Injury healing situation",
        patient_username: "ayush_verma",
        doctor_username: "arun_tyagi",
        room_id: "1rp",
      },
    ],
  },
  {
    id: "2b",
    doctor_username: "asha_negi",
    online_availability: {
      timeIntervals: 15,
      days: [
        {
          id: "arun_tyagiay",
          name: "Mon",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "1time",
              start_time: "09:00",
              is_booked: true,
            },
            {
              id: "2time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "3time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "4time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "5time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "6time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "7time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "8time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "asha_negiay",
          name: "Tue",
          start_time: "21:00",
          end_time: "23:00",
          time_slots: [
            {
              id: "21time",
              start_time: "21:00",
              is_booked: false,
            },
            {
              id: "22time",
              start_time: "21:15",
              is_booked: false,
            },
            {
              id: "23time",
              start_time: "21:30",
              is_booked: false,
            },
            {
              id: "24time",
              start_time: "21:45",
              is_booked: false,
            },
            {
              id: "25time",
              start_time: "22:00",
              is_booked: false,
            },
            {
              id: "26time",
              start_time: "22:15",
              is_booked: false,
            },
            {
              id: "27time",
              start_time: "22:30",
              is_booked: false,
            },
            {
              id: "28time",
              start_time: "22:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "3Day",
          name: "Wed",
          start_time: "16:00",
          end_time: "17:00",
          time_slots: [
            {
              id: "31time",
              start_time: "16:00",
              is_booked: false,
            },
            {
              id: "32time",
              start_time: "16:15",
              is_booked: false,
            },
            {
              id: "33time",
              start_time: "16:30",
              is_booked: false,
            },
            {
              id: "34time",
              start_time: "16:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "4Day",
          name: "Thu",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "41time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "42time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "43time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "44time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "45time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "46time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "47time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "48time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "5Day",
          name: "Fri",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "51time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "52time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "53time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "54time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "55time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "56time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "57time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "58time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "6Day",
          name: "Sat",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              id: "61time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "62time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "63time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "64time",
              start_time: "09:45",
              is_booked: false,
            },
            {
              id: "65time",
              start_time: "10:00",
              is_booked: false,
            },
            {
              id: "66time",
              start_time: "10:15",
              is_booked: false,
            },
            {
              id: "67time",
              start_time: "10:30",
              is_booked: false,
            },
            {
              id: "68time",
              start_time: "10:45",
              is_booked: false,
            },
          ],
        },
        {
          id: "7Day",
          name: "Sun",
          start_time: "09:00",
          end_time: "10:00",
          time_slots: [
            {
              id: "71time",
              start_time: "09:00",
              is_booked: false,
            },
            {
              id: "72time",
              start_time: "09:15",
              is_booked: false,
            },
            {
              id: "73time",
              start_time: "09:30",
              is_booked: false,
            },
            {
              id: "74time",
              start_time: "09:45",
              is_booked: false,
            },
          ],
        },
      ],
    },
    appointments: [
      {
        id: "21a",
        date: new Date("2024-03-20T10:00:00"),
        description: "Dentist appointment",
        patient_username: "ayush_verma",
        doctor_username: "asha_negi",
        room_id: "1rp",
      },
      {
        id: "21a",
        date: new Date("2024-03-20T09:00:00"),
        description: "Dentist appointment",
        patient_username: "tom_cruise",
        doctor_username: "asha_negi",
        room_id: "2rp",
      },
      {
        id: "22a",
        date: new Date("2024-03-22T14:30:00"),
        description: "To update on heart condition",
        patient_username: "kiya_johnson",
        doctor_username: "asha_negi",
        room_id: "3rp",
      },
    ],
  },
];
