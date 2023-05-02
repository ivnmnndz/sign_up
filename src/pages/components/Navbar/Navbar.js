import React from "react";

const Navbar = ({showModal}) => {
  
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
          <button onClick={showModal}>Login</button>
          <button onClick={showModal}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
