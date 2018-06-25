import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    status: null,
    completed: null,
    message: null,
    codeData: {
        dados1: {},
        dados2: {},
        dados3: {},
        dados4: {},
        dados5: {},
        dados6: {}
    },
    loading: false,
    loading_null: false,
    status_null: null,
    message_null: null,
    nullValues: {},
    nullNumbers: {}
};

const fetchCodeDataStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchCodeDataSuccess = (state, action) => {
    return updateObject(state, {
        codeData: action.codeData,
        status: action.status,
        completed: action.completed,
        loading: false
    });
};

const fetchCodeDataFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const codeRemoveMessage = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null,
        loading: false
    });
};


const fetchNullValuesStart = (state, action) => {
    return updateObject(state, { loading_null: true });
};

const fetchNullValuesSuccess = (state, action) => {
    return updateObject(state, {
        nullValues: action.nullValues,
        status_null: action.status_null,
        loading_null: false
    });
};

const fetchNullValuesFail = (state, action) => {
    return updateObject(state, {
        message_null: action.message_null,
        status_null: action.status_null,
        loading_null: false
    });
};

const nullValuesRemoveMessage = (state, action) => {
    return updateObject(state, {
        message_null: null,
        status_null: null
    });
};

const fetchNullNumbersSuccess = (state, action) => {
    return updateObject(state, {
        nullNumbers: action.nullNumbers,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CODE_DATA_START: return fetchCodeDataStart(state, action);
        case actionTypes.FETCH_CODE_DATA_SUCCESS: return fetchCodeDataSuccess(state, action);
        case actionTypes.FETCH_CODE_DATA_FAIL: return fetchCodeDataFail(state, action);
        case actionTypes.CODE_DATA_REMOVE_MESSAGE: return codeRemoveMessage(state, action);
        case actionTypes.FETCH_FORM_NULL_VALUES_START: return fetchNullValuesStart(state, action);
        case actionTypes.FETCH_FORM_NULL_VALUES_SUCCESS: return fetchNullValuesSuccess(state, action);
        case actionTypes.FETCH_FORM_NULL_VALUES_FAIL: return fetchNullValuesFail(state, action);
        case actionTypes.FORM_NULL_REMOVE_MESSAGE: return nullValuesRemoveMessage(state, action);
        case actionTypes.FETCH_FORM_NULL_NUMBERS_SUCCESS: return fetchNullNumbersSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;