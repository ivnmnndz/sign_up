import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ showModal }) => {
  return (
    <nav>
      <div className={styles.navbar__container}>
        <div>
          <div>Logo</div>
        </div>
        <div className={styles.navbar__button_group}>
          <button onClick={() => showModal("login")}>Login</button>
          <button onClick={() => showModal("register")}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
