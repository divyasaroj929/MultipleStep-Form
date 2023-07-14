import React from "react";
import FormWapper from "./Formwapper/FormWapper";

const AccountInfo = ({ Email, password, updateFiled }) => {
  return (
    <>
      <FormWapper title="Account Info">
        <input
          placeholder="Email"
          type="text"
          autoFocus
          required
          min={1}
          value={Email}
          onChange={(e) => updateFiled({ Email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          required
          min={1}
          value={password}
          onChange={(e) => updateFiled({ password: e.target.value })}
        />
      </FormWapper>
    </>
  );
};

export default AccountInfo;
