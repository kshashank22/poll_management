import React from "react";
import { TextField } from "@material-ui/core";
import Button from "../button/Button";
import "./AddPoll.css";
const AddPoll = ({
  onsubmit,
  onblur,
  onchange,
  addnewtitle,
  addnewoption1,
}) => {
  return (
    <div className="addPollContainer">
      <form onSubmit={onsubmit}>
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
          <p>option 1</p>
          <TextField
            type="text"
            className="text"
            name="option1"
            id="option1"
            value={addnewoption1}
            onBlur={onblur}
            onChange={onchange}
          />
        </div>

        <div className="buttonContainer">
          <Button value={"submit"} type={"submit"} classname={"buttonStyle"} />
        </div>
      </form>
    </div>
  );
};

export default AddPoll;
