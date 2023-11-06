import React from "react";
import { dispatch } from "../../redux/store/store";
import { useFormik } from "formik";
import { updateTitle } from "../../redux/reducers/optionsSlice";
import { TextField } from "@mui/material";
import Button from "../button/Button";
import "./EditPoll.css";
import {titleSchema } from "../../utilities/utilities";

const EditPoll = ({ value, updateTitleId, setUpdateTitleId }) => {
  const formikData = useFormik({
    initialValues: {
      title: value,
    },
    onSubmit: (values, actions) => {
      console.log(updateTitleId);
      try {
        dispatch(updateTitle(values, updateTitleId));
      } catch (error) {}
      setUpdateTitleId(null);
      actions.resetForm();
    },
    validationSchema: titleSchema,
  });
  return (
    <div className="adminPollContainer editContainer">
      <div className="editBox">
        <form autoComplete="off" onSubmit={formikData.handleSubmit}>
          <div>
            <p className="text">Update Title</p>
            <TextField
              className="textUpdate"
              type="text"
              name="title"
              id="updateTitle"
              value={formikData.values.title}
              onBlur={formikData.handleBlur}
              onChange={formikData.handleChange}
            />
          </div>
          <div className="button">
            <Button
              value={"Submit"}
              classname={"buttonStyle"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPoll;
