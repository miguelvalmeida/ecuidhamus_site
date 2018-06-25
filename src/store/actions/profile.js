import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const fetchFirstLastNameSuccess = (names) => {
    return {
        type: actionTypes.FETCH_FIRST_LAST_NAME_SUCCESS,
        names: names
    };
};

export const fetchFirstLastName = () => {
    return dispatch => {     
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('user/profile', { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchFirstLastNameSuccess(response.data.user))
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const updateProfileStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    };
};

export const updateProfileSuccess = (statusProfile, messageProfile) => {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        messageProfile: messageProfile,
        statusProfile: statusProfile
    };
};

export const updateProfileFail = (statusProfile, messageProfile) => {
    return {
        type: actionTypes.UPDATE_PROFILE_FAIL,
        statusProfile: statusProfile,
        messageProfile: messageProfile
    };
};

export const updateProfileRemoveMessage = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_REMOVE_MSG
    };
};

export const updateProfile = (firstname, lastname) => {
    return dispatch => {
        dispatch(updateProfileStart);
        const profileData = {
            firstname: firstname,
            lastname: lastname
        };
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.post('user/profile/nameUpdate', profileData, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(updateProfileSuccess(response.data.status, response.data.message));
                } else {
                    dispatch(updateProfileFail(response.data.status, response.data.message));
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const updatePasswordStart = () => {
    return {
        type: actionTypes.UPDATE_PASSWORD_START
    };
};

export const updatePasswordSuccess = (statusPassword, messagePassword) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_SUCCESS,
        messagePassword: messagePassword,
        statusPassword: statusPassword
    };
};

export const updatePasswordFail = (statusPassword, messagePassword) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FAIL,
        statusPassword: statusPassword,
        messagePassword: messagePassword
    };
};

export const updatePasswordRemoveMessage = () => {
    return {
        type: actionTypes.UPDATE_PASSWORD_REMOVE_MSG
    };
};

export const updatePassword = (oldpassword, newpassword) => {
    return dispatch => {
        dispatch(updatePasswordStart);
        const updatePasswordData = {
            oldpassword: oldpassword,
            newpassword: newpassword
        };
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.post('user/profile/changepassword', updatePasswordData, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(updatePasswordSuccess(response.data.status, response.data.message));
                } else {
                    dispatch(updatePasswordFail(response.data.status, response.data.message));
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const deleteAccountStart = () => {
    return {
        type: actionTypes.DELETE_ACCOUNT_START
    };
};

export const deleteAccountSuccess = (statusDelete) => {
    return {
        type: actionTypes.DELETE_ACCOUNT_SUCCESS,
        statusDelete: statusDelete
    };
};

export const deleteAccountFail = (statusDelete, messageDelete) => {
    return {
        type: actionTypes.DELETE_ACCOUNT_FAIL,
        statusDelete: statusDelete,
        messageDelete: messageDelete
    };
};

export const deleteAccountRemoveMessage = () => {
    return {
        type: actionTypes.DELETE_ACCOUNT_REMOVE_MSG
    };
};

export const deleteAccount = (password) => {
    return dispatch => {
        dispatch(deleteAccountStart);
        const deletePasswordData = {
            password: password,
        };
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.post('user/profile/delete', deletePasswordData, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    dispatch(deleteAccountSuccess(response.data.status));
                } else {
                    dispatch(deleteAccountFail(response.data.status, response.data.message));
                }
            })
            .catch(err => {
                console.log(err);
            })
    };
};