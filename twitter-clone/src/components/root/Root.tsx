import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../header/Header";

import styles from "./Root.module.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("login");
    }
  }, []);

  return (
    <div className={styles.site}>
      {user && <Header />}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
