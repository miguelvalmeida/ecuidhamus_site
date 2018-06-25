import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    weight_sum: [],
    loading: false,
    dep_weight_sum: [],
    personal_weight: [],
    sbp_sum: [],
    dep_sbp_sum: [],
    personal_sbp: [],
    dbp_sum: [],
    dep_dbp_sum: [],
    personal_dbp: [],
    pulse_sum: [],
    dep_pulse_sum: [],
    personal_pulse: [],
    uric_acid_sum: [],
    dep_uricAcid_sum: [],
    personal_uric_acid: [],
    glucose_sum: [],
    dep_glucose_sum: [],
    personal_glucose: [],
    cholesterol_sum:  [],
    dep_cholesterol_sum: [],
    personal_cholesterol: []
};

const fetchPersonalWeightStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchPersonalWeightSuccess = (state, action) => {
    return updateObject(state, {
        personal_weight: action.personal_weight,
        loading: false
    });
};

const fetchWeightSumSuccess = (state, action) => {
    return updateObject(state, {
        weight_sum: action.weight_sum
    });
};

const fetchDepWeightSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_weight_sum: action.dep_weight_sum
    });
};

const fetchSbpSumSuccess = (state, action) => {
    return updateObject(state, {
        sbp_sum: action.sbp_sum
    });
};

const fetchDepSbpSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_sbp_sum: action.dep_sbp_sum
    });
};

const fetchPersonalSbpSuccess = (state, action) => {
    return updateObject(state, {
        personal_sbp: action.personal_sbp
    });
};

const fetchDbpSumSuccess = (state, action) => {
    return updateObject(state, {
        dbp_sum: action.dbp_sum
    });
};

const fetchDepDbpSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_dbp_sum: action.dep_dbp_sum
    });
};

const fetchPersonalDbpSuccess = (state, action) => {
    return updateObject(state, {
        personal_dbp: action.personal_dbp
    });
};

const fetchPulseSumSuccess = (state, action) => {
    return updateObject(state, {
        pulse_sum: action.pulse_sum
    });
};

const fetchDepPulseSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_pulse_sum: action.dep_pulse_sum
    });
};

const fetchPersonalPulseSuccess = (state, action) => {
    return updateObject(state, {
        personal_pulse: action.personal_pulse
    });
};

const fetchUricAcidSumSuccess = (state, action) => {
    return updateObject(state, {
        uric_acid_sum: action.uric_acid_sum
    });
};

const fetchDepUricAcidSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_uricAcid_sum: action.dep_uricAcid_sum
    });
};

const fetchPersonalUricAcidSuccess = (state, action) => {
    return updateObject(state, {
        personal_uric_acid: action.personal_uric_acid
    });
};

const fetchGlucoseSumSuccess = (state, action) => {
    return updateObject(state, {
        glucose_sum: action.glucose_sum
    });
};

const fetchDepGlucoseSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_glucose_sum: action.dep_glucose_sum
    });
};

const fetchPersonalGlucoseSuccess = (state, action) => {
    return updateObject(state, {
        personal_glucose: action.personal_glucose
    });
};

const fetchCholesterolSumSuccess = (state, action) => {
    return updateObject(state, {
        cholesterol_sum: action.cholesterol_sum
    });
};

const fetchDepCholesterolSumSuccess = (state, action) => {
    return updateObject(state, {
        dep_cholesterol_sum: action.dep_cholesterol_sum
    });
};

const fetchPersonalCholesterolSuccess = (state, action) => {
    return updateObject(state, {
        personal_cholesterol: action.personal_cholesterol
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEIGHT_SUM_SUCCESS: return fetchWeightSumSuccess(state, action);
        case actionTypes.FETCH_DEP_WEIGHT_SUM_SUCCESS: return fetchDepWeightSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_WEIGHT_SUCCESS: return fetchPersonalWeightSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_WEIGHT_START: return fetchPersonalWeightStart(state, action);
        case actionTypes.FETCH_SBP_SUM_SUCCESS: return fetchSbpSumSuccess(state, action);
        case actionTypes.FETCH_DEP_SBP_SUM_SUCCESS: return fetchDepSbpSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_SBP_SUCCESS: return fetchPersonalSbpSuccess(state, action);
        case actionTypes.FETCH_DBP_SUM_SUCCESS: return fetchDbpSumSuccess(state, action);
        case actionTypes.FETCH_DEP_DBP_SUM_SUCCESS: return fetchDepDbpSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_DBP_SUCCESS: return fetchPersonalDbpSuccess(state, action);
        case actionTypes.FETCH_PULSE_SUM_SUCCESS: return fetchPulseSumSuccess(state, action);
        case actionTypes.FETCH_DEP_PULSE_SUM_SUCCESS: return fetchDepPulseSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_PULSE_SUCCESS: return fetchPersonalPulseSuccess(state, action);
        case actionTypes.FETCH_URIC_ACID_SUM_SUCCESS: return fetchUricAcidSumSuccess(state, action);
        case actionTypes.FETCH_DEP_URIC_ACID_SUM_SUCCESS: return fetchDepUricAcidSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_URIC_ACID_SUCCESS: return fetchPersonalUricAcidSuccess(state, action);
        case actionTypes.FETCH_GLUCOSE_SUM_SUCCESS: return fetchGlucoseSumSuccess(state, action);
        case actionTypes.FETCH_DEP_GLUCOSE_SUM_SUCCESS: return fetchDepGlucoseSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_GLUCOSE_SUCCESS: return fetchPersonalGlucoseSuccess(state, action);
        case actionTypes.FETCH_CHOLESTEROL_SUM_SUCCESS: return fetchCholesterolSumSuccess(state, action);
        case actionTypes.FETCH_DEP_CHOLESTEROL_SUM_SUCCESS: return fetchDepCholesterolSumSuccess(state, action);
        case actionTypes.FETCH_PERSONAL_CHOLESTEROL_SUCCESS: return fetchPersonalCholesterolSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;