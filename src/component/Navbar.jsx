// Navbar.js

import React from "react";
import "./Navbar.css";

const Navbar = ({ setActivePage, activePage }) => {
  return (
    <div className="navbar">
      <div
        className={`navbar-item ${activePage === "home" ? "active" : ""}`}
        onClick={() => setActivePage("home")}
      >
        Home
      </div>
      <div
        className={`navbar-item ${activePage === "million" ? "active" : ""}`}
        onClick={() => setActivePage("million")}
      >
        What 1 Million Can Buy
      </div>
      {/* Adicione mais itens conforme necessário */}
    </div>
  );
};

export default Navbar;
