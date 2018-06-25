import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';

import './index.css';
import 'bootstrap';

import App from './App';

import loginReducer from './store/reducers/auth/login';
import registerReducer from './store/reducers/auth/register';
import recoverPwReducer from './store/reducers/auth/recoverPassword';
import insertCodeReducer from './store/reducers/codes/insertCode';
import fetchCodesReducer from './store/reducers/codes/fetchCodes';
import fetchCodeDataReducer from './store/reducers/codes/fetchCodeData';
import deleteCodeReducer from './store/reducers/codes/deleteCode';
import languageReducer from './store/reducers/language';
import generalIndicatorsReducer from './store/reducers/indicators/general_indicators';
import personalIndicatorsReducer from './store/reducers/indicators/personal_indicators';
import byGenderIndicatorsReducer from './store/reducers/indicators/by_gender_indicators';
import byAgeIndicatorsReducer from './store/reducers/indicators/by_age_indicators';
import fetchRefValuesReducer from './store/reducers/fetchRefValues';
import profileReducer from './store/reducers/profile';
import { language } from './store/actions/index';

addLocaleData(pt);
addLocaleData(en);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recover: recoverPwReducer,
    insertCode: insertCodeReducer,
    fetchCodes: fetchCodesReducer,
    fetchCodeData: fetchCodeDataReducer,
    deleteCode: deleteCodeReducer,
    language: languageReducer,
    general_indicators: generalIndicatorsReducer,
    by_gender: byGenderIndicatorsReducer,
    by_age: byAgeIndicatorsReducer,
    profile: profileReducer,
    personal_indicators: personalIndicatorsReducer,
    fetchRefValues: fetchRefValuesReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

if (localStorage.language) {
    store.dispatch(language(localStorage.language))
};

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
