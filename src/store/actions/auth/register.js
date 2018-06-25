import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = (message, status) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        message: message,
        status: status
    };
};

export const registerFail = (message, status) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        message: message,
        status: status
    };
};

export const registerRemoveMsg = () => {
    return {
        type: actionTypes.REGISTER_MSG_REMOVE
    };
};

export const register = (email, password) => {
    return dispatch => {
        dispatch(registerStart());
        const registerData = {
            email: email,
            password: password
        };
        const language = localStorage.getItem('language');
        axios.post('user/signup', registerData, { headers: { "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(registerSuccess(response.data.message, response.data.status));
                } else {
                    dispatch(registerFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(registerFail());
            })
    }
}