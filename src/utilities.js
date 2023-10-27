import * as yup from "yup";
import {v4 as uuidv4} from 'uuid';

const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
export const initialValues = {
  id:uuidv4(),
  username: "",
  password: "",
  role:"",
};

export const basicSchema = yup.object().shape({
  username: yup.string().min(3).required("*UserName is Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordregex, { message: "Please Fill Valid Password" })
    .required("*Password is Required"),
});
