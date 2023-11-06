import React, { useState, useEffect } from "react";
import { dispatch } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { fetchedData } from "../../redux/reducers/pollSlice";
import { eachData } from "../../redux/reducers/eachPollSlice";
import "./AdminPoll.css";
import DataLists from "../datalists/DataLists";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Snackbar } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import AddPoll from "../addpoll/AddPoll";
import { useFormik } from "formik";
import { addPoll } from "../../redux/reducers/addPollSlice";
import { newPollSchema } from "../../utilities/utilities";

function AdminPoll() {
  const listItems = useSelector((state) => state.pollSlice.data);
  const status = useSelector((state) => state.pollSlice.isLoading);
  const error = useSelector((state) => state.pollSlice.isError);
  const addStatus = useSelector((state) => state.addPollSlice.isLoading);
  const navigate = useNavigate();

  const [addNewPoll, setAddNewPoll] = useState(false);

  useEffect(() => {
    dispatch(fetchedData());
  }, []);

  const formikData = useFormik({
    initialValues: {
      newTitle: "",
      option1: "",
    },
    onSubmit: (values, actions) => {
      try {
        dispatch(addPoll(values));
      } catch (error) {}
      setAddNewPoll(false);
      actions.resetForm();
    },
    validationSchema:newPollSchema
  });

  const handleAdd = () => {
    setAddNewPoll(!addNewPoll);
  };

  const handleEachItem = (id) => {
    dispatch(eachData(id));
    navigate("/eachpoll");
  };

  if (error) {
    return (
      <Snackbar
        open={true}
        autoHideDuration={6000}
        message={listItems.message}
      />
    );
  }

  return (
    <div className="adminPollContainer">
      <h1 className="heading">Admin Poll</h1>
      <div className="addIcon">
        <label className="addPoll" onClick={handleAdd}>
          Add Poll
        </label>
        <AddIcon />
      </div>
      {addNewPoll ? (
        <AddPoll
          onsubmit={formikData.handleSubmit}
          onblur={formikData.handleBlur}
          onchange={formikData.handleChange}
          addnewtitle={formikData.values.newTitle}
          addnewoption1={formikData.values.option1}
          onstatus={addStatus}
        />
      ) : (
        <>
          {status ? (
            <div className="loader">
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <ul className="adminPollData">
              {listItems.map((each) => (
                <DataLists
                  key={each._id}
                  values={each}
                  onclick={() => handleEachItem(each._id)}
                />
              ))}
            </ul>
          )}
          <div className="button">
            <NavLink to="/">
              <Button
                value={"Log Out"}
                classname={"buttonStyle"}
                type={"submit"}
              />
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminPoll;
