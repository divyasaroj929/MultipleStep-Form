import React from "react";
import FormWapper from "./Formwapper/FormWapper";

const AccountInfo = ({
  Email,
  Password,
  updateFiled,
  errmail,
  errorpassword,
}) => {
  return (
    <>
      <FormWapper title="Account Info">
        <input
          placeholder="Email"
          type="text"
          autoFocus
          required
          // min={1}
          value={Email}
          onChange={(e) => updateFiled({ Email: e.target.value })}
        />
        {errmail ? (
          <span
            // id="warning-1"
            style={{
              fontSize: "10px",
              color: "red",
            }}
          >
            Enter your valid email
          </span>
        ) : (
          ""
        )}

        <input
          placeholder="Password"
          type="password"
          required
          // min={1}
          value={Password}
          onChange={(e) => updateFiled({ Password: e.target.value })}
        />
        {errorpassword ? (
          <span
            id="warning-1"
            style={{
              fontSize: "10px",
              color: "red",
            }}
          >
            password must be 8 digit
          </span>
        ) : (
          ""
        )}
      </FormWapper>
    </>
  );
};

export default AccountInfo;
