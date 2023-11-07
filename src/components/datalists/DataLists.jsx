import React from "react";
import "./DataLists.css";
import { dispatch } from "../../redux/store/store";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteOption } from "../../redux/reducers/deleteOptionSlice";
import { deletePoll } from "../../redux/reducers/deleteSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DataLists = ({ values, onclick }) => {
  const success = useSelector((state) => state.deleteOptionSlice.isSuccess);
  const navigate = useNavigate();

  const handleDeleteOption = (id, opt) => {
    dispatch(deleteOption(id, opt));
    if (success) {
      alert("option is deleted");
      navigate("/adminpoll");
    }
  };

  const handleDelete = (id) => {
    dispatch(deletePoll(id));
    if (success) {
      alert("poll is deleted");
      navigate("/adminpoll");
    }
  };

  return (
    <li className="listContainer">
      <div className="titleContainer">
        <h1 className="title" onClick={onclick}>
          {values.title}
        </h1>
        <div className="iconsContainer">
          {values.options.length < 4 && (
            <NavLink to={`/addoption/${values._id}`}>
              <AddIcon className="icons" />
            </NavLink>
          )}

          <NavLink to={`/edittitle/${values._id}/${values.title}`}>
            <EditIcon className="icons" />
          </NavLink>

          <DeleteIcon
            className="icons"
            onClick={() => handleDelete(values._id)}
          />
        </div>
      </div>

      <ul className="options">
        {values.options.map((each) => (
          <div key={each.option} className="optionContainer">
            <li className="option">{each.option}</li>
            <div className="voteContainer">
              <label className="vote">votes:{each.vote}</label>
              <div>
                <DeleteIcon
                  className="deleteIcon"
                  onClick={() => handleDeleteOption(values._id, each.option)}
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </li>
  );
};

export default DataLists;
