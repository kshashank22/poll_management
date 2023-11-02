import React, { useEffect } from "react";
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

function AdminPoll() {
  const listItems = useSelector((state) => state.pollSlice.data);
  const status = useSelector((state) => state.pollSlice.isLoading);
  const error = useSelector((state) => state.pollSlice.isError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchedData());
  }, []);

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
      <h1 className="heading">Participate In Poll</h1>
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
          <Button value={"Log Out"} classname={"buttonStyle"} type={"submit"} />
        </NavLink>
      </div>
    </div>
  );
}

export default AdminPoll;
