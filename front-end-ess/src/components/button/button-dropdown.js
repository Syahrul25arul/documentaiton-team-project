import React from "react";

function Select({ handleDropDown }) {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => handleDropDown(e.target.value)}
    >
      {/* <option>{children}</option> */}
      <option value={1}>D3</option>
      <option value={2}>D4/S1</option>
      <option value={3}>S2</option>
      <option value={4}>S3</option>
    </select>
  );
}

export default Select;
