import React from "react";

const LabeldInput = ({
  type,
  label,
  state,
  setState,
}: {
  type: string;
  label: string;
  state: any;
  setState: any;
}) => {
  return (
    <div className="w-full flex flex-col justify-between">
      <label htmlFor={`${label}-input`}>{label}</label>
      <input
        type={type}
        id={`${label}-input`}
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
      />
    </div>
  );
};

export default LabeldInput;
