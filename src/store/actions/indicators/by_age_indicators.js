import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

//1
//gender
export const fetchGenderByAgeSuccess = (gender_age) => {
    return {
        type: actionTypes.FETCH_GENDER_BY_AGE_SUCCESS,
        gender_age: gender_age,
    };
};

export const fetchGenderByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/gender_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchGenderByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//marital status
export const fetchMaritalByAgeSuccess = (marital_age) => {
    return {
        type: actionTypes.FETCH_MARITAL_BY_AGE_SUCCESS,
        marital_age: marital_age,
    };
};

export const fetchMaritalByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/marital_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMaritalByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//academic levels
export const fetchAcademicByAgeSuccess = (academic_age) => {
    return {
        type: actionTypes.FETCH_ACADEMIC_BY_AGE_SUCCESS,
        academic_age: academic_age,
    };
};

export const fetchAcademicByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/academic_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAcademicByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//2
//smoker status
export const fetchSmokerStatusByAgeSuccess = (smokerStatus_age) => {
    return {
        type: actionTypes.FETCH_SMOKER_STATUS_BY_AGE_SUCCESS,
        smokerStatus_age: smokerStatus_age,
    };
};

export const fetchSmokerStatusByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_status_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerStatusByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//smoker frequencies
export const fetchSmokerFrequenciesByAgeSuccess = (smokerFrequencies_age) => {
    return {
        type: actionTypes.FETCH_SMOKER_FREQUENCIES_BY_AGE_SUCCESS,
        smokerFrequencies_age: smokerFrequencies_age,
    };
};

export const fetchSmokerFrequenciesByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_frequencies_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerFrequenciesByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//weekly number
export const fetchWeeklyNumberByAgeSuccess = (weeklyNumber_age) => {
    return {
        type: actionTypes.FETCH_SMOKER_NUMBER_BY_AGE_SUCCESS,
        weeklyNumber_age: weeklyNumber_age,
    };
};

export const fetchWeeklyNumberByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/weekly_number_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWeeklyNumberByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//health opinions
export const fetchHealthOpinionsByAgeSuccess = (healthOpinions_age) => {
    return {
        type: actionTypes.FETCH_HEALTH_OPINIONS_BY_AGE_SUCCESS,
        healthOpinions_age: healthOpinions_age,
    };
};

export const fetchHealthOpinionsByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/health_opinion_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHealthOpinionsByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//weight
export const fetchWeightByAgeSuccess = (weight_age) => {
    return {
        type: actionTypes.FETCH_WEIGHT_BY_AGE_SUCCESS,
        weight_age: weight_age,
    };
};

export const fetchWeightByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/weight_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWeightByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//height
export const fetchHeightByAgeSuccess = (height_age) => {
    return {
        type: actionTypes.FETCH_HEIGHT_BY_AGE_SUCCESS,
        height_age: height_age,
    };
};

export const fetchHeightByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/height_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHeightByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//3
//has chronic
export const fetchHasChronicByAgeSuccess = (hasChronic_age) => {
    return {
        type: actionTypes.FETCH_HAS_CHRONIC_BY_AGE_SUCCESS,
        hasChronic_age: hasChronic_age,
    };
};

export const fetchHasChronicByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/has_chronic_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHasChronicByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//chronic values
export const fetchChronicValuesByAgeSuccess = (chronicValues_age) => {
    return {
        type: actionTypes.FETCH_CHRONIC_VALUES_BY_AGE_SUCCESS,
        chronicValues_age: chronicValues_age,
    };
};

export const fetchChronicValuesByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/chronic_values_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchChronicValuesByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//takes meds
export const fetchTakesMedsByAgeSuccess = (takesMeds_age) => {
    return {
        type: actionTypes.FETCH_TAKES_MEDS_BY_AGE_SUCCESS,
        takesMeds_age: takesMeds_age,
    };
};

export const fetchTakesMedsByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/takes_meds_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchTakesMedsByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds number
export const fetchMedsNumberByAgeSuccess = (medsNumber_age) => {
    return {
        type: actionTypes.FETCH_MEDS_NUMBER_BY_AGE_SUCCESS,
        medsNumber_age: medsNumber_age,
    };
};

export const fetchMedsNumberByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_number_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsNumberByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds value
export const fetchMedsValuesByAgeSuccess = (medsValues_age) => {
    return {
        type: actionTypes.FETCH_MEDS_VALUES_BY_AGE_SUCCESS,
        medsValues_age: medsValues_age,
    };
};

export const fetchMedsValuesByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_value_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsValuesByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain value
export const fetchPainValueByAgeSuccess = (painValue_age) => {
    return {
        type: actionTypes.FETCH_PAIN_VALUE_BY_AGE_SUCCESS,
        painValue_age: painValue_age,
    };
};

export const fetchPainValueByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_value_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainValueByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//local pain
export const fetchLocalPainByAgeSuccess = (localPain_age) => {
    return {
        type: actionTypes.FETCH_LOCAL_PAIN_BY_AGE_SUCCESS,
        localPain_age: localPain_age,
    };
};

export const fetchLocalPainByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/local_pain_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLocalPainByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain scale
export const fetchPainScaleByAgeSuccess = (painScale_age) => {
    return {
        type: actionTypes.FETCH_PAIN_SCALE_BY_AGE_SUCCESS,
        painScale_age: painScale_age,
    };
};

export const fetchPainScaleByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_scale_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainScaleByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//4
//meals
export const fetchMealsByAgeSuccess = (meals_age) => {
    return {
        type: actionTypes.FETCH_MEALS_BY_AGE_SUCCESS,
        meals_age: meals_age,
    };
};

export const fetchMealsByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/meals_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMealsByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//breakfast
export const fetchBreakfastByAgeSuccess = (breakfast_age) => {
    return {
        type: actionTypes.FETCH_BREAKFAST_BY_AGE_SUCCESS,
        breakfast_age: breakfast_age,
    };
};

export const fetchBreakfastByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/breakfast_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchBreakfastByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fruits
export const fetchFruitsByAgeSuccess = (fruits_age) => {
    return {
        type: actionTypes.FETCH_FRUITS_BY_AGE_SUCCESS,
        fruits_age: fruits_age,
    };
};

export const fetchFruitsByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/fruits_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFruitsByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//vegetables
export const fetchVegetablesByAgeSuccess = (vegetables_age) => {
    return {
        type: actionTypes.FETCH_VEGETABLES_BY_AGE_SUCCESS,
        vegetables_age: vegetables_age,
    };
};

export const fetchVegetablesByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/vegetables_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVegetablesByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//sodas
export const fetchSodasByAgeSuccess = (sodas_age) => {
    return {
        type: actionTypes.FETCH_SODAS_BY_AGE_SUCCESS,
        sodas_age: sodas_age,
    };
};

export const fetchSodasByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/sodas_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSodasByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fast food
export const fetchFastFoodByAgeSuccess = (fastFood_age) => {
    return {
        type: actionTypes.FETCH_FAST_FOOD_BY_AGE_SUCCESS,
        fastFood_age: fastFood_age,
    };
};

export const fetchFastFoodByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/fastfood_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFastFoodByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//alcohol
export const fetchAlcoholByAgeSuccess = (alcohol_age) => {
    return {
        type: actionTypes.FETCH_ALCOHOL_BY_AGE_SUCCESS,
        alcohol_age: alcohol_age,
    };
};

export const fetchAlcoholByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/alcohol_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAlcoholByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//beer
export const fetchBeerByAgeSuccess = (beer_age) => {
    return {
        type: actionTypes.FETCH_BEER_BY_AGE_SUCCESS,
        beer_age: beer_age,
    };
};

export const fetchBeerByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/beer_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchBeerByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//wine
export const fetchWineByAgeSuccess = (wine_age) => {
    return {
        type: actionTypes.FETCH_WINE_BY_AGE_SUCCESS,
        wine_age: wine_age,
    };
};

export const fetchWineByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/wine_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWineByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//spirit drinks
export const fetchSpiritDrinksByAgeSuccess = (spiritDrinks_age) => {
    return {
        type: actionTypes.FETCH_SPIRIT_DRINKS_BY_AGE_SUCCESS,
        spiritDrinks_age: spiritDrinks_age,
    };
};

export const fetchSpiritDrinksByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/spirit_drinks_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpiritDrinksByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//5
//physical activity
export const fetchPhysicalActivityByAgeSuccess = (physicalActivity_age) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_BY_AGE_SUCCESS,
        physicalActivity_age: physicalActivity_age,
    };
};

export const fetchPhysicalActivityByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_activity_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalActivityByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical values
export const fetchPhysicalValuesByAgeSuccess = (physicalValues_age) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_BY_AGE_SUCCESS,
        physicalValues_age: physicalValues_age,
    };
};

export const fetchPhysicalValuesByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_values_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalValuesByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical hours
export const fetchPhysicalHoursByAgeSuccess = (physicalHours_age) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_HOURS_BY_AGE_SUCCESS,
        physicalHours_age: physicalHours_age,
    };
};

export const fetchPhysicalHoursByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_hours_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalHoursByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//walking cycling
export const fetchWalkingCyclingByAgeSuccess = (walkingCycling_age) => {
    return {
        type: actionTypes.FETCH_WALKING_CYCLING_BY_AGE_SUCCESS,
        walkingCycling_age: walkingCycling_age,
    };
};

export const fetchWalkingCyclingByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/walking_cycling_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWalkingCyclingByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//sbp
export const fetchSbpByAgeSuccess = (sbp_age) => {
    return {
        type: actionTypes.FETCH_SBP_BY_AGE_SUCCESS,
        sbp_age: sbp_age,
    };
};

export const fetchSbpByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/sbp_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSbpByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//dbp
export const fetchDbpByAgeSuccess = (dbp_age) => {
    return {
        type: actionTypes.FETCH_DBP_BY_AGE_SUCCESS,
        dbp_age: dbp_age,
    };
};

export const fetchDbpByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/dbp_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchDbpByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pulse
export const fetchPulseByAgeSuccess = (pulse_age) => {
    return {
        type: actionTypes.FETCH_PULSE_BY_AGE_SUCCESS,
        pulse_age: pulse_age,
    };
};

export const fetchPulseByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/pulse_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPulseByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//uric_acid
export const fetchUricAcidByAgeSuccess = (uricAcid_age) => {
    return {
        type: actionTypes.FETCH_URIC_ACID_BY_AGE_SUCCESS,
        uricAcid_age: uricAcid_age,
    };
};

export const fetchUricAcidByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/uric_acid_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchUricAcidByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//glucose
export const fetchGlucoseByAgeSuccess = (glucose_age) => {
    return {
        type: actionTypes.FETCH_GLUCOSE_BY_AGE_SUCCESS,
        glucose_age: glucose_age,
    };
};

export const fetchGlucoseByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/glucose_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchGlucoseByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//cholesterol
export const fetchCholesterolByAgeSuccess = (cholesterol_age) => {
    return {
        type: actionTypes.FETCH_CHOLESTEROL_BY_AGE_SUCCESS,
        cholesterol_age: cholesterol_age,
    };
};

export const fetchCholesterolByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/cholesterol_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchCholesterolByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//spirometry
export const fetchSpirometryByAgeSuccess = (spirometry_age) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_BY_AGE_SUCCESS,
        spirometry_age: spirometry_age,
    };
};

export const fetchSpirometryByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometryByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSpirometryChangeByAgeSuccess = (spirometryChange_age) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_CHANGE_BY_AGE_SUCCESS,
        spirometryChange_age: spirometryChange_age,
    };
};

export const fetchSpirometryChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometryChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//visual screening
export const fetchVisualScreeningByAgeSuccess = (visualScreening_age) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_BY_AGE_SUCCESS,
        visualScreening_age: visualScreening_age,
    };
};

export const fetchVisualScreeningByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_screening_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualScreeningByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchVisualScreeningChangeByAgeSuccess = (visualScreeningChange_age) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_CHANGE_BY_AGE_SUCCESS,
        visualScreeningChange_age: visualScreeningChange_age,
    };
};

export const fetchVisualScreeningChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_screening_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualScreeningChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//auditory screening
export const fetchAuditoryScreeningByAgeSuccess = (auditoryScreening_age) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_BY_AGE_SUCCESS,
        auditoryScreening_age: auditoryScreening_age,
    };
};

export const fetchAuditoryScreeningByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_screening_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryScreeningByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAuditoryScreeningChangeByAgeSuccess = (auditoryScreeningChange_age) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_BY_AGE_SUCCESS,
        auditoryScreeningChange_age: auditoryScreeningChange_age,
    };
};

export const fetchAuditoryScreeningChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_screening_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryScreeningChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//ecg
export const fetchEcgByAgeSuccess = (ecg_age) => {
    return {
        type: actionTypes.FETCH_ECG_BY_AGE_SUCCESS,
        ecg_age: ecg_age,
    };
};

export const fetchEcgByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEcgChangeByAgeSuccess = (ecgChange_age) => {
    return {
        type: actionTypes.FETCH_ECG_CHANGE_BY_AGE_SUCCESS,
        ecgChange_age: ecgChange_age,
    };
};

export const fetchEcgChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//eritrogram
export const fetchEritrogramByAgeSuccess = (eritrogram_age) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_BY_AGE_SUCCESS,
        eritrogram_age: eritrogram_age,
    };
};

export const fetchEritrogramByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEritrogramChangeByAgeSuccess = (eritrogramChange_age) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_CHANGE_BY_AGE_SUCCESS,
        eritrogramChange_age: eritrogramChange_age,
    };
};

export const fetchEritrogramChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//leukogram
export const fetchLeukogramByAgeSuccess = (leukogram_age) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_BY_AGE_SUCCESS,
        leukogram_age: leukogram_age,
    };
};

export const fetchLeukogramByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchLeukogramChangeByAgeSuccess = (leukogramChange_age) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_CHANGE_BY_AGE_SUCCESS,
        leukogramChange_age: leukogramChange_age,
    };
};

export const fetchLeukogramChangeByAge = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram_change_age/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramChangeByAgeSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};