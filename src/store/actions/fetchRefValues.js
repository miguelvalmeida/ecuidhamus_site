import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const fetchDepartmentsSuccess = (departments) => {
    return {
        type: actionTypes.FETCH_DEPARTMENTS_VALUES_SUCCESS,
        departments: departments
    }
};

export const fetchDepartments = () => {
    return dispatch => {
        axios.get('ref_values/departments/')
            .then(response => {
                dispatch(fetchDepartmentsSuccess(response.data.departments.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchGenderValuesSuccess = (genderValues) => {
    return {
        type: actionTypes.FETCH_GENDER_VALUES_SUCCESS,
        genderValues: genderValues
    }
};

export const fetchGenderValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/genders/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchGenderValuesSuccess(response.data.genders.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAgeValuesSuccess = (ageValues) => {
    return {
        type: actionTypes.FETCH_AGE_VALUES_SUCCESS,
        ageValues: ageValues
    }
};

export const fetchAgeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/ages/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchAgeValuesSuccess(response.data.ages.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchChartAgesValuesSuccess = (chartAgesValues) => {
    return {
        type: actionTypes.FETCH_CHART_AGES_VALUES_SUCCESS,
        chartAgesValues: chartAgesValues
    }
};

export const fetchChartAgesValues = () => {
    return dispatch => {
        axios.get('ref_values/chart_ages/')
            .then(response => {
                dispatch(fetchChartAgesValuesSuccess(response.data.ages.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAcademicValuesSuccess = (academicValues) => {
    return {
        type: actionTypes.FETCH_ACADEMIC_VALUES_SUCCESS,
        academicValues: academicValues
    }
};

export const fetchAcademicValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/academic/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchAcademicValuesSuccess(response.data.academic.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchMaritalValuesSuccess = (maritalValues) => {
    return {
        type: actionTypes.FETCH_MARITAL_VALUES_SUCCESS,
        maritalValues: maritalValues
    }
};

export const fetchMaritalValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/marital/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchMaritalValuesSuccess(response.data.marital.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSmokerStatusValuesSuccess = (smokerStatusValues) => {
    return {
        type: actionTypes.FETCH_SMOKER_STATUS_VALUES_SUCCESS,
        smokerStatusValues: smokerStatusValues
    }
};

export const fetchSmokerStatusValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/smokersv/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchSmokerStatusValuesSuccess(response.data.smokersV.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};


export const fetchSmokerFrequencieValuesSuccess = (smokerFrequencieValues) => {
    return {
        type: actionTypes.FETCH_SMOKER_FREQUENCIES_VALUES_SUCCESS,
        smokerFrequencieValues: smokerFrequencieValues
    }
};

export const fetchSmokerFrequencieValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/smokersf/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchSmokerFrequencieValuesSuccess(response.data.smokersF.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSmokerNumberValuesSuccess = (smokerNumberValues) => {
    return {
        type: actionTypes.FETCH_SMOKER_NUMBER_VALUES_SUCCESS,
        smokerNumberValues: smokerNumberValues
    }
};

export const fetchSmokerNumberValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/smokersa/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchSmokerNumberValuesSuccess(response.data.smokersA.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchHealthOpinionsValuesSuccess = (healthOpinionsValues) => {
    return {
        type: actionTypes.FETCH_HEALTH_OPINIONS_VALUES_SUCCESS,
        healthOpinionsValues: healthOpinionsValues
    }
};

export const fetchHealthOpinionsValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/health_opinions/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchHealthOpinionsValuesSuccess(response.data.healthO.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPainValuesSuccess = (painValues) => {
    return {
        type: actionTypes.FETCH_PAIN_VALUE_VALUES_SUCCESS,
        painValues: painValues
    }
};

export const fetchPainValueValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/pain_value/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchPainValuesSuccess(response.data.pain_value.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPainScaleValuesSuccess = (painScaleValues) => {
    return {
        type: actionTypes.FETCH_PAIN_SCALE_VALUES_SUCCESS,
        painScaleValues: painScaleValues
    }
};

export const fetchPainScaleValues = () => {
    return dispatch => {
        axios.get('ref_values/pain_scale/')
            .then(response => {
                dispatch(fetchPainScaleValuesSuccess(response.data.pain_scale.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchMealsValuesSuccess = (mealsValues) => {
    return {
        type: actionTypes.FETCH_MEALS_VALUES_SUCCESS,
        mealsValues: mealsValues
    }
};

export const fetchMealsValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/meals/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchMealsValuesSuccess(response.data.meals.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchBreakfastValuesSuccess = (breakfastValues) => {
    return {
        type: actionTypes.FETCH_BREAKFAST_VALUES_SUCCESS,
        breakfastValues: breakfastValues
    }
};

export const fetchBreakfastValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/breakfast/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchBreakfastValuesSuccess(response.data.breakfast.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchFruitValuesSuccess = (fruitValues) => {
    return {
        type: actionTypes.FETCH_FRUITS_VALUES_SUCCESS,
        fruitValues: fruitValues
    }
};

export const fetchFruitValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/fruit/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchFruitValuesSuccess(response.data.fruits.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchVegetablesValuesSuccess = (vegetablesValues) => {
    return {
        type: actionTypes.FETCH_VEGETABLES_VALUES_SUCCESS,
        vegetablesValues: vegetablesValues
    }
};

export const fetchVegetablesValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/vegetables/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchVegetablesValuesSuccess(response.data.vegetables.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSodasValuesSuccess = (sodasValues) => {
    return {
        type: actionTypes.FETCH_SODAS_VALUES_SUCCESS,
        sodasValues: sodasValues
    }
};

export const fetchSodasValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/sodas/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchSodasValuesSuccess(response.data.sodas.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchFastFoodValuesSuccess = (fastFoodValues) => {
    return {
        type: actionTypes.FETCH_FAST_FOOD_VALUES_SUCCESS,
        fastFoodValues: fastFoodValues
    }
};

export const fetchFastFoodValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/fast_food/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchFastFoodValuesSuccess(response.data.fast_food.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPhysicalHoursValuesSuccess = (physicalHoursValues) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_HOURS_VALUES_SUCCESS,
        physicalHoursValues: physicalHoursValues
    }
};

export const fetchPhysicalHoursValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/physical_hours/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchPhysicalHoursValuesSuccess(response.data.physical_hours.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchWalkingCyclingValuesSuccess = (walkingCyclingValues) => {
    return {
        type: actionTypes.FETCH_WALKING_CYCLING_VALUES_SUCCESS,
        walkingCyclingValues: walkingCyclingValues
    }
};

export const fetchWalkingCyclingValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/walking_cycling/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchWalkingCyclingValuesSuccess(response.data.walking_cycling.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchDatesSuccess = (dates) => {
    return {
        type: actionTypes.FETCH_DATES_SUCCESS,
        dates: dates
    }
};

export const fetchDates = () => {
    return dispatch => {
        axios.get('ref_values/dates/')
            .then(response => {
                dispatch(fetchDatesSuccess(response.data.dates.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchMinYearSuccess = (minYear) => {
    return {
        type: actionTypes.FETCH_MIN_YEAR_SUCCESS,
        minYear: minYear
    }
};

export const fetchMinYear = () => {
    return dispatch => {
        axios.get('ref_values/min_year/')
            .then(response => {
                dispatch(fetchMinYearSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchMaxYearSuccess = (maxYear) => {
    return {
        type: actionTypes.FETCH_MAX_YEAR_SUCCESS,
        maxYear: maxYear
    }
};

export const fetchMaxYear = () => {
    return dispatch => {
        axios.get('ref_values/max_year/')
            .then(response => {
                dispatch(fetchMaxYearSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchChronicDiseasesValuesSuccess = (chronicValues) => {
    return {
        type: actionTypes.FETCH_CHRONIC_DISEASE_VALUES_SUCCESS,
        chronicValues: chronicValues
    }
};

export const fetchChronicDiseasesValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/chronic_value/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchChronicDiseasesValuesSuccess(response.data.chronic_diseases.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchTakesMedsValuesSuccess = (medsValues) => {
    return {
        type: actionTypes.FETCH_TAKES_MEDS_VALUES_SUCCESS,
        medsValues: medsValues
    }
};

export const fetchTakesMedsValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/meds_value/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchTakesMedsValuesSuccess(response.data.takes_meds_value.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchLocalPainValuesSuccess = (localPainValues) => {
    return {
        type: actionTypes.FETCH_LOCAL_PAIN_VALUES_SUCCESS,
        localPainValues: localPainValues
    }
};

export const fetchLocalPainValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/local_pain/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchLocalPainValuesSuccess(response.data.local_pain.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchPhysicalActivityValuesSuccess = (physicalActivityValues) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_VALUES_SUCCESS,
        physicalActivityValues: physicalActivityValues
    }
};

export const fetchPhysicalValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/physical_values/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchPhysicalActivityValuesSuccess(response.data.physical_value.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSpirometryChangeValuesSuccess = (spirometryChangeValues) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_CHANGE_VALUES_SUCCESS,
        spirometryChangeValues: spirometryChangeValues
    }
};

export const fetchSpirometryChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/spirometry_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchSpirometryChangeValuesSuccess(response.data.spirometry_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchVisualChangeValuesSuccess = (visualChangeValues) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_CHANGE_VALUES_SUCCESS,
        visualChangeValues: visualChangeValues
    }
};

export const fetchVisualChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/visual_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchVisualChangeValuesSuccess(response.data.visual_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAuditoryChangeValuesSuccess = (auditoryChangeValues) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_VALUES_SUCCESS,
        auditoryChangeValues: auditoryChangeValues
    }
};

export const fetchAuditoryChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/auditory_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchAuditoryChangeValuesSuccess(response.data.auditory_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEcgChangeValuesSuccess = (ecgChangeValues) => {
    return {
        type: actionTypes.FETCH_ECG_CHANGE_VALUES_SUCCESS,
        ecgChangeValues: ecgChangeValues
    }
};

export const fetchEcgChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/ecg_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchEcgChangeValuesSuccess(response.data.ecg_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEritrogramChangeValuesSuccess = (eritrogramChangeValues) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_CHANGE_VALUES_SUCCESS,
        eritrogramChangeValues: eritrogramChangeValues
    }
};

export const fetchEritrogramChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/eritrogram_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchEritrogramChangeValuesSuccess(response.data.eritrogram_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchLeukogramChangeValuesSuccess = (leukogramChangeValues) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_CHANGE_VALUES_SUCCESS,
        leukogramChangeValues: leukogramChangeValues
    }
};

export const fetchLeukogramChangeValues = () => {
    return dispatch => {
        const language = localStorage.getItem('language');
        axios.get('ref_values/leukogram_change/', { headers: { "language": language } })
            .then(response => {
                dispatch(fetchLeukogramChangeValuesSuccess(response.data.leukogram_change.results));
            })
            .catch(err => {
                console.log(err);
            })
    };
};