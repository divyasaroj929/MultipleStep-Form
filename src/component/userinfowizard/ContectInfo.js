import React from "react";
import FormWapper from "./Formwapper/FormWapper";

const ContectInfo = ({ aadhar, updateFiled, erraadhar }) => {
  return (
    <>
      <FormWapper>
        {/* <label>phone no</label> */}
        <input
          placeholder="Aadhar No"
          type="text"
          required
          min={12}
          value={aadhar}
          onChange={(e) => updateFiled({ aadhar: e.target.value })}
        />
        {erraadhar ? (
          <span
            id="warning-1"
            style={{
              fontSize: "10px",
              color: "red",
            }}
          >
            The aadhaar number must be 12 digit
          </span>
        ) : (
          ""
        )}
      </FormWapper>
    </>
  );
};

export default ContectInfo;
