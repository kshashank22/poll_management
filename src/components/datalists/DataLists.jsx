import React, { useState } from "react";
import "./DataLists.css";
import { dispatch } from "../../redux/store/store";
import { fetchedData } from "../../redux/reducers/pollSlice";
import { optionsAdd, updateTitle } from "../../redux/reducers/optionsSlice";
import { useFormik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@material-ui/core";
import { optionSchema } from "../../utilities/utilities";
import { deleteOption } from "../../redux/reducers/deleteOptionSlice";
import { deletePoll } from "../../redux/reducers/deleteSlice";
import { useNavigate } from "react-router-dom";
import EditPoll from "../editpoll/EditPoll";
import AddOptionPoll from "../addoptionpoll/AddOptionPoll";

const DataLists = ({ values, onclick }) => {
  const [addOptionId, setAddOptionId] = useState(null);
  const [updateTitleId, setUpdateTitleId] = useState(null);

  const navigate=useNavigate()

  // const formikData = useFormik({
  //   initialValues: {
  //     option: "",
  //     title: values.title,
  //   },
  //   onSubmit: (values, actions) => {
  //     try {
  //       if (addOptionId) {
  //         dispatch(optionsAdd(values, addOptionId));
  //       } else if (updateTitleId) {
  //         dispatch(updateTitle(values, updateTitleId));
  //       }
  //     } catch (error) {}
  //     setAddOptionId(null)
  //     setUpdateTitleId(null)
  //     actions.resetForm();
  //   },
  //   validationSchema: optionSchema,
  // });

  const handleAdd = (id) => {
    setAddOptionId(id);
    // navigate("/addoption")
  };

  const handleUpdate = (id) => {
    setUpdateTitleId(id);
    // navigate("/edittitle")
  };

  const handleDeleteOption = (id, opt) => {
    dispatch(deleteOption(id, opt));
    alert("option is deleted")
  };

  const handleDelete = (id) => {
    dispatch(deletePoll(id));
    alert("poll is deleted")
  };

  return (
    <li className="listContainer">
      <div className="titleContainer">
        {/* {updateTitleId ? (
          <form autoComplete="off" onSubmit={formikData.handleSubmit}>
            <TextField
              type="text"
              name="title"
              id="updateTitle"
              value={formikData.values.title}
              onBlur={formikData.handleSubmit}
              onChange={formikData.handleChange}
            />
          </form>
        ) : ( */}
          <h1 className="title" onClick={onclick}>
            {values.title}
          </h1>
        {/* )} */}

        <div className="iconsContainer">
          {values.options.length<4&&(<AddIcon className="icons" onClick={() => handleAdd(values._id)} />)}
          <EditIcon
            className="icons"
            onClick={() => handleUpdate(values._id)}
          />
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
      {/* {addOptionId && (
        <form autoComplete="off" onSubmit={formikData.handleSubmit}>
          <TextField
            type="text"
            name="option"
            id="option"
            value={formikData.values.option}
            onBlur={formikData.handleSubmit}
            onChange={formikData.handleChange}
          />
        </form>
      )} */}
      {updateTitleId&&<EditPoll value={values.title} updateTitleId={updateTitleId} setUpdateTitleId={setUpdateTitleId}/>}
      {addOptionId&&(<AddOptionPoll addOptionId={addOptionId} setAddOptionId={setAddOptionId}/>)}
    </li>
  );
};

export default DataLists;
