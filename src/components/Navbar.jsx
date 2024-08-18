import React, { useState } from "react";
import "./Navbar.css";
import light from "../assets/light-mode.png";
import dark from "../assets/dark-mode.png";
const Navbar = () => {
  const [mode, setMode] = useState(false);
  return (
    <div className="navbar-container">
      <nav>
        <h1>Where in the world?</h1>
        <div className="mode">
          {!mode ? (
            <img src={light} alt="mode" />
          ) : (
            <img src={dark} alt="mode" />
          )}

          <h3 onClick={() => setMode(!mode)}>
            {mode ? "Dark Mode" : "Light Mode"}
          </h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
