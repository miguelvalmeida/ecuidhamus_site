import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    status: null,
    codes: null,
    loading: false
};

const fetchCodesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchCodesSuccess = (state, action) => {
    return updateObject(state, {
        codes: action.codes,
        status: action.status,
        loading: false
    });
};

const fetchCodesFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CODES_START: return fetchCodesStart(state, action);
        case actionTypes.FETCH_CODES_SUCCESS: return fetchCodesSuccess(state, action);
        case actionTypes.FETCH_CODES_FAIL: return fetchCodesFail(state, action);
        default:
            return state;
    }
};

export default reducer;