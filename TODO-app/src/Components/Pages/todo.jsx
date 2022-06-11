import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import "../Styles/todo.css";
import { Navbar } from "./Navbar";
import {
  todoLoading,
  todoFailure,
  todoSuccess,
} from "../Redux/todoRedux/todoActions";

export const Todomain = () => {
  const { isAuth, token } = useSelector((state) => state.auth);

  const [userid, setuserid] = useState("");
  const [pendingData, setpendingData] = useState([]);
  const [doingData, setdoingData] = useState([]);
  const [doneData, setdoneData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoLoading());
    setTimeout(() => {
      userfetch();
    }, 2000);
  }, []);

  function userfetch() {
    axios
      .get("https://deepu2560-todo-app.herokuapp.com/auth/user", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let { error, token } = res.data;

        if (error) {
          alert("something went wrong try again");
          navigate("/auth");
        } else {
          setuserid(() => token._id);
          pendingfetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function pendingfetch() {
    console.log(userid);
  }

  function doingfetch() {}

  function donefetch() {}

  if (isAuth == false) {
    return <Navigate to="/" />;
  }

  return (
    <div id="container">
      <Navbar />
      <h1>TODO list</h1>
      <div id="input-search-main">
        <input type="text" id="input-search" />
        <button id="button-search">ADD EVENT</button>
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
