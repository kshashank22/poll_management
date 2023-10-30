import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "https://etechpolltesting.onrender.com/",
});

export default axiosInstance;
