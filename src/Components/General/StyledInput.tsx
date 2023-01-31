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
      className={`min-w-0 rounded-lg border border-solid border-secondary p-1 ${styles}`}
      placeholder={placeholder}
    />
  );
};

export default StyledInput;
