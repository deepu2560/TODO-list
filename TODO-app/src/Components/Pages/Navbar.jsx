import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "../Styles/navbar.css";

import { logOutLoading, logOutSuccess } from "../Redux/authRedux/atuhAction";
import axios from "axios";

export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { token } = useSelector((state) => state.auth);
  const [username, setusername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function finduserName() {
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
          setusername(() => token.name);
        }
      });
  }

  useEffect(() => {
    finduserName();
  }, []);

  function handlelogOut() {
    dispatch(logOutLoading());
    setTimeout(() => {
      dispatch(logOutSuccess());
      console.log("==> loged out");
      removeCookie("user", { path: "/" });
      console.clear();
      navigate("/");
    }, 2000);
  }

  return (
    <div id="navbar-main">
      <h2 data-text="ToDo..." id="navbar-hadding">
        ToDo...
      </h2>
      <button id="navbar-profile">Hey! {username}</button>
      <button id="navbar-log-out" onClick={() => handlelogOut()}>
        LOG OUT
      </button>
    </div>
  );
};
