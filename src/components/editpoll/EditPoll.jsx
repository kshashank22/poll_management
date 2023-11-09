import React from "react";
import { dispatch } from "../../redux/store/store";
import { useFormik } from "formik";
import { updateTitle, resetReducer } from "../../redux/reducers/optionsSlice";
import { TextField } from "@mui/material";
import Button from "../button/Button";
import "./EditPoll.css";
import { titleSchema } from "../../utilities/utilities";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const EditPoll = () => {
  const loading = useSelector((state) => state.optionsSlice.isLoading);
  const status = useSelector((state) => state.optionsSlice.isSuccess);
  const navigate = useNavigate();
  const { edittitleId } = useParams();
  const location = useLocation();

  if (status) {
    dispatch(resetReducer());
    navigate("/adminpoll");
  }

  const formikData = useFormik({
    initialValues: {
      title: location.state,
    },
    onSubmit: (values) => {
      try {
        dispatch(updateTitle(values, edittitleId));
      } catch (error) {}
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

export default EditPoll;
