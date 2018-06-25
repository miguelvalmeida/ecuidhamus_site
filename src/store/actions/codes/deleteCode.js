import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const deleteCodeStart = () => {
    return {
        type: actionTypes.DELETE_CODE_START
    };
};

export const deleteCodeSuccess = (message, status) => {
    return {
        type: actionTypes.DELETE_CODE_SUCCESS,
        message: message,
        status: status
    };
};

export const deleteCodeFail = (message, status) => {
    return {
        type: actionTypes.DELETE_CODE_FAIL,
        message: message,
        status: status
    };
};

export const deleteCodeMsgRemove = () => {
    return {
        type: actionTypes.DELETE_CODE_MSG_REMOVE
    };
};

export const deleteCode = (code) => {
    return dispatch => {
        dispatch(deleteCodeStart());
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.delete('forms/delete/' + code, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(deleteCodeSuccess(response.data.message, response.data.status));
                } else {
                    dispatch(deleteCodeFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(deleteCodeFail());
            })
    };
};