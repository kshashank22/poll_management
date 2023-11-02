import React from "react";
import { useSelector } from "react-redux";
import "../adminpoll/AdminPoll.css";
import DataLists from "../datalists/DataLists";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { CircularProgress, Snackbar } from "@material-ui/core";

function EachDataPoll() {
  const listItem = useSelector((state) => state.eachPollSlice.data);
  const status = useSelector((state) => state.eachPollSlice.isLoading);
  const error = useSelector((state) => state.eachPollSlice.isError);

  if (error) {
    return (
      <Snackbar
        open={true}
        autoHideDuration={6000}
        message={listItem.message}
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
          <DataLists key={listItem._id} values={listItem} />
        </ul>
      )}

      <div className="button">
        <NavLink to="/adminpoll">
          <Button value={"Back"} classname={"buttonStyle"} type={"submit"} />
        </NavLink>
      </div>
    </div>
  );
}

export default EachDataPoll;
