import { TODO_LOADING, TODO_FAILURE } from "./todoActions";

const initialStore = {
  isLoading: false,
  isFailure: false,
};

export const TodoReducer = (state = initialStore, type, payload) => {
  switch (type) {
    case TODO_LOADING:
      return {
        ...state,
        isLoading: true,
        isFailure: false,
      };
    case TODO_FAILURE:
      return {
        isLoading: false,
        isFailure: true,
      };
    default:
      return state;
  }
};
