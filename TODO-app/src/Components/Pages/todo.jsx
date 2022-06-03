import React from "react";
import "../Styles/todo.css";

export const Todomain = () => {
  return (
    <div>
      <h1>TODO list</h1>
      <div id="input-search-main">
        <input type="text" id="input-search" />
        <button id="button-search">ADD TODO</button>
      </div>
      <div id="todo-main-div">
        <div>
          <h5>Pending</h5>
          <div className="list-main-div"></div>
        </div>
        <div>
          <h5>Doing</h5>
          <div className="list-main-div"></div>
        </div>
        <div>
          <h5>Done</h5>
          <div className="list-main-div"></div>
        </div>
      </div>
    </div>
  );
};
