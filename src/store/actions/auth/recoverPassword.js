import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const recoverPwStart = () => {
    return {
        type: actionTypes.RECOVER_PW_START
    };
};

export const recoverPwSuccess = (message, status) => {
    return {
        type: actionTypes.RECOVER_PW_SUCCESS,
        message: message,
        status: status
    };
};

export const recoverPwFail = (message, status) => {
    return {
        type: actionTypes.RECOVER_PW_FAIL,
        message: message,
        status: status
    };
};

export const recoverPwMessage = () => {
    return {
        type: actionTypes.RECOVER_PW_MSG_REMOVE
    };
};

export const recoverPassword = (email) => {
    return dispatch => {
        dispatch(recoverPwStart());
        const recoverData = {
            email: email
        };
        axios.post('user/forgotPassword', recoverData)
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(recoverPwSuccess(response.data.message, response.data.status));
                } else {
                    dispatch(recoverPwFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(recoverPwFail());
            })
    };
};