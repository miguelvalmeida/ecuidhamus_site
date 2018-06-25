import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const fetchCodeDataStart = () => {
    return {
        type: actionTypes.FETCH_CODE_DATA_START
    };
};

export const fetchCodeDataSuccess = (codeData, status, completed) => {
    return {
        type: actionTypes.FETCH_CODE_DATA_SUCCESS,
        codeData: codeData,
        status: status,
        completed: completed
    };
};

export const fetchCodeDataFail = (message, status) => {
    return {
        type: actionTypes.FETCH_CODE_DATA_FAIL,
        message: message,
        status: status
    };
};

export const fetchCodeData = (code) => {
    return dispatch => {
        dispatch(fetchCodeDataStart());
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.get('forms/registered_code/' + code, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(fetchCodeDataSuccess(response.data, response.data.status, response.data.completed));
                } else {
                    dispatch(fetchCodeDataFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(fetchCodeDataFail());
            })
    };
};