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
  document.body.style.background = "none";
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  const { isAuth, token } = useSelector((state) => state.auth);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [pendingData, setpendingData] = useState([]);
  const [doingData, setdoingData] = useState([]);
  const [doneData, setdoneData] = useState([]);
  const [inputData, setinputData] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = cookies.user;
  if (!user && !isAuth) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    dispatch(todoLoading());
    setTimeout(() => {
      userfetch();
    }, 2000);
  }, [token]);

  function userfetch() {
    let user = cookies.user;
    if (!user && !isAuth) {
      navigate("/auth");
    }

    axios
      .get("https://deepu2560-todo-app.herokuapp.com/auth/user", {
        headers: {
          authorization: token,
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
          authorization: token,
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
          authorization: token,
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
          authorization: token,
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
    if (!user && !isAuth) {
      navigate("/auth");
    }

    axios
      .put(`https://deepu2560-todo-app.herokuapp.com/todo/${id}`, {
        progress: "doing",
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
    if (!user && !isAuth) {
      navigate("/auth");
    }

    axios
      .put(`https://deepu2560-todo-app.herokuapp.com/todo/${id}`, {
        progress: "done",
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
          authorization: token,
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

  function handleEventChange(target) {
    const { value } = target;

    setinputData(() => value);
  }

  function newEvent(key) {
    axios
      .post("https://deepu2560-todo-app.herokuapp.com/todo/event", {
        user_id: key,
        event: inputData,
        progress: "pending",
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

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div id="container">
      <Navbar />
      <h1>TODO list</h1>
      <div id="input-search-main">
        <input
          type="text"
          id="input-search"
          onChange={(event) => handleEventChange(event.target)}
        />
        <button
          id="button-search"
          onClick={() => {
            dispatch(todoLoading());
            axios
              .get("https://deepu2560-todo-app.herokuapp.com/auth/user", {
                headers: {
                  authorization: token,
                },
              })
              .then((res) => {
                let { error, token } = res.data;

                if (error) {
                  dispatch(todoFailure());
                } else {
                  newEvent(token._id);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          ADD EVENT
        </button>
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
