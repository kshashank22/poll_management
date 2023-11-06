import React from "react";
import { dispatch } from "../../redux/store/store";
import { useFormik } from "formik";
import { optionsAdd } from "../../redux/reducers/optionsSlice";
import { TextField } from "@mui/material";
import Button from "../button/Button";
import "../editpoll/EditPoll.css";
import { optionSchema } from "../../utilities/utilities";

const AddOptionPoll = ({ addOptionId, setAddOptionId }) => {
  const formikData = useFormik({
    initialValues: {
      option: "",
    },
    onSubmit: (values, actions) => {
      console.log(addOptionId);
      try {
        dispatch(optionsAdd(values, addOptionId));
      } catch (error) {}
      setAddOptionId(null);
      actions.resetForm();
    },
    validationSchema: optionSchema,
  });
  return (
    <div className="adminPollContainer editContainer">
      <div className="editBox">
        <form autoComplete="off" onSubmit={formikData.handleSubmit}>
          <div>
            <p className="text">Add Option</p>
            <TextField
              className="textUpdate"
              type="text"
              name="option"
              id="option"
              value={formikData.values.option}
              onBlur={formikData.handleSubmit}
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

export default AddOptionPoll;
