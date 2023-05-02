import React, { useState } from "react";

const Navbar = ({ setSignInType, showModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = (type) => {
    setModalIsOpen(!modalIsOpen);
    setSignInType(type);
  };

const Navbar = () => {
  
  return (
    <nav style={{ backgroundColor: "lightBlue" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div>Logo</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => showModal("login")}>Login</button>
          <button onClick={() => showModal("register")}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
