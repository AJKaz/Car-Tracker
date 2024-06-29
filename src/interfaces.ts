interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

interface CarData {
  name: string;
  year: string;
  color: string;
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

interface CarProps {
  carName: string;
  color: string;
  year: string;
  licensePlate: string;
  expirationDate: Date;
}

export { type CarData, type ButtonProps, type InputProps, type CarProps };
