import React, { useState } from "react";
import styles from "../Modal/Modal.module.scss";

const Register = () => {
  const [formData, setFormData] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h2 className={styles.modal__header}>First Timer</h2>
      <form className={styles.modal__form} onSubmit={handleSubmit}>
        <label className={styles.modal__subheader}>Email</label>
        <input
          onChange={handleInputChange}
          className={styles.modal__input}
          type="email"
          name="email"
          placeholder="Email"
        />
        <label className={styles.modal__subheader}>Password</label>
        <input
          onChange={handleInputChange}
          className={styles.modal__input}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
