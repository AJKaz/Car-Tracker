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

export {type CarData, type ButtonProps}