import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    status: null,
    message: null,
    loading: false
};

const insertCodeStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const insertCodeSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const insertCodeFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const insertCodeRemoveMsg = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INSERT_CODE_START: return insertCodeStart(state, action);
        case actionTypes.INSERT_CODE_SUCCESS: return insertCodeSuccess(state, action);
        case actionTypes.INSERT_CODE_FAIL: return insertCodeFail(state, action);
        case actionTypes.INSERT_CODE_MSG_REMOVE: return insertCodeRemoveMsg(state, action);
        default:
            return state;
    }
};

export default reducer;