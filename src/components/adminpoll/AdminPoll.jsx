import React, { useEffect } from "react";
import { dispatch } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { fetchedData } from "../../redux/reducers/pollSlice";
import "./AdminPoll.css";
import DataLists from "../datalists/DataLists";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

function AdminPoll() {
  const listItems = useSelector((state) => state.pollSlice.list);
  const status = useSelector((state) => state.pollSlice.status);
  const error = useSelector((state) => state.pollSlice.error);

  useEffect(() => {
    dispatch(fetchedData());
  }, []);

  if (status === "loading") {
    return <p className="errorMessage">Loading...</p>;
  }
  if (status === "failed") {
    return <p className="errorMessage">Error: {error}</p>;
  }

  return (
    <div className="adminPollContainer">
      <h1 className="heading">Participate In Poll</h1>
      <ul className="adminPollData">
        {listItems.map((each) => (
          <DataLists key={each.id} values={each} />
        ))}
      </ul>
      <div className="button">
        <NavLink to="/">
          <Button value={"Log Out"} classname={"buttonStyle"} type={"submit"} />
        </NavLink>
      </div>
    </div>
  );
}

export default AdminPoll;
