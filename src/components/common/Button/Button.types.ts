// Interfaces
interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void | void;
  size?: "small" | "medium";
  className?: string;
}

// Exports
export type { IButtonProps };
