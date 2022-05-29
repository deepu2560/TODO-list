import React, { useState } from "react";
import "../Styles/loginSignup.css";

export const LoginSignup = () => {
  const [login, setlogin] = useState(true);

  console.log(login);

  return (
    <div id="login-signup-component">
      <div id="login-signup-main">
        <div id="login-signup-heading">
          <p onClick={() => setlogin(true)}>Sign In</p>
          <p onClick={() => setlogin(false)}>Sign Up</p>
        </div>
        {login === true ? (
          <div id="login-main"> Login</div>
        ) : (
          <div id="signup-main"> signup</div>
        )}
      </div>
    </div>
  );
};
