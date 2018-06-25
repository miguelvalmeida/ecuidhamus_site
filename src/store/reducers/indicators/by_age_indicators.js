import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    gender_age: [],
    marital_age: [],
    academic_age: [],
    smokerStatus_age: [],
    smokerFrequencies_age: [],
    weeklyNumber_age: [],
    healthOpinions_age: [],
    weight_age: [],
    height_age: [],
    hasChronic_age: [],
    chronicValues_age: [],
    takesMeds_age: [],
    medsNumber_age: [],
    medsValues_age: [],
    painValue_age: [],
    localPain_age: [],
    painScale_age: [],
    meals_age: [],
    breakfast_age: [],
    fruits_age: [],
    vegetables_age: [],
    sodas_age: [],
    fastFood_age: [],
    alcohol_age: [],
    beer_age: [],
    wine_age: [],
    spiritDrinks_age: [],
    physicalActivity_age: [],
    physicalValues_age: [],
    physicalHours_age: [],
    walkingCycling_age: [],
    sbp_age: [],
    dbp_age: [],
    pulse_age: [],
    uricAcid_age: [],
    glucose_age: [],
    cholesterol_age: [],
    spirometry_age: [],
    visualScreening_age: [],
    auditoryScreening_age: [],
    ecg_age: [],
    eritrogram_age: [],
    leukogram_age: [],
    spirometryChange_age: [],
    visualScreeningChange_age: [],
    auditoryScreeningChange_age: [],
    ecgChange_age: [],
    eritrogramChange_age: [],
    leukogramChange_age: []
};

//1
const fetchGenderByAgeSuccess = (state, action) => {
    return updateObject(state, {
        gender_age: action.gender_age
    });
};

const fetchMaritalByAgeSuccess = (state, action) => {
    return updateObject(state, {
        marital_age: action.marital_age
    });
};

const fetchAcademicByAgeSuccess = (state, action) => {
    return updateObject(state, {
        academic_age: action.academic_age
    });
};

const fetchSmokerStatusByAgeSuccess = (state, action) => {
    return updateObject(state, {
        smokerStatus_age: action.smokerStatus_age
    });
};

const fetchSmokerFrequencieByAgeSuccess = (state, action) => {
    return updateObject(state, {
        smokerFrequencies_age: action.smokerFrequencies_age
    });
};

const fetchWeeklyNumberByAgeSuccess = (state, action) => {
    return updateObject(state, {
        weeklyNumber_age: action.weeklyNumber_age
    });
};

const fetchHealthOpinionsByAgeSuccess = (state, action) => {
    return updateObject(state, {
        healthOpinions_age: action.healthOpinions_age
    });
};

const fetchWeightByAgeSuccess = (state, action) => {
    return updateObject(state, {
        weight_age: action.weight_age
    });
};

const fetchHeightByAgeSuccess = (state, action) => {
    return updateObject(state, {
        height_age: action.height_age
    });
};

const fetchHasChronicByAgeSuccess = (state, action) => {
    return updateObject(state, {
        hasChronic_age: action.hasChronic_age
    });
};

const fetchChronicValuesByAgeSuccess = (state, action) => {
    return updateObject(state, {
        chronicValues_age: action.chronicValues_age
    });
};

const fetchTakesMedsByAgeSuccess = (state, action) => {
    return updateObject(state, {
        takesMeds_age: action.takesMeds_age
    });
};

const fetchMedsNumberByAgeSuccess = (state, action) => {
    return updateObject(state, {
        medsNumber_age: action.medsNumber_age
    });
};

const fetchMedsValuesByAgeSuccess = (state, action) => {
    return updateObject(state, {
        medsValues_age: action.medsValues_age
    });
};

const fetchPainValueByAgeSuccess = (state, action) => {
    return updateObject(state, {
        painValue_age: action.painValue_age
    });
};

const fetchLocalPainByAgeSuccess = (state, action) => {
    return updateObject(state, {
        localPain_age: action.localPain_age
    });
};

const fetchPainScaleByAgeSuccess = (state, action) => {
    return updateObject(state, {
        painScale_age: action.painScale_age
    });
};

const fetchMealsByAgeSuccess = (state, action) => {
    return updateObject(state, {
        meals_age: action.meals_age
    });
};

const fetchBreakfastByAgeSuccess = (state, action) => {
    return updateObject(state, {
        breakfast_age: action.breakfast_age
    });
};

const fetchFruitsByAgeSuccess = (state, action) => {
    return updateObject(state, {
        fruits_age: action.fruits_age
    });
};

const fetchVegetablesByAgeSuccess = (state, action) => {
    return updateObject(state, {
        vegetables_age: action.vegetables_age
    });
};

const fetchSodasByAgeSuccess = (state, action) => {
    return updateObject(state, {
        sodas_age: action.sodas_age
    });
};

const fetchFastFoodByAgeSuccess = (state, action) => {
    return updateObject(state, {
        fastFood_age: action.fastFood_age
    });
};

const fetchAlcoholByAgeSuccess = (state, action) => {
    return updateObject(state, {
        alcohol_age: action.alcohol_age
    });
};

const fetchBeerByAgeSuccess = (state, action) => {
    return updateObject(state, {
        beer_age: action.beer_age
    });
};

const fetchWineByAgeSuccess = (state, action) => {
    return updateObject(state, {
        wine_age: action.wine_age
    });
};

const fetchSpiritDrinksByAgeSuccess = (state, action) => {
    return updateObject(state, {
        spiritDrinks_age: action.spiritDrinks_age
    });
};

const fetchPhysicalActivityByAgeSuccess = (state, action) => {
    return updateObject(state, {
        physicalActivity_age: action.physicalActivity_age
    });
};

const fetchPhysicalValuesByAgeSuccess = (state, action) => {
    return updateObject(state, {
        physicalValues_age: action.physicalValues_age
    });
};

const fetchPhysicalHoursByAgeSuccess = (state, action) => {
    return updateObject(state, {
        physicalHours_age: action.physicalHours_age
    });
};

const fetchWalkingCyclingByAgeSuccess = (state, action) => {
    return updateObject(state, {
        walkingCycling_age: action.walkingCycling_age
    });
};

const fetchSbpByAgeSuccess = (state, action) => {
    return updateObject(state, {
        sbp_age: action.sbp_age
    });
};

const fetchDbpByAgeSuccess = (state, action) => {
    return updateObject(state, {
        dbp_age: action.dbp_age
    });
};

const fetchPulseByAgeSuccess = (state, action) => {
    return updateObject(state, {
        pulse_age: action.pulse_age
    });
};

const fetchUricAcidByAgeSuccess = (state, action) => {
    return updateObject(state, {
        uricAcid_age: action.uricAcid_age
    });
};

const fetchGlucoseByAgeSuccess = (state, action) => {
    return updateObject(state, {
        glucose_age: action.glucose_age
    });
};

const fetchCholesterolByAgeSuccess = (state, action) => {
    return updateObject(state, {
        cholesterol_age: action.cholesterol_age
    });
};

const fetchSpirometryByAgeSuccess = (state, action) => {
    return updateObject(state, {
        spirometry_age: action.spirometry_age
    });
};

const fetchVisualScreeningByAgeSuccess = (state, action) => {
    return updateObject(state, {
        visualScreening_age: action.visualScreening_age
    });
};

const fetchAuditoryScreeningByAgeSuccess = (state, action) => {
    return updateObject(state, {
        auditoryScreening_age: action.auditoryScreening_age
    });
};

const fetchEcgByAgeSuccess = (state, action) => {
    return updateObject(state, {
        ecg_age: action.ecg_age
    });
};

const fetchEritrogramByAgeSuccess = (state, action) => {
    return updateObject(state, {
        eritrogram_age: action.eritrogram_age
    });
};

const fetchLeukogramByAgeSuccess = (state, action) => {
    return updateObject(state, {
        leukogram_age: action.leukogram_age
    });
};

const fetchSpirometryChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        spirometryChange_age: action.spirometryChange_age
    });
};

const fetchVisualScreeningChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        visualScreeningChange_age: action.visualScreeningChange_age
    });
};

const fetchAuditoryScreeningChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        auditoryScreeningChange_age: action.auditoryScreeningChange_age
    });
};

const fetchEcgChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        ecgChange_age: action.ecgChange_age
    });
};

const fetchEritrogramChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        eritrogramChange_age: action.eritrogramChange_age
    });
};

const fetchLeukogramChangeByAgeSuccess = (state, action) => {
    return updateObject(state, {
        leukogramChange_age: action.leukogramChange_age
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_BY_AGE_SUCCESS: return fetchGenderByAgeSuccess(state, action);
        case actionTypes.FETCH_MARITAL_BY_AGE_SUCCESS: return fetchMaritalByAgeSuccess(state, action);
        case actionTypes.FETCH_ACADEMIC_BY_AGE_SUCCESS: return fetchAcademicByAgeSuccess(state, action);
        case actionTypes.FETCH_SMOKER_STATUS_BY_AGE_SUCCESS: return fetchSmokerStatusByAgeSuccess(state, action);
        case actionTypes.FETCH_SMOKER_FREQUENCIES_BY_AGE_SUCCESS: return fetchSmokerFrequencieByAgeSuccess(state, action);
        case actionTypes.FETCH_SMOKER_NUMBER_BY_AGE_SUCCESS: return fetchWeeklyNumberByAgeSuccess(state, action);
        case actionTypes.FETCH_HEALTH_OPINIONS_BY_AGE_SUCCESS: return fetchHealthOpinionsByAgeSuccess(state, action);
        case actionTypes.FETCH_WEIGHT_BY_AGE_SUCCESS: return fetchWeightByAgeSuccess(state, action);
        case actionTypes.FETCH_HEIGHT_BY_AGE_SUCCESS: return fetchHeightByAgeSuccess(state, action);
        case actionTypes.FETCH_HAS_CHRONIC_BY_AGE_SUCCESS: return fetchHasChronicByAgeSuccess(state, action);
        case actionTypes.FETCH_CHRONIC_VALUES_BY_AGE_SUCCESS: return fetchChronicValuesByAgeSuccess(state, action);
        case actionTypes.FETCH_TAKES_MEDS_BY_AGE_SUCCESS: return fetchTakesMedsByAgeSuccess(state, action);
        case actionTypes.FETCH_MEDS_NUMBER_BY_AGE_SUCCESS: return fetchMedsNumberByAgeSuccess(state, action);
        case actionTypes.FETCH_MEDS_VALUES_BY_AGE_SUCCESS: return fetchMedsValuesByAgeSuccess(state, action);
        case actionTypes.FETCH_PAIN_VALUE_BY_AGE_SUCCESS: return fetchPainValueByAgeSuccess(state, action);
        case actionTypes.FETCH_LOCAL_PAIN_BY_AGE_SUCCESS: return fetchLocalPainByAgeSuccess(state, action);
        case actionTypes.FETCH_PAIN_SCALE_BY_AGE_SUCCESS: return fetchPainScaleByAgeSuccess(state, action);
        case actionTypes.FETCH_MEALS_BY_AGE_SUCCESS: return fetchMealsByAgeSuccess(state, action);
        case actionTypes.FETCH_BREAKFAST_BY_AGE_SUCCESS: return fetchBreakfastByAgeSuccess(state, action);
        case actionTypes.FETCH_FRUITS_BY_AGE_SUCCESS: return fetchFruitsByAgeSuccess(state, action);
        case actionTypes.FETCH_VEGETABLES_BY_AGE_SUCCESS: return fetchVegetablesByAgeSuccess(state, action);
        case actionTypes.FETCH_SODAS_BY_AGE_SUCCESS: return fetchSodasByAgeSuccess(state, action);
        case actionTypes.FETCH_FAST_FOOD_BY_AGE_SUCCESS: return fetchFastFoodByAgeSuccess(state, action);
        case actionTypes.FETCH_ALCOHOL_BY_AGE_SUCCESS: return fetchAlcoholByAgeSuccess(state, action);
        case actionTypes.FETCH_BEER_BY_AGE_SUCCESS: return fetchBeerByAgeSuccess(state, action);
        case actionTypes.FETCH_WINE_BY_AGE_SUCCESS: return fetchWineByAgeSuccess(state, action);
        case actionTypes.FETCH_SPIRIT_DRINKS_BY_AGE_SUCCESS: return fetchSpiritDrinksByAgeSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_BY_AGE_SUCCESS: return fetchPhysicalActivityByAgeSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_BY_AGE_SUCCESS: return fetchPhysicalValuesByAgeSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_HOURS_BY_AGE_SUCCESS: return fetchPhysicalHoursByAgeSuccess(state, action);
        case actionTypes.FETCH_WALKING_CYCLING_BY_AGE_SUCCESS: return fetchWalkingCyclingByAgeSuccess(state, action);
        case actionTypes.FETCH_SBP_BY_AGE_SUCCESS: return fetchSbpByAgeSuccess(state, action);
        case actionTypes.FETCH_DBP_BY_AGE_SUCCESS: return fetchDbpByAgeSuccess(state, action);
        case actionTypes.FETCH_PULSE_BY_AGE_SUCCESS: return fetchPulseByAgeSuccess(state, action);
        case actionTypes.FETCH_URIC_ACID_BY_AGE_SUCCESS: return fetchUricAcidByAgeSuccess(state, action);
        case actionTypes.FETCH_GLUCOSE_BY_AGE_SUCCESS: return fetchGlucoseByAgeSuccess(state, action);
        case actionTypes.FETCH_CHOLESTEROL_BY_AGE_SUCCESS: return fetchCholesterolByAgeSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_BY_AGE_SUCCESS: return fetchSpirometryByAgeSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_BY_AGE_SUCCESS: return fetchVisualScreeningByAgeSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_BY_AGE_SUCCESS: return fetchAuditoryScreeningByAgeSuccess(state, action);
        case actionTypes.FETCH_ECG_BY_AGE_SUCCESS: return fetchEcgByAgeSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_BY_AGE_SUCCESS: return fetchEritrogramByAgeSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_BY_AGE_SUCCESS: return fetchLeukogramByAgeSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_CHANGE_BY_AGE_SUCCESS: return fetchSpirometryChangeByAgeSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_CHANGE_BY_AGE_SUCCESS: return fetchVisualScreeningChangeByAgeSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_BY_AGE_SUCCESS: return fetchAuditoryScreeningChangeByAgeSuccess(state, action);
        case actionTypes.FETCH_ECG_CHANGE_BY_AGE_SUCCESS: return fetchEcgChangeByAgeSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_CHANGE_BY_AGE_SUCCESS: return fetchEritrogramChangeByAgeSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_CHANGE_BY_AGE_SUCCESS: return fetchLeukogramChangeByAgeSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;