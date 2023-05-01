import React from "react";
import styles from "./Modal.module.scss";

//card

const Modal = ({ children }) => {
  return (
    <article>
      <div className={styles.modal}>{children}</div>
    </article>
  );
};

export default Modal;
