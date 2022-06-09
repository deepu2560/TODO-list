import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { AuthReducer } from "./authRedux/authReducer";
import { TodoReducer } from "./todoRedux/todoReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
