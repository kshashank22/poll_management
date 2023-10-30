import React from "react";
import { login } from "../../redux/reducers/loginSlice";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { basicSchema } from "../../utilities";
import { verifiedUser } from "../../redux/reducers/loginSlice";
import { dispatch } from "../../redux/store/store";
import "./LogIn.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";

function LogIn() {
  const formikData = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      try {
        const user = login(values.username, values.password);
        dispatch(verifiedUser(user));
      } catch (error) {}
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });
  return (
    <div className="pollPageContainer">
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
            <Button
              value={"Log In"}
              classname={"buttonStyle"}
              type={"submit"}
            />
            <NavLink to="/signup">
              <Button
                value={"Sign Up"}
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

export default LogIn;
