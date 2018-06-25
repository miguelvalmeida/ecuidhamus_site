import * as actionTypes from './actionTypes';

export const setLanguage = (lang) => {
    return {
        type: actionTypes.SET_LANGUAGE,
        lang: lang
    };
};

export const language = (lang) => {
    return dispatch => {
        localStorage.language = lang;
        dispatch(setLanguage(lang));
    }
}