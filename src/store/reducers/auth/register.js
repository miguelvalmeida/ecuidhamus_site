import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    message: null,
    error: null,
    loading: false,
    status: null
};

const registerStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const registerSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        message: action.message,
        loading: false,
        status: action.status
    });
};

const registerFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false,
        status: action.status
    });
};

const registerRemoveMsg = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.REGISTER_MSG_REMOVE: return registerRemoveMsg(state, action);
        default:
            return state;
    }
};

export default reducer;