import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

//1
//ages
export const fetchAgesByGenderSuccess = (age_gender) => {
    return {
        type: actionTypes.FETCH_AGE_BY_GENDER_SUCCESS,
        age_gender: age_gender,
    };
};

export const fetchAgesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/ages_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAgesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//marital status
export const fetchMaritalByGenderSuccess = (marital_gender) => {
    return {
        type: actionTypes.FETCH_MARITAL_BY_GENDER_SUCCESS,
        marital_gender: marital_gender,
    };
};

export const fetchMaritalByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/marital_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMaritalByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//academic levels
export const fetchAcademicByGenderSuccess = (academic_gender) => {
    return {
        type: actionTypes.FETCH_ACADEMIC_BY_GENDER_SUCCESS,
        academic_gender: academic_gender,
    };
};

export const fetchAcademicByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/academic_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAcademicByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//2
//smoker status
export const fetchSmokerStatusByGenderSuccess = (smokerStatus_gender) => {
    return {
        type: actionTypes.FETCH_SMOKER_STATUS_BY_GENDER_SUCCESS,
        smokerStatus_gender: smokerStatus_gender,
    };
};

export const fetchSmokerStatusByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_status_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerStatusByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//smoker frequencies
export const fetchSmokerFrequenciesByGenderSuccess = (smokerFrequencies_gender) => {
    return {
        type: actionTypes.FETCH_SMOKER_FREQUENCIES_BY_GENDER_SUCCESS,
        smokerFrequencies_gender: smokerFrequencies_gender,
    };
};

export const fetchSmokerFrequenciesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_frequencies_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerFrequenciesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//weekly number
export const fetchWeeklyNumberByGenderSuccess = (weeklyNumber_gender) => {
    return {
        type: actionTypes.FETCH_SMOKER_NUMBER_BY_GENDER_SUCCESS,
        weeklyNumber_gender: weeklyNumber_gender,
    };
};

export const fetchWeeklyNumberByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/weekly_number_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWeeklyNumberByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//health opinions
export const fetchHealthOpinionsByGenderSuccess = (healthOpinions_gender) => {
    return {
        type: actionTypes.FETCH_HEALTH_OPINIONS_BY_GENDER_SUCCESS,
        healthOpinions_gender: healthOpinions_gender,
    };
};

export const fetchHealthOpinionsByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/health_opinion_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHealthOpinionsByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//weight
export const fetchWeightByGenderSuccess = (weight_gender) => {
    return {
        type: actionTypes.FETCH_WEIGHT_BY_GENDER_SUCCESS,
        weight_gender: weight_gender,
    };
};

export const fetchWeightByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/weight_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWeightByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//height
export const fetchHeightByGenderSuccess = (height_gender) => {
    return {
        type: actionTypes.FETCH_HEIGHT_BY_GENDER_SUCCESS,
        height_gender: height_gender,
    };
};

export const fetchHeightByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/height_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHeightByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//3
//has chronic
export const fetchHasChronicByGenderSuccess = (hasChronic_gender) => {
    return {
        type: actionTypes.FETCH_HAS_CHRONIC_BY_GENDER_SUCCESS,
        hasChronic_gender: hasChronic_gender,
    };
};

export const fetchHasChronicByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/has_chronic_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHasChronicByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//chronic values
export const fetchChronicValuesByGenderSuccess = (chronicValues_gender) => {
    return {
        type: actionTypes.FETCH_CHRONIC_VALUES_BY_GENDER_SUCCESS,
        chronicValues_gender: chronicValues_gender,
    };
};

export const fetchChronicValuesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/chronic_values_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchChronicValuesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//takes meds
export const fetchTakesMedsByGenderSuccess = (takesMeds_gender) => {
    return {
        type: actionTypes.FETCH_TAKES_MEDS_BY_GENDER_SUCCESS,
        takesMeds_gender: takesMeds_gender,
    };
};

export const fetchTakesMedsByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/takes_meds_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchTakesMedsByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds number
export const fetchMedsNumberByGenderSuccess = (medsNumber_gender) => {
    return {
        type: actionTypes.FETCH_MEDS_NUMBER_BY_GENDER_SUCCESS,
        medsNumber_gender: medsNumber_gender,
    };
};

export const fetchMedsNumberByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_number_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsNumberByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds value
export const fetchMedsValuesByGenderSuccess = (medsValues_gender) => {
    return {
        type: actionTypes.FETCH_MEDS_VALUES_BY_GENDER_SUCCESS,
        medsValues_gender: medsValues_gender,
    };
};

export const fetchMedsValuesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_value_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsValuesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain value
export const fetchPainValueByGenderSuccess = (painValue_gender) => {
    return {
        type: actionTypes.FETCH_PAIN_VALUE_BY_GENDER_SUCCESS,
        painValue_gender: painValue_gender,
    };
};

export const fetchPainValueByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_value_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainValueByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//local pain
export const fetchLocalPainByGenderSuccess = (localPain_gender) => {
    return {
        type: actionTypes.FETCH_LOCAL_PAIN_BY_GENDER_SUCCESS,
        localPain_gender: localPain_gender,
    };
};

export const fetchLocalPainByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/local_pain_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLocalPainByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain scale
export const fetchPainScaleByGenderSuccess = (painScale_gender) => {
    return {
        type: actionTypes.FETCH_PAIN_SCALE_BY_GENDER_SUCCESS,
        painScale_gender: painScale_gender,
    };
};

export const fetchPainScaleByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_scale_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainScaleByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//4
//meals
export const fetchMealsByGenderSuccess = (meals_gender) => {
    return {
        type: actionTypes.FETCH_MEALS_BY_GENDER_SUCCESS,
        meals_gender: meals_gender,
    };
};

export const fetchMealsByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/meals_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMealsByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//breakfast
export const fetchBreakfastByGenderSuccess = (breakfast_gender) => {
    return {
        type: actionTypes.FETCH_BREAKFAST_BY_GENDER_SUCCESS,
        breakfast_gender: breakfast_gender,
    };
};

export const fetchBreakfastByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/breakfast_gender/' + department  + '/' + year)
            .then(response => {
                dispatch(fetchBreakfastByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fruits
export const fetchFruitsByGenderSuccess = (fruits_gender) => {
    return {
        type: actionTypes.FETCH_FRUITS_BY_GENDER_SUCCESS,
        fruits_gender: fruits_gender,
    };
};

export const fetchFruitsByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/fruits_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFruitsByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//vegetables
export const fetchVegetablesByGenderSuccess = (vegetables_gender) => {
    return {
        type: actionTypes.FETCH_VEGETABLES_BY_GENDER_SUCCESS,
        vegetables_gender: vegetables_gender,
    };
};

export const fetchVegetablesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/vegetables_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVegetablesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//sodas
export const fetchSodasByGenderSuccess = (sodas_gender) => {
    return {
        type: actionTypes.FETCH_SODAS_BY_GENDER_SUCCESS,
        sodas_gender: sodas_gender,
    };
};

export const fetchSodasByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/sodas_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSodasByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fast food
export const fetchFastFoodByGenderSuccess = (fastFood_gender) => {
    return {
        type: actionTypes.FETCH_FAST_FOOD_BY_GENDER_SUCCESS,
        fastFood_gender: fastFood_gender,
    };
};

export const fetchFastFoodByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/fastfood_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFastFoodByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//alcohol
export const fetchAlcoholByGenderSuccess = (alcohol_gender) => {
    return {
        type: actionTypes.FETCH_ALCOHOL_BY_GENDER_SUCCESS,
        alcohol_gender: alcohol_gender,
    };
};

export const fetchAlcoholByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/alcohol_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAlcoholByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//beer
export const fetchBeerByGenderSuccess = (beer_gender) => {
    return {
        type: actionTypes.FETCH_BEER_BY_GENDER_SUCCESS,
        beer_gender: beer_gender,
    };
};

export const fetchBeerByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/beer_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchBeerByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//wine
export const fetchWineByGenderSuccess = (wine_gender) => {
    return {
        type: actionTypes.FETCH_WINE_BY_GENDER_SUCCESS,
        wine_gender: wine_gender,
    };
};

export const fetchWineByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/wine_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWineByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//spirit drinks
export const fetchSpiritDrinksByGenderSuccess = (spiritDrinks_gender) => {
    return {
        type: actionTypes.FETCH_SPIRIT_DRINKS_BY_GENDER_SUCCESS,
        spiritDrinks_gender: spiritDrinks_gender,
    };
};

export const fetchSpiritDrinksByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/spirit_drinks_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpiritDrinksByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//5
//physical activity
export const fetchPhysicalActivityByGenderSuccess = (physicalActivity_gender) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_BY_GENDER_SUCCESS,
        physicalActivity_gender: physicalActivity_gender,
    };
};

export const fetchPhysicalActivityByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_activity_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalActivityByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical values
export const fetchPhysicalValuesByGenderSuccess = (physicalValues_gender) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_BY_GENDER_SUCCESS,
        physicalValues_gender: physicalValues_gender,
    };
};

export const fetchPhysicalValuesByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_values_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalValuesByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical hours
export const fetchPhysicalHoursByGenderSuccess = (physicalHours_gender) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_HOURS_BY_GENDER_SUCCESS,
        physicalHours_gender: physicalHours_gender,
    };
};

export const fetchPhysicalHoursByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_hours_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalHoursByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//walking cycling
export const fetchWalkingCyclingByGenderSuccess = (walkingCycling_gender) => {
    return {
        type: actionTypes.FETCH_WALKING_CYCLING_BY_GENDER_SUCCESS,
        walkingCycling_gender: walkingCycling_gender,
    };
};

export const fetchWalkingCyclingByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/walking_cycling_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWalkingCyclingByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//sbp
export const fetchSbpByGenderSuccess = (sbp_gender) => {
    return {
        type: actionTypes.FETCH_SBP_BY_GENDER_SUCCESS,
        sbp_gender: sbp_gender,
    };
};

export const fetchSbpByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/sbp_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSbpByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//dbp
export const fetchDbpByGenderSuccess = (dbp_gender) => {
    return {
        type: actionTypes.FETCH_DBP_BY_GENDER_SUCCESS,
        dbp_gender: dbp_gender,
    };
};

export const fetchDbpByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/dbp_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchDbpByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pulse
export const fetchPulseByGenderSuccess = (pulse_gender) => {
    return {
        type: actionTypes.FETCH_PULSE_BY_GENDER_SUCCESS,
        pulse_gender: pulse_gender,
    };
};

export const fetchPulseByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/pulse_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPulseByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//uric_acid
export const fetchUricAcidByGenderSuccess = (uricAcid_gender) => {
    return {
        type: actionTypes.FETCH_URIC_ACID_BY_GENDER_SUCCESS,
        uricAcid_gender: uricAcid_gender,
    };
};

export const fetchUricAcidByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/uric_acid_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchUricAcidByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//glucose
export const fetchGlucoseByGenderSuccess = (glucose_gender) => {
    return {
        type: actionTypes.FETCH_GLUCOSE_BY_GENDER_SUCCESS,
        glucose_gender: glucose_gender,
    };
};

export const fetchGlucoseByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/glucose_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchGlucoseByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//cholesterol
export const fetchCholesterolByGenderSuccess = (cholesterol_gender) => {
    return {
        type: actionTypes.FETCH_CHOLESTEROL_BY_GENDER_SUCCESS,
        cholesterol_gender: cholesterol_gender,
    };
};

export const fetchCholesterolByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/cholesterol_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchCholesterolByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//spirometry
export const fetchSpirometryByGenderSuccess = (spirometry_gender) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_BY_GENDER_SUCCESS,
        spirometry_gender: spirometry_gender,
    };
};

export const fetchSpirometryByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometryByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSpirometryChangeByGenderSuccess = (spirometryChange_gender) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_CHANGE_BY_GENDER_SUCCESS,
        spirometryChange_gender: spirometryChange_gender,
    };
};

export const fetchSpirometryChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometryChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//visual screening
export const fetchVisualScreeningByGenderSuccess = (visualScreening_gender) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_BY_GENDER_SUCCESS,
        visualScreening_gender: visualScreening_gender,
    };
};

export const fetchVisualScreeningByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_screening_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualScreeningByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchVisualScreeningChangeByGenderSuccess = (visualScreeningChange_gender) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_CHANGE_BY_GENDER_SUCCESS,
        visualScreeningChange_gender: visualScreeningChange_gender,
    };
};

export const fetchVisualScreeningChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_screening_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualScreeningChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//auditory screening
export const fetchAuditoryScreeningByGenderSuccess = (auditoryScreening_gender) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_BY_GENDER_SUCCESS,
        auditoryScreening_gender: auditoryScreening_gender,
    };
};

export const fetchAuditoryScreeningByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_screening_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryScreeningByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAuditoryScreeningChangeByGenderSuccess = (auditoryScreeningChange_gender) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_BY_GENDER_SUCCESS,
        auditoryScreeningChange_gender: auditoryScreeningChange_gender,
    };
};

export const fetchAuditoryScreeningChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_screening_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryScreeningChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//ecg
export const fetchEcgByGenderSuccess = (ecg_gender) => {
    return {
        type: actionTypes.FETCH_ECG_BY_GENDER_SUCCESS,
        ecg_gender: ecg_gender,
    };
};

export const fetchEcgByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEcgChangeByGenderSuccess = (ecgChange_gender) => {
    return {
        type: actionTypes.FETCH_ECG_CHANGE_BY_GENDER_SUCCESS,
        ecgChange_gender: ecgChange_gender,
    };
};

export const fetchEcgChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//eritrogram
export const fetchEritrogramByGenderSuccess = (eritrogram_gender) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_BY_GENDER_SUCCESS,
        eritrogram_gender: eritrogram_gender,
    };
};

export const fetchEritrogramByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEritrogramChangeByGenderSuccess = (eritrogramChange_gender) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_CHANGE_BY_GENDER_SUCCESS,
        eritrogramChange_gender: eritrogramChange_gender,
    };
};

export const fetchEritrogramChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//leukogram
export const fetchLeukogramByGenderSuccess = (leukogram_gender) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_BY_GENDER_SUCCESS,
        leukogram_gender: leukogram_gender,
    };
};

export const fetchLeukogramByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchLeukogramChangeByGenderSuccess = (leukogramChange_gender) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_CHANGE_BY_GENDER_SUCCESS,
        leukogramChange_gender: leukogramChange_gender,
    };
};

export const fetchLeukogramChangeByGender = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram_change_gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramChangeByGenderSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};