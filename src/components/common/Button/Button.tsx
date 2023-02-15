// Imports
import { IButtonProps } from "./Button.types";
import { motion } from "framer-motion";

// Framer
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
  initial: {
    scale: 1,
  },
};

// Functions
const Button = ({
  children,
  onClick,
  size = "medium",
  className,
}: IButtonProps) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={`${size === "small" ? "btn-small" : ""} ${"btn"} ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// Exports
export default Button;
