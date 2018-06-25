import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (token, department) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        department: department
    };
};

export const loginFail = (message) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        message: message
    };
};

export const loginRemoveMsg = () => {
    return {
        type: actionTypes.LOGIN_MSG_REMOVE
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('department');
    return {
        type: actionTypes.LOGOUT
    };
};

export const checkLoginTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart());
        const loginData = {
            email: email,
            password: password
        };
        const language = localStorage.getItem('language');
        axios.post('user/signin', loginData, { headers: { "language": language } })
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                if (response.data.status === 1) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('department', response.data.department);
                    dispatch(loginSuccess(response.data.token, response.data.department));
                    dispatch(checkLoginTimeout(response.data.expiresIn));
                } else {
                    dispatch(loginFail(response.data.message));
                }
            })
            .catch(err => {
                dispatch(loginFail());
            })
    };
};

export const loginCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const department = localStorage.getItem('department');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(loginSuccess(token, department));
                dispatch(checkLoginTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};