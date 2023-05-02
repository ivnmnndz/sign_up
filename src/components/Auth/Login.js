import React, { useState } from "react";
import styles from "../Modal/Modal.module.scss";

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //need some error handling
    if (Object.keys(formData).length === 0) {
      console.log("no values");
    }
    console.log(formData);
  };

  return (
    <>
      <h2 className={styles.modal__header}>Welcome Back</h2>
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
          name="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
