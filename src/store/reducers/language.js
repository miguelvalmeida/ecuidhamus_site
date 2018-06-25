import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    lang: 'pt'
};

const setLanguage = (state, action) => {
    return updateObject(state, {
        lang: action.lang
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_LANGUAGE: return setLanguage(state, action);
        default:
            return state;
    }
};

export default reducer;