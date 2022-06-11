import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { logInSuccess } from "./Components/Redux/authRedux/atuhAction";
import "./App.css";
import { Allroutes } from "./Components/router";

function App() {
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
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
