import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 4000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});
