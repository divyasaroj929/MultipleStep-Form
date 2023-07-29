import React, { useState } from "react";
import "./popupwizard.css";

import Header from "../Header/Header";

import useMultiStepForm from "../../hooks/useMultiStepForm";

import AccountInfo from "../userinfowizard/AccountInfo";
import AdderssInfo from "../userinfowizard/AddressInfo";
import ContectInfo from "../userinfowizard/ContectInfo";
import UserInfo from "../userinfowizard/UserInfo";
import Button from "../ButtonComponent/Button";

const initial_Data = {
  FirstName: "",
  LastName: "",
  Age: "",
  Street: "",
  City: "",
  Pincode: "",
  Email: "",
  Password: "",
  Aadhar: "",
};

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
  console.log(value, "setervalue");
  // value={firstname:"divya"}
  const validate = (key, value) => {
    console.log(key, value);
    switch (key) {
      case "FirstName":
        if (value.length < 3 || value === "") {
          setErrorName(true);
        } else setErrorName(false);
        break;
      case "LastName":
        if (value.length < 3 || value === "") {
          setErrorLastName(true);
        } else setErrorLastName(false);
        break;
      // case "Age":
      //   if (!value.length > 0) setErrorLastName(true);
      //   break;

      case "Email":
        if (!value.match(emilregex)) {
          setErremail(true);
        } else setErremail(false);
        break;

      case "Password":
        if (value.length < 8 || value === "") {
          setErrorpassword(true);
        } else setErrorpassword(false);
        break;
        
      case "Aadhar":
        if (!value.match(adharregex)) {
          setErrAadhar(true);
        } else setErrAadhar(false);
        break;

      default:
        break;
    }
  };
  const updateFiled = (updatevalue) => {
    // updatevalue={firstname:"divya"}
    console.log(updatevalue);
    validate(updatevalue);

    const keylist = Object.keys(updatevalue);
    console.log({ keylist });

    const key = keylist[0];
    console.log(key);

    const valuelist = Object.values(updatevalue);
    console.log(valuelist);

    const objvalue = valuelist[0];
    console.log(value);

    validate(key, objvalue);
    setValue({ ...value, ...updatevalue });
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
