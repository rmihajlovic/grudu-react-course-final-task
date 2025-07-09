import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  classNames?: string;
}

export default function Button({ children, classNames }: ButtonProps) {
  return (
    <button className={`${styles.button} ${classNames}`}>{children}</button>
  );
}
