import Button from "../button/Button";

import styles from "./TweetForm.module.css";

export default function TweetForm() {
  return (
    <form className={styles.form}>
      <textarea
        name="tweet"
        id="tweet"
        placeholder="What's happening?"
        className={styles.tweet}
      ></textarea>
      <Button classNames={styles.submit}>Tweet</Button>
    </form>
  );
}
