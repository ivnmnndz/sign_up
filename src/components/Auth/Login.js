import React from "react";
import styles from "../Modal/Modal.module.scss";
import Modal from "../Modal/Modal";

const Login = () => {
  return (
    <Modal>
      <h2 className={styles.modal__header}>Welcome Back</h2>
      <form className={styles.modal__form}>
        <label className={styles.modal__subheader}>Email</label>
        <input
          className={styles.modal__input}
          type="email"
          placeholder="Email"
        />
        <label className={styles.modal__subheader}>Password</label>
        <input
          className={styles.modal__input}
          type="password"
          placeholder="Password"
        ></input>
      </form>
    </Modal>
  );
};

export default Login;
