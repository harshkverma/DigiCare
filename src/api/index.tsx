import axios from "axios";
import { digicareConfig } from "../assets/constants/config";

console.log(process.env.REACT_APP_BACKEND_HOST)
export const digiAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
