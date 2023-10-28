import React from "react";
import { login } from "../../redux/reducers/loginSlice";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { basicSchema } from "../../utilities";
import { verifiedUser } from "../../redux/reducers/loginSlice";
import { dispatch } from "../../redux/store/store";
import "./LogIn.css";

function LogIn() {
  const formikData = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      await new Promise((data) => setTimeout(data, 500));
      try {
        const user = await login(username, password);
        dispatch(verifiedUser(user));
      } catch (error) {}
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });
  return (
    <div className="formContainer">
      <h1>Log In</h1>
      <form autoComplete="off" onSubmit={formikData.handleSubmit}>
        <div className="label">
          <label>UserName</label>
          <TextField
            type="text"
            className="text"
            name="username"
            id="username"
            value={formikData.values.username}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
        </div>
        {formikData.errors.username && formikData.touched.username ? (
          <p className="error">{formikData.errors.username}</p>
        ) : (
          ""
        )}
        <div className="label">
          <label>Password</label>
          <TextField
            type="password"
            className="text"
            name="password"
            id="password"
            value={formikData.values.password}
            onBlur={formikData.handleBlur}
            onChange={formikData.handleChange}
          />
          {formikData.errors.password && formikData.touched.password ? (
            <p className="error">{formikData.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <div className="button">
          <button className="buttonStyle" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
