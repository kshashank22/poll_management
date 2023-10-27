import React from "react";
import { TextField } from "@material-ui/core";
import "./SignUp.css";
import { useFormik } from "formik";
import { initialValues, basicSchema } from "../../utilities";
import { sigup } from "../../apis/apiSevices";

function SignUp() {
  const formikData = useFormik({
    initialValues,
    onSubmit: async (values, actions) => {
      await new Promise((data) => setTimeout(data, 500));
      try{
        await sigup(username,password);
      }catch(error){
      }
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="signupContainer">
      <h1>Sign Up</h1>
      <form autoComplete="off" onSubmit={formikData.handleSubmit}>
        <div className="label">
          <label>UserName</label>
          <br />
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
          <br />
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
          <br />
          <select
            className="role"
            value={formikData.values.role}
            onChange={formikData.handleChange}
            onBlur={formikData.handleBlur}
          >
            <option id="1" onChange={formikData.handleChange}>Guest</option>
            <option id="2" onChange={formikData.handleChange}>Admin</option>
          </select>
        </div>
        <div className="button">
          <button className="buttonStyle" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
