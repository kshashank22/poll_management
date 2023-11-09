import React from "react";
import { dispatch } from "../../redux/store/store";
import { TextField } from "@material-ui/core";
import Button from "../button/Button";
import "./AddPoll.css";
import { CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { fetchedData } from "../../redux/reducers/pollSlice";
import { addPoll, resetReducer } from "../../redux/reducers/addPollSlice";

const AddPoll = ({
  addNewPoll,
  setAddNewPoll,
  newTitle,
  setNewTitle,
  newOptions,
  setNewOptions,
}) => {
  const loading = useSelector((state) => state.addPollSlice.isLoading);
  const status = useSelector((state) => state.addPollSlice.isSuccess);

  const handleClick = () => {
    setNewOptions([...newOptions, { option: "" }]);
  };

  const newOptionsList = [];

  if (status) {
    setNewOptions([{ option: "" }]);
    setNewTitle("");
    setAddNewPoll(!addNewPoll);
    dispatch(fetchedData());
    dispatch(resetReducer());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    newOptions.map((each) => newOptionsList.push(each.option));
    dispatch(addPoll(newTitle, newOptionsList));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const onChangeValue = [...newOptions];
    onChangeValue[index][name] = value;
    setNewOptions(onChangeValue);
  };

  const updatedInput = (event) => {
    if (event.target.value !== " ") {
      setNewTitle(event.target.value);
    }
  };

  return (
    <div className="addPollContainer">
      <div className="pollContainer">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <p>Title</p>
            <TextField
              type="text"
              className="text"
              name="newTitle"
              id="newTitle"
              value={newTitle}
              onChange={updatedInput}
            />
          </div>

          {newOptions.map((each, index) => (
            <div key={index}>
              <p>option</p>
              <TextField
                className="text"
                name="option"
                type="text"
                value={each.option}
                onChange={(event) => handleChange(event, index)}
              />
            </div>
          ))}

          {newOptions.length <= 3 && (
            <AddIcon onClick={handleClick} className="addOption" />
          )}

          <div className="buttonContainer">
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              <Button
                value={"submit"}
                type={"submit"}
                classname={"buttonStyle"}
                onclick={handleSubmit}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoll;
