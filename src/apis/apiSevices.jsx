import axios from "axios";

export const instance = axios.create({
  baseUrl: "https://etechpolltesting.onrender.com/",
});
