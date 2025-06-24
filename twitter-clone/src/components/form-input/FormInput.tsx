import { useState } from "react";

import styles from "./FormInput.module.css";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  validate: (value: string) => string | null;
  onFieldStateChange: (name: string, valid: boolean) => void;
}

export default function FormInput({
  name,
  label,
  type,
  validate,
  onFieldStateChange,
}: InputProps) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    if (!touched) {
      setTouched(true);
      const validationError = validate(e.target.value);
      setError(validationError);
      onFieldStateChange(name, !validationError);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    const validationError = validate(e.target.value);
    setError(validationError);
    if (touched) {
      onFieldStateChange(name, !validationError);
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <span className={`${styles.error} ${!touched ? styles.hide : ""}`}>
        {error}
      </span>
    </div>
  );
}
