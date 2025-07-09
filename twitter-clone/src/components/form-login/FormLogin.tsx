import { useState } from "react";
import * as EmailValidator from "email-validator";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import styles from "./FormLogin.module.css";

const fieldsConfig = [
  {
    name: "email",
    label: "email",
    type: "email",
    validate: (value: string) =>
      EmailValidator.validate(value) ? null : "Please enter a valid email",
  },
  {
    name: "password",
    label: "password",
    type: "password",
    validate: (value: string) =>
      value.length >= 8 && value.length <= 256
        ? null
        : "Password must be longer than 8 and shorter then 256 characters",
  },
];

export default function FormLogin() {
  const [fieldValidations, setFieldValidations] = useState<
    Record<string, boolean>
  >({});

  function handleStateChange(name: string, valid: boolean) {
    setFieldValidations((prev) => {
      return { ...prev, [name]: valid };
    });
  }

  const isFormValid =
    fieldsConfig.length > 0 &&
    fieldsConfig.every((field) => fieldValidations[field.name]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid) {
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fieldsConfig.map((field) => (
        <FormInput
          key={field.label}
          name={field.name}
          label={field.label}
          type={field.type}
          validate={field.validate}
          onFieldStateChange={handleStateChange}
        />
      ))}
      <Button classNames={styles.submitButton}>Login</Button>
    </form>
  );
}
