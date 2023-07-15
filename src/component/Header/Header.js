import React from "react";
import "./header.css";
import { BiX } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import ProgressBar from "../popupwizard/progressbar/ProgressBar";
const Header = ({
  currentStepIndex,
  totalPage,
  closeForm,
  activePage,
  isFirstStep,
  back,
}) => {
  // console.log({ totalPage, activePage });

  // console.log({ width: (100 / (totalPage - 1)) * activePage });
  return (
    <>
      <div className="header-section">
        <div className="header-title" style={{ display: "flex" }}>
          <div className="back-icon">
            {!isFirstStep ? <BsArrowLeft onClick={back} /> : ""}
          </div>
        </div>
        <div className="page-count">
          <div className="count-page-step">
            <span>
              step
              <strong style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                {currentStepIndex + 1}
              </strong>
              out of
              <strong style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                {totalPage}
              </strong>
            </span>
          </div>
          <div className="back-icon" onClick={closeForm}>
            {<BiX />}
          </div>
        </div>
      </div>
      <ProgressBar
        style={{
          width: `${(100 / (totalPage - 1)) * activePage}%`,
        }}
      />
    </>
  );
};

export default Header;
