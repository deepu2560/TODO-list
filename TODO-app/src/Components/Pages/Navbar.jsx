import React from "react";
import "../Styles/navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar-main">
      <h2 data-text="ToDo..." id="navbar-hadding">
        ToDo...
      </h2>
      <div id="navbar-buttons-profile-main">
        <button id="navbar-profile">Hey! Deepanshu</button>
        <button id="navbar-log-out">LOG OUT</button>
      </div>
    </div>
  );
};
