import React from "react";
import { TextField } from "@material-ui/core";
import "./SignUp.css";
import { useFormik } from "formik";
import { basicSchema } from "../../utilities";
import { signup } from "../../redux/reducers/loginSlice";
import { v4 as uuidv4 } from "uuid";
import { dispatch } from "../../redux/store/store";
import { NavLink } from "react-router-dom";

function SignUp() {
  const formikData = useFormik({
    initialValues: { id: uuidv4(), username: "", password: "", role: "Guest" },
    onSubmit: async (values, actions) => {
      try {
        await dispatch(signup(username, password));
      } catch (error) {}
      await new Promise((data) => setTimeout(data, 500));
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="formContainer">
      <h1>Sign Up</h1>
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

        <div className="label">
          <label>Role</label>
          <select
            name="role"
            className="role"
            onChange={formikData.handleChange}
            onBlur={formikData.handleBlur}
          >
            <option value="Guest">Guest</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="button">
          <button className="buttonStyle" type="submit">
            Sign Up
          </button>
          <NavLink to="/login">
            <button className="buttonStyle" type="submit">
              Sign In
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
