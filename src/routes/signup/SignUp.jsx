import React from "react";
import { TextField } from "@material-ui/core";
import "../login/LogIn.css";
import { useFormik } from "formik";
import { basicSchema } from "../../utilities";
import { signup } from "../../redux/reducers/loginSlice";
import { v4 as uuidv4 } from "uuid";
import { dispatch } from "../../redux/store/store";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";

function SignUp() {
  const formikData = useFormik({
    initialValues: { id: uuidv4(), username: "", password: "", role: "Guest" },
    onSubmit: (values, actions) => {
      try {
        dispatch(signup(values.username, values.password, values.role));
      } catch (error) {}
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="pollPageContainer">
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
            <Button
              value={"Sign Up"}
              classname={"buttonStyle"}
              type={"submit"}
            />
            <NavLink to="/">
              <Button
                value={"Sign In"}
                classname={"buttonStyle"}
                type={"submit"}
              />
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
