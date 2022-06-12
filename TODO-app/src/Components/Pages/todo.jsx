import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

import "../Styles/todo.css";
import { Navbar } from "./Navbar";
import {
  todoLoading,
  todoFailure,
  todoSuccess,
} from "../Redux/todoRedux/todoActions";

export const Todomain = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [pendingData, setpendingData] = useState([]);
  const [doingData, setdoingData] = useState([]);
  const [doneData, setdoneData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = cookies.user;
  if (!user) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    dispatch(todoLoading());
    setTimeout(() => {
      userfetch();
    }, 2000);
  }, []);

  function userfetch() {
    let user = cookies.user;
    if (!user) {
      navigate("/auth");
    }

    axios
      .get("https://deepu2560-todo-app.herokuapp.com/auth/user", {
        headers: {
          authorization: user,
        },
      })
      .then((res) => {
        let { error, token } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          pendingfetch(token._id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function pendingfetch(key) {
    let userid = key;

    axios
      .get(`https://deepu2560-todo-app.herokuapp.com/todo/pending/${userid}`, {
        headers: {
          authorization: user,
        },
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          setpendingData(() => event);
          doingfetch(userid);
        }
      });
  }

  function doingfetch(key) {
    let userid = key;

    axios
      .get(`https://deepu2560-todo-app.herokuapp.com/todo/doing/${userid}`, {
        headers: {
          authorization: user,
        },
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          setdoingData(() => event);
          donefetch(userid);
        }
      });
  }

  function donefetch(key) {
    let userid = key;

    axios
      .get(`https://deepu2560-todo-app.herokuapp.com/todo/done/${userid}`, {
        headers: {
          authorization: user,
        },
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          setdoneData(() => event);
        }
      });
  }

  function pendingToDoing(id) {
    let user = cookies.user;
    if (!user) {
      navigate("/auth");
    }

    axios
      .put(`https://deepu2560-todo-app.herokuapp.com/todo/${id}`, {
        headers: {
          authorization: user,
        },
        body: JSON.stringify({
          progress: "doing",
        }),
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          dispatch(todoSuccess());
        }
      })
      .catch((err) => {
        dispatch(todoFailure());
        userfetch();
      });
  }

  function doingToDone(id) {
    let user = cookies.user;
    if (!user) {
      navigate("/auth");
    }

    axios
      .put(`https://deepu2560-todo-app.herokuapp.com/todo/${id}`, {
        headers: {
          authorization: user,
        },
        body: JSON.stringify({
          progress: "done",
        }),
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          dispatch(todoSuccess());
          userfetch();
        }
      })
      .catch((err) => {
        dispatch(todoFailure());
      });
  }

  function eventDelete(id) {
    let user = cookies.user;
    if (!user) {
      navigate("/auth");
    }

    axios
      .delete(`https://deepu2560-todo-app.herokuapp.com/todo/${id}`, {
        headers: {
          authorization: user,
        },
      })
      .then((res) => {
        let { error, event } = res.data;

        if (error) {
          dispatch(todoFailure());
        } else {
          dispatch(todoSuccess());
        }
      })
      .catch((err) => {
        dispatch(todoFailure());
      });
  }

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
          <div className="list-main-div">
            {pendingData.map((elem) => (
              <div key={elem._id} className="event-display-main-div">
                <p>{elem.event}</p>
                <button onClick={() => pendingToDoing(elem._id)}>
                  <OutdoorGrillIcon></OutdoorGrillIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5>Doing</h5>
          <div className="list-main-div">
            {doingData.map((elem) => (
              <div key={elem._id} className="event-display-main-div">
                <p>{elem.event}</p>
                <button onClick={() => doingToDone(elem._id)}>
                  <DoneIcon></DoneIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5>Done</h5>
          <div className="list-main-div">
            {doneData.map((elem) => (
              <div key={elem._id} className="event-display-main-div">
                <p>{elem.event}</p>
                <button onClick={() => eventDelete(elem._id)}>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
