import axios from "axios";

export const serverWeb = axios.create({
  baseURL: "http://localhost:3333",
})