import React from "react";
import styles from "./Modal.module.scss";

//card

const Modal = ({ showModal }) => {
  function handleModalClick(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the article
  }

  return (
    <article className={styles.backdrop} onClick={showModal}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h2 className={styles.modal__header}>Welcome</h2>
        <form className={styles.modal__form}>
          <label className={styles.modal__subheader}>Email</label>
          <input
            className={styles.modal__input}
            type="email"
            placeholder="Email"
          ></input>

          <label className={styles.modal__subheader}>Password</label>
          <input
            className={styles.modal__input}
            type="password"
            placeholder="Secret Password "
          ></input>
        </form>
      </div>
    </article>
  );
};

export default Modal;
