import { InputProps } from "../interfaces";

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div style={{ display: "flex" }}>
      {props.label ? (
        <label style={{ marginRight: 10 }}>{props.label}</label>
      ) : (
        ""
      )}
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        style={{ width: props.maxWidth }}
        maxLength={props.maxLength}
      />
    </div>
  );
};

export default Input;
