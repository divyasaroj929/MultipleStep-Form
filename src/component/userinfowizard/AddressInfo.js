import React from "react";
import FormWapper from "./Formwapper/FormWapper";

const AdderssInfo = ({
  houseNo,
  streetNo,
  city,
  pinCode,
  state,
  updateFiled,
}) => {
  return (
    <>
      <FormWapper title="Adderss info">
        {/* <label>House no</label> */}
        <input
          placeholder="House no"
          type="text"
          autoFocus
          required
          min={1}
          value={houseNo}
          onChange={(e) => updateFiled({ houseNo: e.target.value })}
        />
        {/* <label>street no</label> */}
        <input
          placeholder="street no"
          type="text"
          required
          min={1}
          value={streetNo}
          onChange={(e) => updateFiled({ streetNo: e.target.value })}
        />
        {/* <label>city</label> */}
        <input
          placeholder="City"
          type="text"
          required
          min={1}
          value={city}
          onChange={(e) => updateFiled({ city: e.target.value })}
        />
        {/* <label>pin code</label> */}
        <input
          placeholder="Pin code"
          type="number"
          required
          min={1}
          value={pinCode}
          onChange={(e) => updateFiled({ pinCode: e.target.value })}
        />
        {/* <label>state</label> */}
        <input
          placeholder="State"
          type="text"
          required
          min={1}
          value={state}
          onChange={(e) => updateFiled({ state: e.target.value })}
        />
      </FormWapper>
    </>
  );
};

export default AdderssInfo;
