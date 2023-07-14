import React, { useEffect } from "react";
import FormWapper from "./Formwapper/FormWapper";
const UserInfo = ({ FirstName, lastName, Age, updateFiled }) => {
  console.log(FirstName, lastName, Age);
  return (
    <>
      <FormWapper title="User Infomation">
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
        {/* <label>last Name</label> */}

        <input
          type="text"
          placeholder="last name"
          required
          min={1}
          value={lastName}
          onChange={(e) => updateFiled({ lastName: e.target.value })}
        />
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
