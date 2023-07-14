import React from "react";
import "./progressbar.css";

const ProgressBar = (props) => {
  return (
    <>
      <div className="progress-bar-container">
        <div className={props.progressbar} style={props.style}></div>
      </div>
    </>
  );
};

export default ProgressBar;
