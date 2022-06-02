import React from "react";
import "../Styles/todo.css";

export const Todomain = () => {
  return (
    <div>
      <h1>TODO list</h1>
      <div>
        <input type="text" />
        <button>ADD TODO</button>
      </div>
      <div id="todo-main-div">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
