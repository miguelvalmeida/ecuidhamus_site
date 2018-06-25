import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const insertCodeStart = () => {
    return {
        type: actionTypes.INSERT_CODE_START
    };
};

export const insertCodeSuccess = (message, status) => {
    return {
        type: actionTypes.INSERT_CODE_SUCCESS,
        message: message,
        status: status
    };
};

export const insertCodeFail = (message, status) => {
    return {
        type: actionTypes.INSERT_CODE_FAIL,
        message: message,
        status: status
    };
};

export const insertCodeRemoveMsg = () => {
    return {
        type: actionTypes.INSERT_CODE_MSG_REMOVE
    };
};

export const insertCode = (code) => {
    return dispatch => {
        dispatch(insertCodeStart());
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.get('forms/insert/' + code, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(insertCodeSuccess(response.data.message, response.data.status));
                } else {
                    dispatch(insertCodeFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(insertCodeFail());
            })
    };
};