import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ setModalIsOpen, children }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <article className={styles.backdrop} onClick={closeModal}>
      <div onClick={handleModalClick} className={styles.modal}>
        {children}
      </div>
    </article>
  );
};

export default Modal;
