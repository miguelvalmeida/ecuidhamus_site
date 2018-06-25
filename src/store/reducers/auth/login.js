import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    token: "initialValue",
    department: "2",
    message: null,
    error: null,
    loading: false
};

const loginStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        department: action.department,
        error: null,
        loading: false
    });
};

const loginFail = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false
    });
};

const loginRemoveMsg = (state, action) => {
    return updateObject(state, {
        message: null,
        status: null
    });
};

const logout = (state, action) => {
    return updateObject(state, {
        token: null,
        department: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.LOGIN_MSG_REMOVE: return loginRemoveMsg(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        default:
            return state;
    }
};

export default reducer;