import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    gender: [],
    age: [],
    marital: [],
    academic: [],
    smoker_status: [],
    smoker_frequencie: [],
    smoker_number: [],
    health_opinions: [],
    weight: [],
    height: [],
    has_chronic: [],
    chronic_values: [],
    takes_meds: [],
    meds_number: [],
    meds_values: [],
    pain_value: [],
    local_pain: [],
    pain_scale: [],
    meals: [],
    breakfast: [],
    fruits: [],
    vegetables: [],
    sodas: [],
    fast_food: [],
    alcohol: [],
    beer: [],
    wine: [],
    spirit_drinks: [],
    physical_activity: [],
    physical_values: [],
    physical_hours: [],
    walking_cycling: [],
    sbp: [],
    dbp: [],
    pulse: [],
    uric_acid: [],
    glucose: [],
    cholesterol: [],
    spirometry: [],
    spirometry_change: [],
    visual_screening: [],
    visual_change: [],
    auditory_screening: [],
    auditory_change: [],
    ecg: [],
    ecg_change: [],
    eritrogram: [],
    eritrogram_change: [],
    leukogram: [],
    leukogram_change: [],
    user_number: "",
    forms_number: "",
    registered_forms: "",
};

//1
const fetchGenderSuccess = (state, action) => {
    return updateObject(state, {
        gender: action.gender
    });
};

const fetchAgeSuccess = (state, action) => {
    return updateObject(state, {
        age: action.age
    });
};

const fetchMaritalSuccess = (state, action) => {
    return updateObject(state, {
        marital: action.marital
    });
};

const fetchAcademicSuccess = (state, action) => {
    return updateObject(state, {
        academic: action.academic
    });
};

//2
const fetchSmokerStatusSuccess = (state, action) => {
    return updateObject(state, {
        smoker_status: action.smoker_status
    });
};

const fetchSmokerFrequencieSuccess = (state, action) => {
    return updateObject(state, {
        smoker_frequencie: action.smoker_frequencie
    });
};

const fetchSmokerNumberSuccess = (state, action) => {
    return updateObject(state, {
        smoker_number: action.smoker_number
    });
};

const fetchHealthOpinionsSuccess = (state, action) => {
    return updateObject(state, {
        health_opinions: action.health_opinions
    });
};

const fetchWeightSuccess = (state, action) => {
    return updateObject(state, {
        weight: action.weight
    });
};

const fetchHeightSuccess = (state, action) => {
    return updateObject(state, {
        height: action.height
    });
};

//3
const fetchHasChronicSuccess = (state, action) => {
    return updateObject(state, {
        has_chronic: action.has_chronic
    });
};

const fetchChronicValuesSuccess = (state, action) => {
    return updateObject(state, {
        chronic_values: action.chronic_values
    });
};

const fetchTakesMedsSuccess = (state, action) => {
    return updateObject(state, {
        takes_meds: action.takes_meds
    });
};

const fetchMedsNumberSuccess = (state, action) => {
    return updateObject(state, {
        meds_number: action.meds_number
    });
};

const fetchMedsValuesSuccess = (state, action) => {
    return updateObject(state, {
        meds_values: action.meds_values
    });
};

const fetchPainValueSuccess = (state, action) => {
    return updateObject(state, {
        pain_value: action.pain_value
    });
};

const fetchLocalPainSuccess = (state, action) => {
    return updateObject(state, {
        local_pain: action.local_pain
    });
};

const fetchPainScaleSuccess = (state, action) => {
    return updateObject(state, {
        pain_scale: action.pain_scale
    });
};

//4
const fetchMealsSuccess = (state, action) => {
    return updateObject(state, {
        meals: action.meals
    });
};

const fetchBreakfastSuccess = (state, action) => {
    return updateObject(state, {
        breakfast: action.breakfast
    });
};

const fetchFruitsSuccess = (state, action) => {
    return updateObject(state, {
        fruits: action.fruits
    });
};

const fetchVegetablesSuccess = (state, action) => {
    return updateObject(state, {
        vegetables: action.vegetables
    });
};

const fetchSodasSuccess = (state, action) => {
    return updateObject(state, {
        sodas: action.sodas
    });
};

const fetchFastFoodSuccess = (state, action) => {
    return updateObject(state, {
        fast_food: action.fast_food
    });
};

const fetchAlcoholSuccess = (state, action) => {
    return updateObject(state, {
        alcohol: action.alcohol
    });
};

const fetchBeerSuccess = (state, action) => {
    return updateObject(state, {
        beer: action.beer
    });
};

const fetchWineSuccess = (state, action) => {
    return updateObject(state, {
        wine: action.wine
    });
};

const fetchSpiritDrinksSuccess = (state, action) => {
    return updateObject(state, {
        spirit_drinks: action.spirit_drinks
    });
};

//5
const fetchPhysicalActivitySuccess = (state, action) => {
    return updateObject(state, {
        physical_activity: action.physical_activity
    });
};

const fetchPhysicalActivityValuesSuccess = (state, action) => {
    return updateObject(state, {
        physical_values: action.physical_values
    });
};

const fetchPhysicalHoursSuccess = (state, action) => {
    return updateObject(state, {
        physical_hours: action.physical_hours
    });
};

const fetchWalkingCyclingSuccess = (state, action) => {
    return updateObject(state, {
        walking_cycling: action.walking_cycling
    });
};

//6
const fetchSbpSuccess = (state, action) => {
    return updateObject(state, {
        sbp: action.sbp
    });
};

const fetchDbpSuccess = (state, action) => {
    return updateObject(state, {
        dbp: action.dbp
    });
};

const fetchPulseSuccess = (state, action) => {
    return updateObject(state, {
        pulse: action.pulse
    });
};

const fetchUricAcidSuccess = (state, action) => {
    return updateObject(state, {
        uric_acid: action.uric_acid
    });
};

const fetchGlucoseSuccess = (state, action) => {
    return updateObject(state, {
        glucose: action.glucose
    });
};

const fetchCholesterolSuccess = (state, action) => {
    return updateObject(state, {
        cholesterol: action.cholesterol
    });
};

//6.1
const fetchSpirometrySuccess = (state, action) => {
    return updateObject(state, {
        spirometry: action.spirometry
    });
};

const fetchSpirometryChangeSuccess = (state, action) => {
    return updateObject(state, {
        spirometry_change: action.spirometry_change
    });
};

const fetchVisualScreeningSuccess = (state, action) => {
    return updateObject(state, {
        visual_screening: action.visual_screening
    });
};

const fetchVisualChangeSuccess = (state, action) => {
    return updateObject(state, {
        visual_change: action.visual_change
    });
};

const fetchAuditoryScreeningSuccess = (state, action) => {
    return updateObject(state, {
        auditory_screening: action.auditory_screening
    });
};

const fetchAuditoryChangeSuccess = (state, action) => {
    return updateObject(state, {
        auditory_change: action.auditory_change
    });
};

const fetchEcgSuccess = (state, action) => {
    return updateObject(state, {
        ecg: action.ecg
    });
};

const fetchEcgChangeSuccess = (state, action) => {
    return updateObject(state, {
        ecg_change: action.ecg_change
    });
};

const fetchEritrogramSuccess = (state, action) => {
    return updateObject(state, {
        eritrogram: action.eritrogram
    });
};

const fetchEritrogramChangeSuccess = (state, action) => {
    return updateObject(state, {
        eritrogram_change: action.eritrogram_change
    });
};

const fetchLeukogramSuccess = (state, action) => {
    return updateObject(state, {
        leukogram: action.leukogram
    });
};

const fetchLeukogramChangeSuccess = (state, action) => {
    return updateObject(state, {
        leukogram_change: action.leukogram_change
    });
};

const fetchUserNumberSuccess = (state, action) => {
    return updateObject(state, {
        user_number: action.user_number
    });
};

const fetchFormsNumberSuccess = (state, action) => {
    return updateObject(state, {
        forms_number: action.forms_number
    });
};

const fetchRegisteredFormsNumberSuccess = (state, action) => {
    return updateObject(state, {
        registered_forms: action.registered_forms
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_SUCCESS: return fetchGenderSuccess(state, action);
        case actionTypes.FETCH_AGE_SUCCESS: return fetchAgeSuccess(state, action);
        case actionTypes.FETCH_MARITAL_SUCCESS: return fetchMaritalSuccess(state, action);
        case actionTypes.FETCH_ACADEMIC_SUCCESS: return fetchAcademicSuccess(state, action);
        case actionTypes.FETCH_SMOKER_STATUS_SUCCESS: return fetchSmokerStatusSuccess(state, action);
        case actionTypes.FETCH_SMOKER_FREQUENCIES_SUCCESS: return fetchSmokerFrequencieSuccess(state, action);
        case actionTypes.FETCH_SMOKER_NUMBER_SUCCESS: return fetchSmokerNumberSuccess(state, action);
        case actionTypes.FETCH_HEALTH_OPINIONS_SUCCESS: return fetchHealthOpinionsSuccess(state, action);
        case actionTypes.FETCH_WEIGHT_SUCCESS: return fetchWeightSuccess(state, action);
        case actionTypes.FETCH_HEIGHT_SUCCESS: return fetchHeightSuccess(state, action);
        case actionTypes.FETCH_HAS_CHRONIC_SUCCESS: return fetchHasChronicSuccess(state, action);
        case actionTypes.FETCH_CHRONIC_VALUES_SUCCESS: return fetchChronicValuesSuccess(state, action);
        case actionTypes.FETCH_TAKES_MEDS_SUCCESS: return fetchTakesMedsSuccess(state, action);
        case actionTypes.FETCH_MEDS_NUMBER_SUCCESS: return fetchMedsNumberSuccess(state, action);
        case actionTypes.FETCH_MEDS_VALUES_SUCCESS: return fetchMedsValuesSuccess(state, action);
        case actionTypes.FETCH_PAIN_VALUE_SUCCESS: return fetchPainValueSuccess(state, action);
        case actionTypes.FETCH_LOCAL_PAIN_SUCCESS: return fetchLocalPainSuccess(state, action);
        case actionTypes.FETCH_PAIN_SCALE_SUCCESS: return fetchPainScaleSuccess(state, action);
        case actionTypes.FETCH_MEALS_SUCCESS: return fetchMealsSuccess(state, action);
        case actionTypes.FETCH_BREAKFAST_SUCCESS: return fetchBreakfastSuccess(state, action);
        case actionTypes.FETCH_FRUITS_SUCCESS: return fetchFruitsSuccess(state, action);
        case actionTypes.FETCH_VEGETABLES_SUCCESS: return fetchVegetablesSuccess(state, action);
        case actionTypes.FETCH_SODAS_SUCCESS: return fetchSodasSuccess(state, action);
        case actionTypes.FETCH_FAST_FOOD_SUCCESS: return fetchFastFoodSuccess(state, action);
        case actionTypes.FETCH_ALCOHOL_SUCCESS: return fetchAlcoholSuccess(state, action);
        case actionTypes.FETCH_BEER_SUCCESS: return fetchBeerSuccess(state, action);
        case actionTypes.FETCH_WINE_SUCCESS: return fetchWineSuccess(state, action);
        case actionTypes.FETCH_SPIRIT_DRINKS_SUCCESS: return fetchSpiritDrinksSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_SUCCESS: return fetchPhysicalActivitySuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_SUCCESS: return fetchPhysicalActivityValuesSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_HOURS_SUCCESS: return fetchPhysicalHoursSuccess(state, action);
        case actionTypes.FETCH_WALKING_CYCLING_SUCCESS: return fetchWalkingCyclingSuccess(state, action);
        case actionTypes.FETCH_SBP_SUCCESS: return fetchSbpSuccess(state, action);
        case actionTypes.FETCH_DBP_SUCCESS: return fetchDbpSuccess(state, action);
        case actionTypes.FETCH_PULSE_SUCCESS: return fetchPulseSuccess(state, action);
        case actionTypes.FETCH_URIC_ACID_SUCCESS: return fetchUricAcidSuccess(state, action);
        case actionTypes.FETCH_GLUCOSE_SUCCESS: return fetchGlucoseSuccess(state, action);
        case actionTypes.FETCH_CHOLESTEROL_SUCCESS: return fetchCholesterolSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_SUCCESS: return fetchSpirometrySuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_CHANGE_SUCCESS: return fetchSpirometryChangeSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_SUCCESS: return fetchVisualScreeningSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_CHANGE_SUCCESS: return fetchVisualChangeSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_SUCCESS: return fetchAuditoryScreeningSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_SUCCESS: return fetchAuditoryChangeSuccess(state, action);
        case actionTypes.FETCH_ECG_SUCCESS: return fetchEcgSuccess(state, action);
        case actionTypes.FETCH_ECG_CHANGE_SUCCESS: return fetchEcgChangeSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_SUCCESS: return fetchEritrogramSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_CHANGE_SUCCESS: return fetchEritrogramChangeSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_SUCCESS: return fetchLeukogramSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_CHANGE_SUCCESS: return fetchLeukogramChangeSuccess(state, action);
        case actionTypes.FETCH_REGISTERED_USERS_SUCCESS: return fetchUserNumberSuccess(state, action);
        case actionTypes.FETCH_FORMS_NUMBER_SUCCESS: return fetchFormsNumberSuccess(state, action);
        case actionTypes.FETCH_REGISTERED_FORMS_SUCCESS: return fetchRegisteredFormsNumberSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;