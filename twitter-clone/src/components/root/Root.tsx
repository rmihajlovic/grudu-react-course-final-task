import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import TweetForm from "../tweet-form/TweetForm";
import Tweet from "../tweet/Tweet";

import styles from "./Root.module.css";
import FormSignUp from "../form-sign-up/FormSignUp";

function App() {
  return (
    <div className={styles.site}>
      <Header />
      <main className={styles.main}>
        <TweetForm />
        <Tweet
          name="Peter Griffin"
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis eos, aperiam natus similique dicta cupiditate, ab dolore delectus sit distinctio! Minima, esse asperiores ipsa illum voluptatum aut culpa consectetur?"
        />
        <FormSignUp />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
