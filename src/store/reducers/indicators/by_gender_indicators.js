import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const initialState = {
    age_gender: [],
    marital_gender: [],
    academic_gender: [],
    smokerStatus_gender: [],
    smokerFrequencies_gender: [],
    weeklyNumber_gender: [],
    healthOpinions_gender: [],
    weight_gender: [],
    height_gender: [],
    hasChronic_gender: [],
    chronicValues_gender: [],
    takesMeds_gender: [],
    medsNumber_gender: [],
    medsValues_gender: [],
    painValue_gender: [],
    localPain_gender: [],
    painScale_gender: [],
    meals_gender: [],
    breakfast_gender: [],
    fruits_gender: [],
    vegetables_gender: [],
    sodas_gender: [],
    fastFood_gender: [],
    alcohol_gender: [],
    beer_gender: [],
    wine_gender: [],
    spiritDrinks_gender: [],
    physicalActivity_gender: [],
    physicalValues_gender: [],
    physicalHours_gender: [],
    walkingCycling_gender: [],
    sbp_gender: [],
    dbp_gender: [],
    pulse_gender: [],
    uricAcid_gender: [],
    glucose_gender: [],
    cholesterol_gender: [],
    spirometry_gender: [],
    visualScreening_gender: [],
    auditoryScreening_gender: [],
    ecg_gender: [],
    eritrogram_gender: [],
    leukogram_gender: [],
    spirometryChange_gender: [],
    visualScreeningChange_gender: [],
    auditoryScreeningChange_gender: [],
    ecgChange_gender: [],
    eritrogramChange_gender: [],
    leukogramChange_gender: []
};

//1
const fetchAgesByGenderSuccess = (state, action) => {
    return updateObject(state, {
        age_gender: action.age_gender
    });
};

const fetchMaritalByGenderSuccess = (state, action) => {
    return updateObject(state, {
        marital_gender: action.marital_gender
    });
};

const fetchAcademicByGenderSuccess = (state, action) => {
    return updateObject(state, {
        academic_gender: action.academic_gender
    });
};

const fetchSmokerStatusByGenderSuccess = (state, action) => {
    return updateObject(state, {
        smokerStatus_gender: action.smokerStatus_gender
    });
};

const fetchSmokerFrequencieByGenderSuccess = (state, action) => {
    return updateObject(state, {
        smokerFrequencies_gender: action.smokerFrequencies_gender
    });
};

const fetchWeeklyNumberByGenderSuccess = (state, action) => {
    return updateObject(state, {
        weeklyNumber_gender: action.weeklyNumber_gender
    });
};

const fetchHealthOpinionsByGenderSuccess = (state, action) => {
    return updateObject(state, {
        healthOpinions_gender: action.healthOpinions_gender
    });
};

const fetchWeightByGenderSuccess = (state, action) => {
    return updateObject(state, {
        weight_gender: action.weight_gender
    });
};

const fetchHeightByGenderSuccess = (state, action) => {
    return updateObject(state, {
        height_gender: action.height_gender
    });
};

const fetchHasChronicByGenderSuccess = (state, action) => {
    return updateObject(state, {
        hasChronic_gender: action.hasChronic_gender
    });
};

const fetchChronicValuesByGenderSuccess = (state, action) => {
    return updateObject(state, {
        chronicValues_gender: action.chronicValues_gender
    });
};

const fetchTakesMedsByGenderSuccess = (state, action) => {
    return updateObject(state, {
        takesMeds_gender: action.takesMeds_gender
    });
};

const fetchMedsNumberByGenderSuccess = (state, action) => {
    return updateObject(state, {
        medsNumber_gender: action.medsNumber_gender
    });
};

const fetchMedsValuesByGenderSuccess = (state, action) => {
    return updateObject(state, {
        medsValues_gender: action.medsValues_gender
    });
};

const fetchPainValueByGenderSuccess = (state, action) => {
    return updateObject(state, {
        painValue_gender: action.painValue_gender
    });
};

const fetchLocalPainByGenderSuccess = (state, action) => {
    return updateObject(state, {
        localPain_gender: action.localPain_gender
    });
};

const fetchPainScaleByGenderSuccess = (state, action) => {
    return updateObject(state, {
        painScale_gender: action.painScale_gender
    });
};

const fetchMealsByGenderSuccess = (state, action) => {
    return updateObject(state, {
        meals_gender: action.meals_gender
    });
};

const fetchBreakfastByGenderSuccess = (state, action) => {
    return updateObject(state, {
        breakfast_gender: action.breakfast_gender
    });
};

const fetchFruitsByGenderSuccess = (state, action) => {
    return updateObject(state, {
        fruits_gender: action.fruits_gender
    });
};

const fetchVegetablesByGenderSuccess = (state, action) => {
    return updateObject(state, {
        vegetables_gender: action.vegetables_gender
    });
};

const fetchSodasByGenderSuccess = (state, action) => {
    return updateObject(state, {
        sodas_gender: action.sodas_gender
    });
};

const fetchFastFoodByGenderSuccess = (state, action) => {
    return updateObject(state, {
        fastFood_gender: action.fastFood_gender
    });
};

const fetchAlcoholByGenderSuccess = (state, action) => {
    return updateObject(state, {
        alcohol_gender: action.alcohol_gender
    });
};

const fetchBeerByGenderSuccess = (state, action) => {
    return updateObject(state, {
        beer_gender: action.beer_gender
    });
};

const fetchWineByGenderSuccess = (state, action) => {
    return updateObject(state, {
        wine_gender: action.wine_gender
    });
};

const fetchSpiritDrinksByGenderSuccess = (state, action) => {
    return updateObject(state, {
        spiritDrinks_gender: action.spiritDrinks_gender
    });
};

const fetchPhysicalActivityByGenderSuccess = (state, action) => {
    return updateObject(state, {
        physicalActivity_gender: action.physicalActivity_gender
    });
};

const fetchPhysicalValuesByGenderSuccess = (state, action) => {
    return updateObject(state, {
        physicalValues_gender: action.physicalValues_gender
    });
};

const fetchPhysicalHoursByGenderSuccess = (state, action) => {
    return updateObject(state, {
        physicalHours_gender: action.physicalHours_gender
    });
};

const fetchWalkingCyclingByGenderSuccess = (state, action) => {
    return updateObject(state, {
        walkingCycling_gender: action.walkingCycling_gender
    });
};

const fetchSbpByGenderSuccess = (state, action) => {
    return updateObject(state, {
        sbp_gender: action.sbp_gender
    });
};

const fetchDbpByGenderSuccess = (state, action) => {
    return updateObject(state, {
        dbp_gender: action.dbp_gender
    });
};

const fetchPulseByGenderSuccess = (state, action) => {
    return updateObject(state, {
        pulse_gender: action.pulse_gender
    });
};

const fetchUricAcidByGenderSuccess = (state, action) => {
    return updateObject(state, {
        uricAcid_gender: action.uricAcid_gender
    });
};

const fetchGlucoseByGenderSuccess = (state, action) => {
    return updateObject(state, {
        glucose_gender: action.glucose_gender
    });
};

const fetchCholesterolByGenderSuccess = (state, action) => {
    return updateObject(state, {
        cholesterol_gender: action.cholesterol_gender
    });
};

const fetchSpirometryByGenderSuccess = (state, action) => {
    return updateObject(state, {
        spirometry_gender: action.spirometry_gender
    });
};

const fetchVisualScreeningByGenderSuccess = (state, action) => {
    return updateObject(state, {
        visualScreening_gender: action.visualScreening_gender
    });
};

const fetchAuditoryScreeningByGenderSuccess = (state, action) => {
    return updateObject(state, {
        auditoryScreening_gender: action.auditoryScreening_gender
    });
};

const fetchEcgByGenderSuccess = (state, action) => {
    return updateObject(state, {
        ecg_gender: action.ecg_gender
    });
};

const fetchEritrogramByGenderSuccess = (state, action) => {
    return updateObject(state, {
        eritrogram_gender: action.eritrogram_gender
    });
};

const fetchLeukogramByGenderSuccess = (state, action) => {
    return updateObject(state, {
        leukogram_gender: action.leukogram_gender
    });
};

const fetchSpirometryChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        spirometryChange_gender: action.spirometryChange_gender
    });
};

const fetchVisualScreeningChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        visualScreeningChange_gender: action.visualScreeningChange_gender
    });
};

const fetchAuditoryScreeningChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        auditoryScreeningChange_gender: action.auditoryScreeningChange_gender
    });
};

const fetchEcgChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        ecgChange_gender: action.ecgChange_gender
    });
};

const fetchEritrogramChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        eritrogramChange_gender: action.eritrogramChange_gender
    });
};

const fetchLeukogramChangeByGenderSuccess = (state, action) => {
    return updateObject(state, {
        leukogramChange_gender: action.leukogramChange_gender
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AGE_BY_GENDER_SUCCESS: return fetchAgesByGenderSuccess(state, action);
        case actionTypes.FETCH_MARITAL_BY_GENDER_SUCCESS: return fetchMaritalByGenderSuccess(state, action);
        case actionTypes.FETCH_ACADEMIC_BY_GENDER_SUCCESS: return fetchAcademicByGenderSuccess(state, action);
        case actionTypes.FETCH_SMOKER_STATUS_BY_GENDER_SUCCESS: return fetchSmokerStatusByGenderSuccess(state, action);
        case actionTypes.FETCH_SMOKER_FREQUENCIES_BY_GENDER_SUCCESS: return fetchSmokerFrequencieByGenderSuccess(state, action);
        case actionTypes.FETCH_SMOKER_NUMBER_BY_GENDER_SUCCESS: return fetchWeeklyNumberByGenderSuccess(state, action);
        case actionTypes.FETCH_HEALTH_OPINIONS_BY_GENDER_SUCCESS: return fetchHealthOpinionsByGenderSuccess(state, action);
        case actionTypes.FETCH_WEIGHT_BY_GENDER_SUCCESS: return fetchWeightByGenderSuccess(state, action);
        case actionTypes.FETCH_HEIGHT_BY_GENDER_SUCCESS: return fetchHeightByGenderSuccess(state, action);
        case actionTypes.FETCH_HAS_CHRONIC_BY_GENDER_SUCCESS: return fetchHasChronicByGenderSuccess(state, action);
        case actionTypes.FETCH_CHRONIC_VALUES_BY_GENDER_SUCCESS: return fetchChronicValuesByGenderSuccess(state, action);
        case actionTypes.FETCH_TAKES_MEDS_BY_GENDER_SUCCESS: return fetchTakesMedsByGenderSuccess(state, action);
        case actionTypes.FETCH_MEDS_NUMBER_BY_GENDER_SUCCESS: return fetchMedsNumberByGenderSuccess(state, action);
        case actionTypes.FETCH_MEDS_VALUES_BY_GENDER_SUCCESS: return fetchMedsValuesByGenderSuccess(state, action);
        case actionTypes.FETCH_PAIN_VALUE_BY_GENDER_SUCCESS: return fetchPainValueByGenderSuccess(state, action);
        case actionTypes.FETCH_LOCAL_PAIN_BY_GENDER_SUCCESS: return fetchLocalPainByGenderSuccess(state, action);
        case actionTypes.FETCH_PAIN_SCALE_BY_GENDER_SUCCESS: return fetchPainScaleByGenderSuccess(state, action);
        case actionTypes.FETCH_MEALS_BY_GENDER_SUCCESS: return fetchMealsByGenderSuccess(state, action);
        case actionTypes.FETCH_BREAKFAST_BY_GENDER_SUCCESS: return fetchBreakfastByGenderSuccess(state, action);
        case actionTypes.FETCH_FRUITS_BY_GENDER_SUCCESS: return fetchFruitsByGenderSuccess(state, action);
        case actionTypes.FETCH_VEGETABLES_BY_GENDER_SUCCESS: return fetchVegetablesByGenderSuccess(state, action);
        case actionTypes.FETCH_SODAS_BY_GENDER_SUCCESS: return fetchSodasByGenderSuccess(state, action);
        case actionTypes.FETCH_FAST_FOOD_BY_GENDER_SUCCESS: return fetchFastFoodByGenderSuccess(state, action);
        case actionTypes.FETCH_ALCOHOL_BY_GENDER_SUCCESS: return fetchAlcoholByGenderSuccess(state, action);
        case actionTypes.FETCH_BEER_BY_GENDER_SUCCESS: return fetchBeerByGenderSuccess(state, action);
        case actionTypes.FETCH_WINE_BY_GENDER_SUCCESS: return fetchWineByGenderSuccess(state, action);
        case actionTypes.FETCH_SPIRIT_DRINKS_BY_GENDER_SUCCESS: return fetchSpiritDrinksByGenderSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_BY_GENDER_SUCCESS: return fetchPhysicalActivityByGenderSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_BY_GENDER_SUCCESS: return fetchPhysicalValuesByGenderSuccess(state, action);
        case actionTypes.FETCH_PHYSICAL_HOURS_BY_GENDER_SUCCESS: return fetchPhysicalHoursByGenderSuccess(state, action);
        case actionTypes.FETCH_WALKING_CYCLING_BY_GENDER_SUCCESS: return fetchWalkingCyclingByGenderSuccess(state, action);
        case actionTypes.FETCH_SBP_BY_GENDER_SUCCESS: return fetchSbpByGenderSuccess(state, action);
        case actionTypes.FETCH_DBP_BY_GENDER_SUCCESS: return fetchDbpByGenderSuccess(state, action);
        case actionTypes.FETCH_PULSE_BY_GENDER_SUCCESS: return fetchPulseByGenderSuccess(state, action);
        case actionTypes.FETCH_URIC_ACID_BY_GENDER_SUCCESS: return fetchUricAcidByGenderSuccess(state, action);
        case actionTypes.FETCH_GLUCOSE_BY_GENDER_SUCCESS: return fetchGlucoseByGenderSuccess(state, action);
        case actionTypes.FETCH_CHOLESTEROL_BY_GENDER_SUCCESS: return fetchCholesterolByGenderSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_BY_GENDER_SUCCESS: return fetchSpirometryByGenderSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_BY_GENDER_SUCCESS: return fetchVisualScreeningByGenderSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_BY_GENDER_SUCCESS: return fetchAuditoryScreeningByGenderSuccess(state, action);
        case actionTypes.FETCH_ECG_BY_GENDER_SUCCESS: return fetchEcgByGenderSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_BY_GENDER_SUCCESS: return fetchEritrogramByGenderSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_BY_GENDER_SUCCESS: return fetchLeukogramByGenderSuccess(state, action);
        case actionTypes.FETCH_SPIROMETRY_CHANGE_BY_GENDER_SUCCESS: return fetchSpirometryChangeByGenderSuccess(state, action);
        case actionTypes.FETCH_VISUAL_SCREENING_CHANGE_BY_GENDER_SUCCESS: return fetchVisualScreeningChangeByGenderSuccess(state, action);
        case actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_BY_GENDER_SUCCESS: return fetchAuditoryScreeningChangeByGenderSuccess(state, action);
        case actionTypes.FETCH_ECG_CHANGE_BY_GENDER_SUCCESS: return fetchEcgChangeByGenderSuccess(state, action);
        case actionTypes.FETCH_ERITROGRAM_CHANGE_BY_GENDER_SUCCESS: return fetchEritrogramChangeByGenderSuccess(state, action);
        case actionTypes.FETCH_LEUKOGRAM_CHANGE_BY_GENDER_SUCCESS: return fetchLeukogramChangeByGenderSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;