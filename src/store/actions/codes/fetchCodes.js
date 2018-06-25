import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

export const fetchCodesStart = () => {
    return {
        type: actionTypes.FETCH_CODES_START
    };
};

export const fetchCodesSuccess = (codes, status) => {
    return {
        type: actionTypes.FETCH_CODES_SUCCESS,
        codes: codes,
        status: status
    };
};

export const fetchCodesFail = (message, status) => {
    return {
        type: actionTypes.FETCH_CODES_FAIL,
        message: message,
        status: status
    };
};

export const codeRemoveMessage = () => {
    return {
        type: actionTypes.CODE_DATA_REMOVE_MESSAGE
    };
};

export const fetchCodes = () => {
    return dispatch => {
        dispatch(fetchCodesStart());
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('forms/registered_codes', { headers: { "Authorization": token } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(fetchCodesSuccess(response.data.results, response.data.status));
                } else {
                    dispatch(fetchCodesFail(response.data.message, response.data.status));
                }
            })
            .catch(err => {
                dispatch(fetchCodesFail());
            })
    };
};

export const fetchNullValuesStart = () => {
    return {
        type: actionTypes.FETCH_FORM_NULL_VALUES_START
    };
};

export const fetchNullValuesSuccess = (nullValues, status_null) => {
    return {
        type: actionTypes.FETCH_FORM_NULL_VALUES_SUCCESS,
        nullValues: nullValues,
        status_null: status_null
    };
};

export const fetchNullValuesFail = (message_null, status_null) => {
    return {
        type: actionTypes.FETCH_FORM_NULL_VALUES_FAIL,
        message_null: message_null,
        status_null: status_null
    };
};

export const nullValuesMsgRemove = () => {
    return {
        type: actionTypes.FORM_NULL_REMOVE_MESSAGE
    };
};

export const fetchNullValues = (code) => {
    return dispatch => {
        dispatch(fetchNullValuesStart());
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('forms/nullvalues/' + code, { headers: { "Authorization": token } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(fetchNullValuesSuccess(response.data.message[0], response.data.status));
                } else {
                    dispatch(fetchNullValuesFail(response.data.message, response.data.status));
                };
            })
            .catch(err => {
                console.log(err)
            })
    };
};

export const fetchNullNumbersSuccess = (nullNumbers, status) => {
    return {
        type: actionTypes.FETCH_FORM_NULL_NUMBERS_SUCCESS,
        nullNumbers: nullNumbers,
    };
};

export const fetchNullNumbers = (code) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('forms/nullnumbers/' + code, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchNullNumbersSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err)
            })
    };
};