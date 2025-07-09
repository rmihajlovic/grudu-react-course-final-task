import { Link } from "react-router-dom";

import styles from "./Signup.module.css";
import FormSignup from "../components/form-sign-up/FormSignup";

export default function Signup() {
  return (
    <div className={styles.container}>
      <FormSignup />
      <p className={styles.message}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
