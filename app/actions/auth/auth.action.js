// actions
import {
    SET_AUTH_PENDING,
    SET_LOGIN_SUCCESS, 
    SET_LOGIN_FAIL,
    SET_LOGOUT,
    SET_REGISTER_SUCCESS,
    SET_REGISTER_ERROR,
    SAVE_APP_TOKEN
} from './auth.actionType'

export const setAuthPending = () => {
    return {
        type: SET_AUTH_PENDING
    }
}

export const setLoginSuccess = (authToken, refreshToken) => {
    return {
        type: SET_LOGIN_SUCCESS,
        authToken,
        refreshToken
    }
}

export const setLoginFail = loginError => {
    return {
        type: SET_LOGIN_FAIL,
        loginError
    }
}

export const setRegisterSuccess = () => {
    return {
        type: SET_REGISTER_SUCCESS
    }
}

export const setRegisterError = regError => {
    return {
        type: SET_REGISTER_ERROR,
        regError
    }
}

export const setLogout = () => {
    return {
        type: SET_LOGOUT
    }
}

export const saveAppToken = authToken => {
    return {
        type: SAVE_APP_TOKEN,
        authToken
    }
}