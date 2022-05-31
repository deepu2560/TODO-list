import React from "react";
import "../Styles/navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar-main">
      <h2 data-text="ToDo..." id="navbar-hadding">
        ToDo...
      </h2>
      <div id="navbar-buttons-profile-main">
        <button id="navbar-routine">Routine</button>
        <button id="navbar-todo-list">Todo list</button>
        <select id="navbar-dash-logOut">
          <option value="dash">Hey! Deepu</option>
          <option value="lout">Log out</option>
        </select>
      </div>
    </div>
  );
};
