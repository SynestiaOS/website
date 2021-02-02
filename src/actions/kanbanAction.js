import {API_KANBAN_ALL} from "../api/kanbanApi";

export const AuthActions = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILED: 'SIGN_UP_FAILED',
};

export const doLogin = (loginDTO) => (dispatch) => {
    postFromApi(API_LOGIN, AuthActions.LOGIN_SUCCESS, AuthActions.LOGIN_FAILED, loginDTO, dispatch);
};



export function postWithJwtFromApi(url, token, ok, failed, data, dispatch) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                response.json().then(data => {
                    console.log("!ok:", data);
                    dispatch({
                        type: failed,
                        payload: {
                            status: false,
                            message: data.message,
                            data: null
                        }
                    });
                });
            } else {
                response.json().then(data => {
                    console.log("ok:", data);
                    dispatch({
                        type: ok,
                        payload: {
                            status: true,
                            message: data.message,
                            data: data
                        }
                    });
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            dispatch({
                type: failed,
                payload: {
                    status: false,
                    message: error.message,
                    data: null
                }
            })
        });
}
