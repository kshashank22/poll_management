import React from "react";
import "./DataLists.css";


const DataLists = ({ values }) => {
  return (
    <li className="listContainer">
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
