import * as AuthActionTypes from '../../actions/auth/auth.actionType';

let initialState = {
  authPending: false,
  loggedIn: false,
  registerd: false,
  loginError: false,
  regError: false,
  authToken: null,
  refreshToken: null,
  tokenIsValid: null,
  peddingRefreshingToken: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_PENDING:
      return {
        ...state,
        authPending: true
      };
    case AuthActionTypes.SET_LOGIN_SUCCESS:
      return {
        ...state,
        authPending: false,
        loggedIn: true,
        loginError: false,
        authToken: action.authToken,
        refreshToken: action.refreshToken
      };
    case AuthActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        authPending: false,
        loggedIn: false,
        loginError: action.loginError
      };
    case AuthActionTypes.SET_REGISTER_SUCCESS:
      return {
        ...state,
        authPending: false,
        regError: false,
        registered: true
      };
    case AuthActionTypes.SET_REGISTER_ERROR:
      return {
        ...state,
        authPending: false,
        regError: action.regError
      };
    case AuthActionTypes.SET_LOGOUT:
      return {
        ...state,
        authToken: false,
        refreshToken: false,
        loggedIn: false
      };
    case AuthActionTypes.INVALID_TOKEN:
      return {
        ...state,
        tokenIsValid: false
      };
    case AuthActionTypes.REFRESHING_TOKEN:
      return {
        ...state,
        pendingRefreshingToken: true,
        tokenIsValid: false
      };
    case AuthActionTypes.TOKEN_REFRESHED:
      return {
        ...state,
        pendingRefreshingToken: null,
        tokenIsValid: true
      };
    case AuthActionTypes.SAVE_APP_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      };

    default:
      return state;
  }
}
