export const TODO_LOADING = "TODO_LOADING";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_FAILURE = "TODO_FAILURE";

export const todoLoading = () => ({ type: TODO_LOADING });
export const todoSuccess = () => ({ type: TODO_SUCCESS });
export const todoFailure = () => ({ type: TODO_FAILURE });
