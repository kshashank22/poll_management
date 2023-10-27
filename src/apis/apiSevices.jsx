import axios from "axios";

const instance = axios.create({
  baseUrl: "https://etechpolltesting.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sigup = async (username, password) => {
  try {
    const response = await instance.post(
      `add_user?username=admin&password=admin&role=admin`,
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await instance.post(
      `login?username=admin&password=admin`,
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
