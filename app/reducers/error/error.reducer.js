import * as ErrorActionTypes from '../../actions/error/error.actionType';

let initialState = {
    error: false,
    errorMessage: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ErrorActionTypes.CONNECTION_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.error
            };

        case ErrorActionTypes.SHOW_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.error
            };

        case ErrorActionTypes.REMOVE_ERROR:
            return {
                ...state,
                error: false,
                errorMessage: null
            };

        default:
            return state;
    }
}
