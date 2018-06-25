import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    departments: [],
    genderValues: [],
    ageValues: [],
    chartAgesValues: [],
    academicValues: [],
    maritalValues: [],
    smokerStatusValues: [],
    smokerFrequencieValues: [],
    smokerNumberValues: [],
    healthOpinionsValues: [],
    painValues: [],
    painScaleValues: [],
    mealsValues: [],
    breakfastValues: [],
    fruitValues: [],
    vegetablesValues: [],
    sodasValues: [],
    fastFoodValues: [],
    physicalHoursValues: [],
    walkingCyclingValues: [],
    dates: [],
    minYear: 0,
    maxYear: 0,
    chronicValues: [],
    medsValues: [],
    localPainValues: [],
    physicalActivityValues: [],
    spirometryChangeValues: [],
    visualChangeValues: [],
    auditoryChangeValues: [],
    ecgChangeValues: [],
    eritrogramChangeValues: [],
    leukogramChangeValues: []
};

const fetchDepartmentsSuccess = (state, action) => {
    return updateObject(state, {
        departments: action.departments
    });
};

const fetchGendersSuccess = (state, action) => {
    return updateObject(state, {
        genderValues: action.genderValues
    });
};

const fetchAgesSuccess = (state, action) => {
    return updateObject(state, {
        ageValues: action.ageValues
    });
};

const fetchChartAgesSuccess = (state, action) => {
    return updateObject(state, {
        chartAgesValues: action.chartAgesValues
    });
};

const fetchAcademicSuccess = (state, action) => {
    return updateObject(state, {
        academicValues: action.academicValues
    });
};

const fetchMaritalSuccess = (state, action) => {
    return updateObject(state, {
        maritalValues: action.maritalValues
    });
};

const fetchSmokerStatusSuccess = (state, action) => {
    return updateObject(state, {
        smokerStatusValues: action.smokerStatusValues
    });
};

const fetchSmokerFrequencieSuccess = (state, action) => {
    return updateObject(state, {
        smokerFrequencieValues: action.smokerFrequencieValues
    });
};

const fetchSmokerNumberSuccess = (state, action) => {
    return updateObject(state, {
        smokerNumberValues: action.smokerNumberValues
    });
};

const fetchHealthOpinionsSuccess = (state, action) => {
    return updateObject(state, {
        healthOpinionsValues: action.healthOpinionsValues
    });
};

const fetchPainValuesSuccess = (state, action) => {
    return updateObject(state, {
        painValues: action.painValues
    });
};

const fetchPainScaleValuesSuccess = (state, action) => {
    return updateObject(state, {
        painScaleValues: action.painScaleValues
    });
};

const fetchMealsValuesSuccess = (state, action) => {
    return updateObject(state, {
        mealsValues: action.mealsValues
    });
};

const fetchBreakfastValuesSuccess = (state, action) => {
    return updateObject(state, {
        breakfastValues: action.breakfastValues
    });
};

const fetchFruitsValuesSuccess = (state, action) => {
    return updateObject(state, {
        fruitValues: action.fruitValues
    });
};

const fetchVegetablesValuesSuccess = (state, action) => {
    return updateObject(state, {
        vegetablesValues: action.vegetablesValues
    });
};

const fetchSodasValuesSuccess = (state, action) => {
    return updateObject(state, {
        sodasValues: action.sodasValues
    });
};

const fetchFastFoodValuesSuccess = (state, action) => {
    return updateObject(state, {
        fastFoodValues: action.fastFoodValues
    });
};

const fetchPhysicalHoursValuesSuccess = (state, action) => {
    return updateObject(state, {
        physicalHoursValues: action.physicalHoursValues
    });
};

const fetchWalkingCyclingValuesSuccess = (state, action) => {
    return updateObject(state, {
        walkingCyclingValues: action.walkingCyclingValues
    });
};

const fetchDatesSuccess = (state, action) => {
    return updateObject(state, {
        dates: action.dates
    });
};

const fetchMinYearSuccess = (state, action) => {
    return updateObject(state, {
        minYear: action.minYear
    });
};

const fetchMaxYearSuccess = (state, action) => {
    return updateObject(state, {
        maxYear: action.maxYear
    });
};

const fetchChronicDiseaseValuesSuccess = (state, action) => {
    return updateObject(state, {
        chronicValues: action.chronicValues
    });
};

const fetchTakeMedsValuesSuccess = (state, action) => {
    return updateObject(state, {
        medsValues: action.medsValues
    });
};

const fetchLocalPainValuesSuccess = (state, action) => {
    return updateObject(state, {
        localPainValues: action.localPainValues
    });
};

const fetchPhysicalValuesSuccess = (state, action) => {
    return updateObject(state, {
        physicalActivityValues: action.physicalActivityValues
    });
};

const fetchSpirometryChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        spirometryChangeValues: action.spirometryChangeValues
    });
};

const fetchVisualChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        visualChangeValues: action.visualChangeValues
    });
};

const fetchAuditoryChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        auditoryChangeValues: action.auditoryChangeValues
    });
};

const fetchEcgChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        ecgChangeValues: action.ecgChangeValues
    });
};

const fetchEritrogramChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        eritrogramChangeValues: action.eritrogramChangeValues
    });
};

const fetchLeukogramChangeValuesSuccess = (state, action) => {
    return updateObject(state, {
        leukogramChangeValues: action.leukogramChangeValues
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DEPARTMENTS_VALUES_SUCCESS: return fetchDepartmentsSuccess(state, action);
        case actionTypes.FETCH_GENDER_VALUES_SUCCESS: return fetchGendersSuccess(state, action);
        case actionTypes.FETCH_AGE_VALUES_SUCCESS: return fetchAgesSuccess(state, action);
        case actionTypes.FETCH_CHART_AGES_VALUES_SUCCESS: return fetchChartAgesSuccess(state, action);
        case actionTypes.FETCH_ACADEMIC_VALUES_SUCCESS: return fetchAcademicSuccess(state, action);
        case actionTypes.FETCH_MARITAL_VALUES_SUCCESS: return fetchMaritalSuccess(state, action);
        case actionTypes.FETCH_SMOKER_STATUS_VALUES_SUCCESS: return fetchSmokerStatusSuccess(state, action);
        case actionTypes.FETCH_SMOKER_FREQUENCIES_VALUES_SUCCESS: return fetchSmokerFrequencieSuccess(state, action);
        case actionTypes.FETCH_SMOKER_NUMBER_VALUES_SUCCESS: return fetchSmokerNumberSuccess(state, action);
        case actionTypes.FETCH_HEALTH_OPINIONS_VALUES_SUCCESS: return fetchHealthOpinionsSuccess(state, action);
        case actionTypes.FETCH_PAIN_VALUE_VALUES_SUCCESS: return fetchPainValuesSuccess(state, action);
        case actionTypes.FETCH_PAIN_SCALE_VALUES_SUCCESS: return fetchPainScaleValuesSuccess(state, action);
        case actionTypes.FETCH_MEALS_VALUES_SUCCESS: return fetchMealsValuesSuccess(state, action);
        case actionTypes.FETCH_BREAKFAST_VALUES_SUCCESS: return fetchBreakfastValuesSuccess(state, action);
        case actionTypes.FETCH_FRUITS_VALUES_SUCCESS: return fetchFruitsValuesSuccess(state, action);
        case actionTypes.FETCH_VEGETABLES_VALUES_SUCCESS: return fetchVegetablesValuesSuccess(state, action);
        case actionTypes.FETCH_SODAS_VALUES_SUCCESS: return fetchSodasValuesSuccess(state, action);
        case actionTypes.FETCH_FAST_FOOD_VALUES_SUCCESS: return fetchFastFoodValuesSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_HOURS_VALUES_SUCCESS: return fetchPhysicalHoursValuesSuccess(state, action);
        case actionTypes.FETCH_WALKING_CYCLING_VALUES_SUCCESS: return fetchWalkingCyclingValuesSuccess(state, action);
        case actionTypes.FETCH_DATES_SUCCESS: return fetchDatesSuccess(state, action);
        case actionTypes.FETCH_MIN_YEAR_SUCCESS: return fetchMinYearSuccess(state, action);
        case actionTypes.FETCH_MAX_YEAR_SUCCESS: return fetchMaxYearSuccess(state, action);
        case actionTypes.FETCH_CHRONIC_DISEASE_VALUES_SUCCESS: return fetchChronicDiseaseValuesSuccess(state, action);
        case actionTypes.FETCH_TAKES_MEDS_VALUES_SUCCESS: return fetchTakeMedsValuesSuccess(state, action);
        case actionTypes.FETCH_LOCAL_PAIN_VALUES_SUCCESS: return fetchLocalPainValuesSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_VALUES_SUCCESS: return fetchPhysicalValuesSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_CHANGE_VALUES_SUCCESS: return fetchSpirometryChangeValuesSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_CHANGE_VALUES_SUCCESS: return fetchVisualChangeValuesSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_VALUES_SUCCESS: return fetchAuditoryChangeValuesSuccess(state, action);
        case actionTypes.FETCH_ECG_CHANGE_VALUES_SUCCESS: return fetchEcgChangeValuesSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_CHANGE_VALUES_SUCCESS: return fetchEritrogramChangeValuesSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_CHANGE_VALUES_SUCCESS: return fetchLeukogramChangeValuesSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;