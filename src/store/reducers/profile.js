import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    names: {},
    loadingProfile: false,
    messageProfile: null,
    statusProfile: null,
    loadingPassword: false,
    messagePassword: null,
    statusPassword: null,
    loadingDelete: false,
    messageDelete: null,
    statusDelete: null
};

const fetchFirstLastNameSuccess = (state, action) => {
    return updateObject(state, { names: action.names });
};

const updateProfileStart = (state, action) => {
    return updateObject(state, { loadingProfile: true });
};

const updateProfileSuccess = (state, action) => {
    return updateObject(state, {
        messageProfile: action.messageProfile,
        statusProfile: action.statusProfile,
        loadingProfile: false
    });
};

const updateProfileFail = (state, action) => {
    return updateObject(state, {
        messageProfile: action.messageProfile,
        statusProfile: action.statusProfile,
        loadingProfile: false
    });
};

const updateProfileRemoveMessage = (state, action) => {
    return updateObject(state, {
        messageProfile: null,
        statusProfile: null
    });
};

const updatePasswordStart = (state, action) => {
    return updateObject(state, { loadingPassword: true });
};

const updatePasswordSuccess = (state, action) => {
    return updateObject(state, {
        messagePassword: action.messagePassword,
        statusPassword: action.statusPassword,
        loadingPassword: false
    });
};

const updatePasswordFail = (state, action) => {
    return updateObject(state, {
        messagePassword: action.messagePassword,
        statusPassword: action.statusPassword,
        loadingPassword: false
    });
};

const updatePasswordRemoveMessage = (state, action) => {
    return updateObject(state, {
        messagePassword: null,
        statusPassword: null
    });
};

const deleteAccountStart = (state, action) => {
    return updateObject(state, { loadingDelete: true });
};

const deleteAccountSuccess = (state, action) => {
    return updateObject(state, {
        statusDelete: action.statusDelete,
        loadingDelete: false
    });
};

const deleteAccountFail = (state, action) => {
    return updateObject(state, {
        messageDelete: action.messageDelete,
        statusDelete: action.statusDelete,
        loadingDelete: false
    });
};

const deleteAccountRemoveMessage = (state, action) => {
    return updateObject(state, {
        messageDelete: null,
        statusDelete: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FIRST_LAST_NAME_SUCCESS: return fetchFirstLastNameSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_START: return updateProfileStart(state, action);
        case actionTypes.UPDATE_PROFILE_SUCCESS: return updateProfileSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_FAIL: return updateProfileFail(state, action);
        case actionTypes.UPDATE_PROFILE_REMOVE_MSG: return updateProfileRemoveMessage(state, action);
        case actionTypes.UPDATE_PASSWORD_START: return updatePasswordStart(state, action);
        case actionTypes.UPDATE_PASSWORD_SUCCESS: return updatePasswordSuccess(state, action);
        case actionTypes.UPDATE_PASSWORD_FAIL: return updatePasswordFail(state, action);
        case actionTypes.UPDATE_PASSWORD_REMOVE_MSG: return updatePasswordRemoveMessage(state, action);
        case actionTypes.DELETE_ACCOUNT_START: return deleteAccountStart(state, action);
        case actionTypes.DELETE_ACCOUNT_SUCCESS: return deleteAccountSuccess(state, action);
        case actionTypes.DELETE_ACCOUNT_FAIL: return deleteAccountFail(state, action);
        case actionTypes.DELETE_ACCOUNT_REMOVE_MSG: return deleteAccountRemoveMessage(state, action);
        default:
            return state;
    }
};

export default reducer;