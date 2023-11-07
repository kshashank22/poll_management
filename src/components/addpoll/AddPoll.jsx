import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../button/Button";
import "./AddPoll.css";
import { CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const AddPoll = ({
  onsubmit,
  onblur,
  onchange,
  addnewtitle,
  addnewoption,
  onstatus,
}) => {
  const [display, setDisplay] = useState(false);

  const handleAddOptions = () => {
    setDisplay(true);
  };

  return (
    <div className="addPollContainer">
      <form onSubmit={onsubmit} autoComplete="off">
        <div>
          <p>Title</p>
          <TextField
            type="text"
            className="text"
            name="newTitle"
            id="newTitle"
            value={addnewtitle}
            onBlur={onblur}
            onChange={onchange}
          />
        </div>

        <div>
          <p>option</p>
          <TextField
            type="text"
            className="text"
            name="option"
            id="option"
            value={addnewoption}
            onBlur={onblur}
            onChange={onchange}
          />
        </div>
        {display && (
          <div>
            <p>option</p>
            <TextField
              type="text"
              className="text"
              name="option3"
              id="option3"
              value={addnewoption}
              onBlur={onblur}
              onChange={onchange}
            />
          </div>
        )}
        <AddIcon onClick={handleAddOptions} className="addOption"/>
        <div className="buttonContainer">
          {onstatus ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button
              value={"submit"}
              type={"submit"}
              classname={"buttonStyle"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddPoll;
