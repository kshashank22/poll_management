import { dispatch } from "../store/store";
import axiosInstance from "../../utilities/axios";
import { startLoading, loginSuccess, hasError } from "./loginSlice";

export function login(payload) {
  return async () => {
    dispatch(startLoading());
    try {
      const response = await axiosInstance.post(
        `login?username=${payload.username}&password=${payload.password}`,
        { payload }
      );
      dispatch(loginSuccess(response.data));
    } catch (e) {
      dispatch(hasError(e));
    }
  };
}
