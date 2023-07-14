import React from "react";
import FormWapper from "./Formwapper/FormWapper";

const ContectInfo = ({ phone, updateFiled }) => {
  return (
    <>
      <FormWapper>
        {/* <label>phone no</label> */}
        <input
          placeholder="Phone no"
          type="number"
          required
          min={12}
          value={phone}
          onChange={(e) => updateFiled({ phone: e.target.value })}
        />
      </FormWapper>
    </>
  );
};

export default ContectInfo;
