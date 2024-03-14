import React, { useState } from "react";

const UserInput = ({ inputValue, onChangeValue }) => {
  return (
    <section id="input-section">
      <div id="input-div">
        <label>Inital Investment</label>
        <input
          value={inputValue?.initialInvestment}
          type="number"
          onChange={(e) => onChangeValue("initialInvestment", e.target.value)}
        />
      </div>
      <div id="input-div">
        <label>Annual Investment</label>
        <input
          value={inputValue?.annualAmount}
          type="number"
          onChange={(e) => onChangeValue("annualAmount", e.target.value)}
        />
      </div>
      <div id="input-div">
        <label>Expected Return</label>
        <input
          value={inputValue?.expectedReturn}
          type="number"
          onChange={(e) => onChangeValue("expectedReturn", e.target.value)}
        />
      </div>
      <div id="input-div">
        <label>Duration</label>
        <input
          value={inputValue?.duration}
          type="number"
          onChange={(e) => onChangeValue("duration", e.target.value)}
        />
      </div>
    </section>
  );
};

export default UserInput;
