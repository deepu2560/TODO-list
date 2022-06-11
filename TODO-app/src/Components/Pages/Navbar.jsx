import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "../Styles/navbar.css";

import { logOutLoading, logOutSuccess } from "../Redux/authRedux/atuhAction";
import axios from "axios";

export const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function finduserName() {}

  useEffect(() => {}, []);

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
      <div id="navbar-buttons-profile-main">
        <button id="navbar-profile">Hey! Deepanshu</button>
        <button id="navbar-log-out" onClick={() => handlelogOut()}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};
