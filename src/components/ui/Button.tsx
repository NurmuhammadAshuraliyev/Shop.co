import type { HTMLAttributes } from "react";
import "../../assets/styles/button.css";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ children, className, variant }) => {
  return <button className={`btn ${variant} ${className}`}>{children}</button>;
};

export default Button;
