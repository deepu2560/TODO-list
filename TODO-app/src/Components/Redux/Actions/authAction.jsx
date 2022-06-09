export const LOG_IN_LOADING = "LOG_IN_LOADING";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const logInLoading = () => ({ type: LOG_IN_LOADING });
export const logInSuccess = (payload) => ({ type: LOG_IN_SUCCESS, payload });
export const logInFailure = () => ({ type: LOG_IN_FAILURE });
export const logOut = () => ({ type: LOG_OUT });
export const signUpLoading = () => ({ type: SIGN_UP_LOADING });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpFailure = () => ({ type: SIGN_UP_FAILURE });
