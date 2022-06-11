import React, { useEffect } from "react";
import "../Styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { logInSuccess } from "../Redux/authRedux/atuhAction";

export const Home = () => {
  document.body.style.background = "none";
  document.body.style.backgroundColor = "black";

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let user = cookies.user;

    if (user) {
      dispatch(logInSuccess(user));
      navigate("/events");
    }
  }, []);

  return (
    <div>
      <div id="home-navbar-main">
        <h2 data-text="ToDo..." id="navbar-hadding">
          ToDo...
        </h2>
        <Button
          variant="outlined"
          id="home-navbar-log-in"
          onClick={() => navigate("/auth")}
        >
          LOG IN
        </Button>
      </div>
      <div id="home-quote-img-main">
        <p>
          SUCCESS <br />
          <span>IS HIDDEN IN</span> <br />
          YOUR <br />
          <span>DAILY</span> <br />
          ROUTINE
        </p>
      </div>
      <div id="home-top-content-div">
        <div id="self-dicipline">
          <h1>Self-Discipline</h1>
          <p>
            The ability to push yourself forward <br /> stay motivated
          </p>
        </div>
        <div id="focused">
          <h1>Focused</h1>
          <p>
            Once you've set a goal <br /> you can set milestones to achieve it
          </p>
        </div>
        <div id="productive">
          <h1>Productivity</h1>
          <p>
            Reserve 20% of your day for <br /> important tasks
          </p>
        </div>
      </div>
      <div id="main-container">
        <div className="home-content-div">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/todo-bbd4a.appspot.com/o/signin.png?alt=media&token=7dab0207-23ca-4ba1-94ab-ebd5fb685f6c"
            alt="SIGN-IN IMAGE"
            className="home-content-img"
            style={{ borderRadius: "10px 0 0 10px" }}
          />
          <div
            className="home-main-content"
            style={{ borderRadius: "0 10px 10px 0" }}
          >
            <h1> SIGN IN FORM</h1>
            <p>
              Clicking on log in button on navbar, you will be directed to
              authentication page.
              <br />
              On authentication page you will watch two form sign-in and
              sign-up.
              <br />
              In sign-in form you have to provide you username and password.
            </p>
          </div>
        </div>
        <div className="home-content-div">
          <div
            className="home-main-content"
            style={{ borderRadius: "10px 0 0 10px" }}
          >
            <h1> SIGN UP FORM</h1>
            <p>
              On authentication page you will see to two buttons sign-in and
              sign-up.
              <br />
              On sign-up form you have to give your information for successful
              sign-up process
              <br />
              In sign-in form you have to provide you username and password.
            </p>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/todo-bbd4a.appspot.com/o/signup.png?alt=media&token=d9cf9b27-09b2-4f03-9c30-9cfba04fc2de"
            alt="SIGN-UP IMAGE"
            className="home-content-img"
            style={{ borderRadius: "0 10px 10px 0" }}
          />
        </div>
        <div id="home-todo-content-div">
          <div>
            <h1></h1>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div id="home-footer-div"></div>
    </div>
  );
};
