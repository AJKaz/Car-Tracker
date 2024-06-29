import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`no-select ${props.className || ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export { Button };
