import React from "react";
import FormWapper from "./Formwapper/FormWapper";
const UserInfo = ({
  FirstName,
  LastName,
  Age,
  updateFiled,
  errorName,
  errorlastName,
}) => {
  console.log(FirstName, LastName, Age);
  return (
    <>
      <FormWapper title="User Information">
        {/* <label>First Name</label> */}
        <input
          type="text"
          placeholder="First name"
          autoFocus
          required
          min={1}
          value={FirstName}
          onChange={(e) => updateFiled({ FirstName: e.target.value })}
        />
        {errorName ? (
          <span
            id="warning-1"
            style={{
              fontSize: "10px",
              color: "red",
            }}
          >
            First Name length greater than 3 character
          </span>
        ) : (
          ""
        )}
        {/* <label>last Name</label> */}
        <input
          type="text"
          placeholder="last name"
          required
          min={1}
          value={LastName}
          onChange={(e) => updateFiled({ LastName: e.target.value })}
        />
        {errorlastName ? (
          <span
            id="warning-1"
            style={{
              fontSize: "10px",
              color: "red",
            }}
          >
            last name length greater than 2 character
          </span>
        ) : (
          ""
        )}
        {/* <label>Age</label> */}
        <input
          placeholder="Age"
          type="number"
          required
          min={1}
          value={Age}
          onChange={(e) => updateFiled({ Age: e.target.value })}
        />
      </FormWapper>
    </>
  );
};

export default UserInfo;
