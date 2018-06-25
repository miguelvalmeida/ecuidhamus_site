import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    status: null,
    message: null,
    loading: false
};

const recoverPwStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const recoverPwSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const recoverPwFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        status: action.status,
        loading: false
    });
};

const recoverPwRemoveMsg = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECOVER_PW_START: return recoverPwStart(state, action);
        case actionTypes.RECOVER_PW_SUCCESS: return recoverPwSuccess(state, action);
        case actionTypes.RECOVER_PW_FAIL: return recoverPwFail(state, action);
        case actionTypes.RECOVER_PW_MSG_REMOVE: return recoverPwRemoveMsg(state, action);
        default:
            return state;
    }
};

export default reducer;