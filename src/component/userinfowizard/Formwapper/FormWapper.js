import React from "react";
import "./formwapper.css";

const FormWapper = ({ title, children }) => {
  return (
    <>
      <h5>{title}</h5>
      <div className="input-children">{children}</div>
    </>
  );
};

export default FormWapper;
