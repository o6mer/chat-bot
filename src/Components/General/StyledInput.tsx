import React from "react";

const StyledInput = ({
  onChange,
  value,
  placeholder,
  type,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  placeholder: string | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      className="min-w-0 p-1 border-secondary border border-solid rounded-lg "
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
