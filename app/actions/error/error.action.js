// Actions
import * as ErrorActionTypes from './error.actionType';

export const connectionError = error => {
    return {
        type: ErrorActionTypes.CONNECTION_ERROR,
        error
    };
};
export const showError = error => {
    return {
        type: ErrorActionTypes.SHOW_ERROR,
        error
    };
};
export const removeError = () => {
    return {
        type: ErrorActionTypes.REMOVE_ERROR
    };
};