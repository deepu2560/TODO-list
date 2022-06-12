import React, { useEffect } from "react";
import "../Styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <div id="home-todo-content-main-div">
          <div id="home-todo-content-div">
            <h1>TODO APP</h1>
            On todo app you will see 3 parts
            <br />
            <p>
              <strong>Navbar | Input box | 3 boxes for events</strong>
              <br />
              <br />
              <strong>
                3 boxes for events are main diplay boxes as following :-
              </strong>
              <br />
              <strong>Pending</strong> - In this box you will see all events
              which you are pending and you have to start working on.
              <br />
              <strong>Doing</strong> - In this box you will see all those events
              which you are doing now and are in progresss.
              <br />
              <strong>Done</strong> - In this box you will see all those events
              which you have done and ready to delete.
            </p>
          </div>
          <div id="home-todo-content-images-div">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/todo-bbd4a.appspot.com/o/pending.png?alt=media&token=54ec3827-b83b-433a-b6d4-97b7d029b8e1"
              alt="pending"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/todo-bbd4a.appspot.com/o/doing.png?alt=media&token=5a8ee7a1-4b7f-4862-a075-a5761724f4fc"
              alt="doing"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/todo-bbd4a.appspot.com/o/done.png?alt=media&token=f34ec6ef-defe-465c-b359-875e01e0f66c"
              alt="done"
            />
          </div>
        </div>
      </div>
      <div id="home-footer-div">
        <div>
          <h1>Project made by :- Deepanshu Gulia</h1>
        </div>
        <hr />
        <div>
          <h4>
            Tech stack :- HTML | CSS | Javascript | React | Redux | Node.js |
            Mongodb | Express | Heroku | Vercel
          </h4>
        </div>
        <hr />
        <div>
          <h1>For contact details</h1>
          <div id="home-footer-icons">
            <GitHubIcon
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick={() => {
                window.open("https://github.com/Deepu2560", "_blank");
              }}
            ></GitHubIcon>
            <LinkedInIcon
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/deepanshu-gulia/",
                  "_blank",
                );
              }}
            ></LinkedInIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
