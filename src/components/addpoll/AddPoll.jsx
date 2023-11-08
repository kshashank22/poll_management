import React from "react";
import { TextField } from "@material-ui/core";
import Button from "../button/Button";
import "./AddPoll.css";
import { CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { dispatch } from "../../redux/store/store";
import { addPoll } from "../../redux/reducers/addPollSlice";

const AddPoll = ({
  setAddNewPoll,
  onstatus,
  newTitle,
  setNewTitle,
  newOptions,
  setNewOptions,
}) => {
  const handleClick = () => {
    setNewOptions([...newOptions, { option: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPoll(newTitle, newOptions));
    setNewOptions([{ option: "" }]);
    setNewTitle("");
    setAddNewPoll(false);
  };

  const handleChange = (event, i) => {
    const { name, value } = event.target;
    const onChangeValue = [...newOptions];
    onChangeValue[i][name] = value;
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
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          <div>
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
          {onstatus ? (
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
