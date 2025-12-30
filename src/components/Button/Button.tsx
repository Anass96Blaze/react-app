import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success";
  onClickButton: () => void;
}
const Button = ({ children, color = "primary", onClickButton }: Props) => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles[`btn-${color}`]].join(" ")}
        onClick={onClickButton}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
