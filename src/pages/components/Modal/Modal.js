import React from "react";
import styles from "./Modal.module.scss";

//card
const Modal = () => {
  return (
    <article>
      <div className={styles.modal}>
        <h2 className={styles.modal__header}>Welcome</h2>
        <form className={styles.modal__form}>

          <label className={styles.modal__subheader}>Email</label>
          <input className={styles.modal__input} type="email" placeholder="Email"></input>
          
          <label className={styles.modal__subheader}>Password</label>
          <input className={styles.modal__input} type="password" placeholder="Secret Password "></input>
        </form>
      </div>
    </article>
  );
};

export default Modal;
