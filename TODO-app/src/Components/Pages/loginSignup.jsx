import React, { useState } from "react";

export const LoginSignup = () => {
  const [login, setlogin] = useState(true);

  return (
    <div id="login-signup-component">
      <div id="login-signup-main">
        <div id="login-signup-heading">
          <p
            style={{ borderTopLeftRadius: "10px" }}
            onClick={() => setlogin(true)}
          >
            Sign In
          </p>
          <p
            style={{ borderTopRightRadius: "10px" }}
            onClick={() => setlogin(false)}
          >
            Sign Up
          </p>
        </div>
        {login === true ? (
          <div id="login-main">
            <h1>SIGN IN HERE</h1>
            <form style={{ marginBottom: "5px" }}>
              <label className="signin-label">USERNAME</label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="ENTER USERNAME HERE..."
                className="signin-input"
              />
              <br />

              <label className="signin-label">PASSWORD</label>
              <br />
              <input
                type="password"
                name="username"
                placeholder="ENTER PASSWORD HERE..."
                className="signin-input"
              />
            </form>
            <br />
            <div id="remember-main-div">
              <input type="checkbox" />
              <p>REMEMBER ME</p>
            </div>
            <br />
            <button id="signin-button">SIGN IN</button>
          </div>
        ) : (
          <div id="signup-main">
            <h1>SIGN UP HERE</h1>
            <form style={{ marginBottom: "5px" }}>
              <label className="signin-label">USERNAME</label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="ENTER USERNAME HERE..."
                className="signin-input"
              />
              <br />
              <label className="signin-label">FULL NAME</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="ENTER NAME HERE..."
                className="signin-input"
              />
              <br />
              <label className="signin-label">EMAIL ID</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="ENTER EMAIL HERE..."
                className="signin-input"
              />
              <br />
              <label className="signin-label">MOBILE</label>
              <br />
              <input
                type="text"
                name="mobile"
                placeholder="ENTER MOBILE HERE..."
                className="signin-input"
              />
              <br />
              <label className="signin-label">PASSWORD</label>
              <br />
              <input
                type="password"
                name="username"
                placeholder="ENTER PASSWORD HERE..."
                className="signin-input"
              />
            </form>
            <br />
            <button id="signin-button">SIGN UP</button>
          </div>
        )}
      </div>
    </div>
  );
};
