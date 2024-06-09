import "../styles.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export { Button };
