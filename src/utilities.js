import * as yup from "yup";
import axios from "axios";


const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;


export const basicSchema = yup.object().shape({
  username: yup.string().min(3).required("*UserName is Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordregex, { message: "Please Fill Valid Password" })
    .required("*Password is Required"),
});


export const instance = axios.create({
  baseUrl: "https://etechpolltesting.onrender.com/",
});