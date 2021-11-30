import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.polygon.io/",
  // method: "GET",
  timeout: 4000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});
