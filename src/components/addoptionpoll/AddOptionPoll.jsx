import React from "react";
import { dispatch } from "../../redux/store/store";
import { useFormik } from "formik";
import { optionsAdd, resetReducer } from "../../redux/reducers/optionsSlice";
import { TextField } from "@mui/material";
import Button from "../button/Button";
import "../editpoll/EditPoll.css";
import { optionSchema } from "../../utilities/utilities";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const AddOptionPoll = () => {
  const loading = useSelector((state) => state.optionsSlice.isLoading);
  const status = useSelector((state) => state.optionsSlice.isSuccess);
  const navigate = useNavigate();
  const { addoptionId } = useParams();
  const location=useLocation()

  if (status) {
    dispatch(resetReducer());
    navigate("/adminpoll");
  }

  const formikData = useFormik({
    initialValues: {
      option: "",
    },
    onSubmit: (values) => {
      try {
        dispatch(optionsAdd(values, addoptionId));
      } catch (error) {}
    },
    validationSchema: optionSchema,
  });



  return (
    <div className="adminPollContainer editContainer">
      <div className="editBox">
        <form autoComplete="off" onSubmit={formikData.handleSubmit}>
        <div>
            <p className="text">Title</p>
            <TextField
              className="textUpdate"
              type="text"
              value={location.state}
              disabled
            />
          </div>
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
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              <Button
                value={"Submit"}
                classname={"buttonStyle"}
                type={"submit"}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOptionPoll;
