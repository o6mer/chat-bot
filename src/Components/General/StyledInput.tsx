import React from "react";

const StyledInput = ({
  onChange,
  value,
  placeholder,
  type,
  id,
  styles,
}: {
  onChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.Dispatch<React.SetStateAction<any>>
    | undefined;
  value: string | number | readonly string[] | undefined;
  placeholder: string | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  id?: string;
  styles?: string;
}) => {
  return (
    <input
      id={id}
      onChange={onChange}
      value={value}
      type={type}
      className={`min-w-0 p-1 border-secondary border border-solid rounded-lg ${styles}`}
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
