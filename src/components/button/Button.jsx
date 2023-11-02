import React from "react";

const Button = ({ type, classname, value }) => {
  return (
    <button type={type} className={classname}>
      {value}
    </button>
  );
};

export default Button;
