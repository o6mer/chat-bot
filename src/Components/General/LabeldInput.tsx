const LabeldInput = ({
  type,
  label,
  state,
  setState,
}: {
  type: string;
  label: string;
  state: string;
  setState: (value: string) => void;
}) => {
  return (
    <div className="flex w-full flex-col justify-between">
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
