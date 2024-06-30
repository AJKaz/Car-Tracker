interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

interface CarData {
  name: string;
  year: string;
  color: string;
  licensePlate: string;
  expirationDate: Date;
}

interface InputProps {
  label?: string;
  type: "text" | "number" | "date";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxWidth?: string;
  maxLength?: number;
}

export { type CarData, type ButtonProps, type InputProps };
