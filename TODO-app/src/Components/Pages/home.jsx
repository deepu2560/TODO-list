import React from "react";
import "../Styles/home.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Home = () => {
  document.body.style.backgroundColor = "black";

  const navigate = useNavigate();
  function logIn() {
    return <Navigate to="/auth" />;
  }
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
          <img src="" alt="" />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div className="home-content-div">
          <img src="" alt="" />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div id="home-todo-content-div">
          <img src="" alt="" />
          <div>
            <h2></h2>
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
