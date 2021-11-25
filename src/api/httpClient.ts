import axios, { AxiosError } from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.polygon.io/",
  method: "GET",
  timeout: 4000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});

export const handleAxiosError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);
};
