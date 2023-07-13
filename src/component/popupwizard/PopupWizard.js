import React, { useState } from "react";
import "./popupwizard.css";

import Header from "../Header/Header";
import useMultiStepForm from "../../hook/useMultipleStepForm";

import AccountInfo from "../userInfoWizard/AccountInfo";
import AdderssInfo from "../userInfoWizard/AdderssInfo";
import ContectInfo from "../userInfoWizard/ContectInfo";
import UserInfo from "../userInfoWizard/UserInfo";

import Button from "../ButtonComponent/Button";

const initial_Data = [
  {
    FirstName: "",
    lastName: "",
    Age: "",
    Street: "",
    city: "",
    pincode: "",
    Email: "",
    password: "",
    aadhar: "",
  },
];

const emilregex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const adharregex =
  /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;

const PopupWizard = ({ closeForm }) => {
  const [value, setValue] = useState(initial_Data);
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [erremail, setErremail] = useState(false);
  const [erraadhar, setErrAadhar] = useState(false);
  const [errorpassword, setErrorpassword] = useState(false);

  const validate = (key, value) => {
    console.log(key, value);
    switch (key) {
      case "FirstName":
        if (!value.lenhgt < 3) alert("too short");
        // setErrorName(true);
        break;
      case "lastName":
        if (!value.lenght < 3) setErrorLastName(true);
        break;
      case "Age":
        if (!value.lenght > 0) setErrorLastName(true);
        break;
      default:
        break;
    }
  };
  const updateFiled = (updatevalue) => {
    // console.log(updatevalue);
    for (let key = updatevalue; key <= initial_Data.length; key++) {
      console.log(key);
      console.log(key >= initial_Data.length);
      if (key >= 0) {
        validate(initial_Data);
        console.log("hiii");
      } else {
        alert("no");
      }

      // if (key >= 0) {
      //   console.log(2);
      //   validate(key, updateFiled);
      // } else {
      //   alert("null");
      // }
    }
    return setValue(updatevalue);
  };

  const {
    totalPage,
    currentStepIndex,
    step,
    isFirstStep,
    back,
    next,
    isLastStep,
    activePage,
  } = useMultiStepForm([
    <UserInfo
      {...value}
      updateFiled={updateFiled}
      errorName={errorName}
      errorlastName={errorLastName}
    />,
    <AdderssInfo {...value} updateFiled={updateFiled} />,
    <AccountInfo
      {...value}
      updateFiled={updateFiled}
      erremail={erremail}
      errorpassword={errorpassword}
    />,
    <ContectInfo {...value} updateFiled={updateFiled} erraadhar={erraadhar} />,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("successful account create");
    closeForm();
  };

  return (
    <>
      <div className="parent-position-popup" onClick={closeForm}></div>
      <div className="popupWiard-parent-container">
        <form onSubmit={onSubmit} className="popupWiard-form">
          <Header
            currentStepIndex={currentStepIndex}
            closeForm={closeForm}
            isFirstStep={isFirstStep}
            totalPage={totalPage}
            activePage={currentStepIndex}
            back={back}
          />
          <div className="wizard-body-container">{step}</div>
          <div className="Footer-wizard-container">
            <div>{initial_Data ? "" : "try some time"}</div>
            <div className="button-container">
              {!isFirstStep && (
                <Button
                  type="button"
                  onClick={closeForm}
                  variant="ghost"
                  name="Cancel"
                ></Button>
              )}

              <Button
                type="submit"
                name={isLastStep ? "Finish" : "Next"}
              ></Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PopupWizard;
