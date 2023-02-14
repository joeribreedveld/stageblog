// Imports
import { IButtonProps } from "./Button.types";

// Functions
const Button = ({ children, onClick, size, className }: IButtonProps) => {
  return (
    <button
      className={`${size === "small" ? "btn-small" : ""} btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Exports
export default Button;
