import React from "react";

const Button = ({ text, type, StyleClass, onClickHandler, IsIcon, icon }) => {
  return IsIcon ? (
    <button type={type || "button"} className={StyleClass} onClick={onClickHandler}>
      {icon}
      {text}
    </button>
  ) : (
    <button type={type || "button"} className={StyleClass} onClick={onClickHandler}>{text}</button>
  );
};

export default Button;
