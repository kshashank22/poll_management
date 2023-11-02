import React from "react";
import "./DataLists.css";

const DataLists = ({ values, onclick }) => {
  return (
    <li className="listContainer" onClick={onclick}>
      <h1 className="title">{values.title}</h1>
      <ul className="options">
        {values.options.map((each) => (
          <div key={each.option} className="optionContainer">
            <li className="option">{each.option}</li>
            <label className="vote">votes:{each.vote}</label>
          </div>
        ))}
      </ul>
    </li>
  );
};

export default DataLists;
