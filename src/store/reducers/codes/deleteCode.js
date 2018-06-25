import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    status: null,
    message: null,
    loading: false
};

const deleteCodeStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const deleteCodeSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const deleteCodeFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const deleteCodeMsgRemove = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_CODE_START: return deleteCodeStart(state, action);
        case actionTypes.DELETE_CODE_SUCCESS: return deleteCodeSuccess(state, action);
        case actionTypes.DELETE_CODE_FAIL: return deleteCodeFail(state, action);
        case actionTypes.DELETE_CODE_MSG_REMOVE: return deleteCodeMsgRemove(state, action);
        default:
            return state;
    }
};

export default reducer;