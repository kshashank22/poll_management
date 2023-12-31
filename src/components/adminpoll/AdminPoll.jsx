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
import { CircularProgress, Snackbar } from "@mui/material";
import AddPoll from "../addpoll/AddPoll";
import Pagination from "../pagination/Pagination";
import { resetReducer } from "../../redux/reducers/deleteOptionSlice";
import { resetReducers } from "../../redux/reducers/deleteSlice";
import Backdrop from "@mui/material/Backdrop";

function AdminPoll() {
  const listItems = useSelector((state) => state.pollSlice.data);
  const status = useSelector((state) => state.pollSlice.isLoading);
  const error = useSelector((state) => state.pollSlice.isError);
  const deleteOptionSuccess = useSelector(
    (state) => state.deleteOptionSlice.isSuccess
  );
  const deleteSuccess = useSelector((state) => state.deleteSlice.isSuccess);
  const navigate = useNavigate();

  const [addNewPoll, setAddNewPoll] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newOptions, setNewOptions] = useState([{ option: "" }]);
  const [page, setPage] = useState(0);

  const [rowsPerPageOption, setRowsPerPageOption] = useState([5, 10, 15]);

  const row = () => {
    if (localStorage.getItem("rowpage")) {
      return JSON.parse(localStorage.getItem("rowpage"));
    }
    return 5;
  };

  const [rowPerPage, setRowPerPage] = useState(row());

  useEffect(() => {
    if (deleteOptionSuccess) {
      dispatch(fetchedData());
      dispatch(resetReducer());
    }
  }, [deleteOptionSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      dispatch(fetchedData());
      dispatch(resetReducers());
    }
  }, [deleteSuccess]);

  useEffect(() => {
    dispatch(fetchedData());
    const data = JSON.parse(localStorage.getItem("page"));
    if (data) {
      setPage(parseInt(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("page", page);
    localStorage.setItem("rowpage", rowPerPage);
  }, [page, rowPerPage]);

  const handleAdd = () => {
    setAddNewPoll(!addNewPoll);
  };

  const handleEachItem = (id) => {
    dispatch(eachData(id));
    navigate("/eachpoll");
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  const handleChangePage = (event, updatePage) => {
    setPage(updatePage);
  };

  const handleRowPerPage = (event) => {
    setRowPerPage(event.target.value);
    setPage(0);
  };

  return (
    <div className="adminPollContainer">
      <h1 className="heading">Admin Poll</h1>
      <div className="addIcon">
        <Button value={`AddPoll + `} classname={"button"} onclick={handleAdd} />
      </div>
      {addNewPoll ? (
        <AddPoll
          onstatus={status}
          addNewPoll={addNewPoll}
          setAddNewPoll={setAddNewPoll}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newOptions={newOptions}
          setNewOptions={setNewOptions}
        />
      ) : (
        <>
          {status ? (
            <div className="loader">
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                <CircularProgress size="1rem" color="inherit" />
              </Backdrop>
            </div>
          ) : (
            <ul className="adminPollData">
              {listItems
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((each) => (
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
                onclick={handleLogout}
              />
            </NavLink>
          </div>
        </>
      )}
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          message={listItems.message}
        />
      )}
      <div className="paginationContainer">
        <Pagination
          rowsPerPageOptions={rowsPerPageOption}
          count={listItems.length}
          page={!listItems.length || listItems.length <= 0 ? 0 : page}
          rowsPerPage={rowPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowPerPage}
        />
      </div>
    </div>
  );
}

export default AdminPoll;
