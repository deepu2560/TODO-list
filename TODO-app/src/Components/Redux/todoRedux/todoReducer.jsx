import { TODO_LOADING, TODO_FAILURE, TODO_SUCCESS } from "./todoActions";

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
        ...state,
        isLoading: false,
        isFailure: true,
      };
    case TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailure: false,
      };
    default:
      return state;
  }
};
