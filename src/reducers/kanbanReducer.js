import {AuthActions} from "../actions/authAction";
import {combineReducers} from 'redux';

const initialState = {
    loginResult: {
        status: false,
        message: null,
        data: {
            token: '',
            token_type: ''
        }
    },
    signUpResult: {
        status: false,
        message: null,
        data: null
    },
};

export function reduxResult(state = initialState, action) {
    switch (action.type) {
        case AuthActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loginResult: action.payload,
            });
        case AuthActions.LOGIN_FAILED:
            return Object.assign({}, state, {
                loginResult: action.payload,
            });

        default:
            return state;
    }
}

const KanbanReducer = combineReducers({
    reduxResult,
});

export default KanbanReducer
