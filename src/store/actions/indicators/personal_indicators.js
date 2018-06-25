import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

//weight
export const fetchWeightSumStart = () => {
    return {
        type: actionTypes.FETCH_PERSONAL_WEIGHT_START
    }
};

export const fetchWeightSumSuccess = (weight_sum) => {
    return {
        type: actionTypes.FETCH_WEIGHT_SUM_SUCCESS,
        weight_sum: weight_sum
    }
};

export const fetchWeightSum = (year1, year2) => {
    return dispatch => {
        dispatch(fetchWeightSumStart());
        axios.get('charts/weight_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchWeightSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepWeightSumSuccess = (dep_weight_sum) => {
    return {
        type: actionTypes.FETCH_DEP_WEIGHT_SUM_SUCCESS,
        dep_weight_sum: dep_weight_sum
    }
};

export const fetchDepWeightSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/weight_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepWeightSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalWeightSuccess = (personal_weight) => {
    return {
        type: actionTypes.FETCH_PERSONAL_WEIGHT_SUCCESS,
        personal_weight: personal_weight
    }
};

export const fetchPersonalWeight = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_weight/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalWeightSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//systolic_blood_pressure
export const fetchSbpSumSuccess = (sbp_sum) => {
    return {
        type: actionTypes.FETCH_SBP_SUM_SUCCESS,
        sbp_sum: sbp_sum
    }
};

export const fetchSbpSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/sbp_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchSbpSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepSbpSumSuccess = (dep_sbp_sum) => {
    return {
        type: actionTypes.FETCH_DEP_SBP_SUM_SUCCESS,
        dep_sbp_sum: dep_sbp_sum
    }
};

export const fetchDepSbpSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/sbp_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepSbpSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalSbpSuccess = (personal_sbp) => {
    return {
        type: actionTypes.FETCH_PERSONAL_SBP_SUCCESS,
        personal_sbp: personal_sbp
    }
};

export const fetchPersonalSbp = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_sbp/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalSbpSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//diastolic blood pressure
export const fetchDbpSumSuccess = (dbp_sum) => {
    return {
        type: actionTypes.FETCH_DBP_SUM_SUCCESS,
        dbp_sum: dbp_sum
    }
};

export const fetchDbpSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/dbp_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchDbpSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepDbpSumSuccess = (dep_dbp_sum) => {
    return {
        type: actionTypes.FETCH_DEP_DBP_SUM_SUCCESS,
        dep_dbp_sum: dep_dbp_sum
    }
};

export const fetchDepDbpSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/dbp_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepDbpSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalDbpSuccess = (personal_dbp) => {
    return {
        type: actionTypes.FETCH_PERSONAL_DBP_SUCCESS,
        personal_dbp: personal_dbp
    }
};

export const fetchPersonalDbp = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_dbp/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalDbpSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pulse
export const fetchPulseSumSuccess = (pulse_sum) => {
    return {
        type: actionTypes.FETCH_PULSE_SUM_SUCCESS,
        pulse_sum: pulse_sum
    }
};

export const fetchPulseSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/pulse_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchPulseSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepPulseSumSuccess = (dep_pulse_sum) => {
    return {
        type: actionTypes.FETCH_DEP_PULSE_SUM_SUCCESS,
        dep_pulse_sum: dep_pulse_sum
    }
};

export const fetchDepPulseSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/pulse_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepPulseSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalPulseSuccess = (personal_pulse) => {
    return {
        type: actionTypes.FETCH_PERSONAL_PULSE_SUCCESS,
        personal_pulse: personal_pulse
    }
};

export const fetchPersonalPulse = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_pulse/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalPulseSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//uric acid
export const fetchUricAcidSumSuccess = (uric_acid_sum) => {
    return {
        type: actionTypes.FETCH_URIC_ACID_SUM_SUCCESS,
        uric_acid_sum: uric_acid_sum
    }
};

export const fetchUricAcidSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/uric_acid_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchUricAcidSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepUricAcidSumSuccess = (dep_uricAcid_sum) => {
    return {
        type: actionTypes.FETCH_DEP_URIC_ACID_SUM_SUCCESS,
        dep_uricAcid_sum: dep_uricAcid_sum
    }
};

export const fetchDepUricAcidSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/uric_acid_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepUricAcidSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalUricAcidSuccess = (personal_uric_acid) => {
    return {
        type: actionTypes.FETCH_PERSONAL_URIC_ACID_SUCCESS,
        personal_uric_acid: personal_uric_acid
    }
};

export const fetchPersonalUricAcid = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_uric_acid/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalUricAcidSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//glucose
export const fetchGlucoseSumSuccess = (glucose_sum) => {
    return {
        type: actionTypes.FETCH_GLUCOSE_SUM_SUCCESS,
        glucose_sum: glucose_sum
    }
};

export const fetchGlucoseSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/glucose_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchGlucoseSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepGlucoseSumSuccess = (dep_glucose_sum) => {
    return {
        type: actionTypes.FETCH_DEP_GLUCOSE_SUM_SUCCESS,
        dep_glucose_sum: dep_glucose_sum
    }
};

export const fetchDepGlucoseSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/glucose_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepGlucoseSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalGlucoseSuccess = (personal_glucose) => {
    return {
        type: actionTypes.FETCH_PERSONAL_GLUCOSE_SUCCESS,
        personal_glucose: personal_glucose
    }
};

export const fetchPersonalGlucose = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_glucose/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalGlucoseSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//cholesterol
export const fetchCholesterolSumSuccess = (cholesterol_sum) => {
    return {
        type: actionTypes.FETCH_CHOLESTEROL_SUM_SUCCESS,
        cholesterol_sum: cholesterol_sum
    }
};

export const fetchCholesterolSum = (year1, year2) => {
    return dispatch => {
        axios.get('charts/cholesterol_sum/' + year1 + '/' + year2)
            .then(response => {
                dispatch(fetchCholesterolSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDepCholesterolSumSuccess = (dep_cholesterol_sum) => {
    return {
        type: actionTypes.FETCH_DEP_CHOLESTEROL_SUM_SUCCESS,
        dep_cholesterol_sum: dep_cholesterol_sum
    }
};

export const fetchDepCholesterolSum = (year1, year2, department) => {
    return dispatch => {
        axios.get('charts/cholesterol_sum/' + year1 + '/' + year2 + '/' + department)
            .then(response => {
                dispatch(fetchDepCholesterolSumSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPersonalCholesterolSuccess = (personal_cholesterol) => {
    return {
        type: actionTypes.FETCH_PERSONAL_CHOLESTEROL_SUCCESS,
        personal_cholesterol: personal_cholesterol
    }
};

export const fetchPersonalCholesterol = (year1, year2) => {
    return dispatch => {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('charts/personal_cholesterol/' + year1 + '/' + year2, { headers: { "Authorization": token } })
            .then(response => {
                dispatch(fetchPersonalCholesterolSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};