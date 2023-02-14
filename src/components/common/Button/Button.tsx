// Imports
import { IButtonProps } from "./Button.types";

// Functions
const Button = ({
  children,
  onClick,
  size = "medium",
  className,
}: IButtonProps) => {
  return (
    <button
      className={`${size === "small" ? "btn-small" : ""} ${"btn"} ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Exports
export default Button;
