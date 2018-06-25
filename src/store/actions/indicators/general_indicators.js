import axios from '../../../axios';
import * as actionTypes from '../actionTypes';

//1
//gender
export const fetchGenderSuccess = (gender) => {
    return {
        type: actionTypes.FETCH_GENDER_SUCCESS,
        gender: gender,
    };
};

export const fetchGender = (department, year) => {
    return dispatch => {
        axios.get('charts/gender/' + department + '/' + year)
            .then(response => {
                dispatch(fetchGenderSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//age
export const fetchAgeSuccess = (age) => {
    return {
        type: actionTypes.FETCH_AGE_SUCCESS,
        age: age
    }
};

export const fetchAge = (department, year) => {
    return dispatch => {
        axios.get('charts/ages/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAgeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//marital
export const fetchMaritalSuccess = (marital) => {
    return {
        type: actionTypes.FETCH_MARITAL_SUCCESS,
        marital: marital
    }
};

export const fetchMaritalStatus = (department, year) => {
    return dispatch => {
        axios.get('charts/marital/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMaritalSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//academic
export const fetchAcademicSuccess = (academic) => {
    return {
        type: actionTypes.FETCH_ACADEMIC_SUCCESS,
        academic: academic
    }
};

export const fetchAcademic = (department, year) => {
    return dispatch => {
        axios.get('charts/academic/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAcademicSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//2
//smoker status
export const fetchSmokerStatusSuccess = (smoker_status) => {
    return {
        type: actionTypes.FETCH_SMOKER_STATUS_SUCCESS,
        smoker_status: smoker_status
    }
};

export const fetchSmokerStatus = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_status/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerStatusSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//smoker frequencie
export const fetchSmokerFrequencieSuccess = (smoker_frequencie) => {
    return {
        type: actionTypes.FETCH_SMOKER_FREQUENCIES_SUCCESS,
        smoker_frequencie: smoker_frequencie
    }
};

export const fetchSmokerFrequencie = (department, year) => {
    return dispatch => {
        axios.get('charts/smoker_frequencies/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerFrequencieSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//smoker number
export const fetchSmokerNumberSuccess = (smoker_number) => {
    return {
        type: actionTypes.FETCH_SMOKER_NUMBER_SUCCESS,
        smoker_number: smoker_number
    }
};

export const fetchSmokerNumber = (department, year) => {
    return dispatch => {
        axios.get('charts/weekly_number/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSmokerNumberSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//health opinions
export const fetchHealthOpinionsSuccess = (health_opinions) => {
    return {
        type: actionTypes.FETCH_HEALTH_OPINIONS_SUCCESS,
        health_opinions: health_opinions
    }
};

export const fetchHealthOpinions = (department, year) => {
    return dispatch => {
        axios.get('charts/health_opinion/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHealthOpinionsSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//weight
export const fetchWeightSuccess = (weight) => {
    return {
        type: actionTypes.FETCH_WEIGHT_SUCCESS,
        weight: weight
    }
};

export const fetchWeight = (department, year) => {
    return dispatch => {
        axios.get('charts/weight/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWeightSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//height
export const fetchHeightSuccess = (height) => {
    return {
        type: actionTypes.FETCH_HEIGHT_SUCCESS,
        height: height
    }
};

export const fetchHeight = (department, year) => {
    return dispatch => {
        axios.get('charts/height/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHeightSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//3
//has chronic
export const fetchHasChronicSuccess = (has_chronic) => {
    return {
        type: actionTypes.FETCH_HAS_CHRONIC_SUCCESS,
        has_chronic: has_chronic
    }
};

export const fetchHasChronic = (department, year) => {
    return dispatch => {
        axios.get('charts/has_chronic/' + department + '/' + year)
            .then(response => {
                dispatch(fetchHasChronicSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//chronic values
export const fetchChronicValuesSuccess = (chronic_values) => {
    return {
        type: actionTypes.FETCH_CHRONIC_VALUES_SUCCESS,
        chronic_values: chronic_values
    }
};

export const fetchChronicValues = (department, year) => {
    return dispatch => {
        axios.get('charts/chronic_values/' + department + '/' + year)
            .then(response => {
                dispatch(fetchChronicValuesSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//takes meds
export const fetchTakesMedsSuccess = (takes_meds) => {
    return {
        type: actionTypes.FETCH_TAKES_MEDS_SUCCESS,
        takes_meds: takes_meds
    }
};

export const fetchTakesMeds = (department, year) => {
    return dispatch => {
        axios.get('charts/takes_meds/' + department + '/' + year)
            .then(response => {
                dispatch(fetchTakesMedsSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds number
export const fetchMedsNumberSuccess = (meds_number) => {
    return {
        type: actionTypes.FETCH_MEDS_NUMBER_SUCCESS,
        meds_number: meds_number
    }
};

export const fetchMedsNumber = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_number/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsNumberSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//meds value
export const fetchMedsValuesSuccess = (meds_values) => {
    return {
        type: actionTypes.FETCH_MEDS_VALUES_SUCCESS,
        meds_values: meds_values
    }
};

export const fetchMedsValues = (department, year) => {
    return dispatch => {
        axios.get('charts/meds_value/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMedsValuesSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain value
export const fetchPainValueSuccess = (pain_value) => {
    return {
        type: actionTypes.FETCH_PAIN_VALUE_SUCCESS,
        pain_value: pain_value
    }
};

export const fetchPainValue = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_value/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainValueSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//local pain
export const fetchLocalPainSuccess = (local_pain) => {
    return {
        type: actionTypes.FETCH_LOCAL_PAIN_SUCCESS,
        local_pain: local_pain
    }
};

export const fetchLocalPain = (department, year) => {
    return dispatch => {
        axios.get('charts/local_pain/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLocalPainSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pain scale
export const fetchPainScaleSuccess = (pain_scale) => {
    return {
        type: actionTypes.FETCH_PAIN_SCALE_SUCCESS,
        pain_scale: pain_scale
    }
};

export const fetchPainScale = (department, year) => {
    return dispatch => {
        axios.get('charts/pain_scale/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPainScaleSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//4
//meals
export const fetchMealsSuccess = (meals) => {
    return {
        type: actionTypes.FETCH_MEALS_SUCCESS,
        meals: meals
    }
};

export const fetchMeals = (department, year) => {
    return dispatch => {
        axios.get('charts/meals/' + department + '/' + year)
            .then(response => {
                dispatch(fetchMealsSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//breakfast
export const fetchBreakfastSuccess = (breakfast) => {
    return {
        type: actionTypes.FETCH_BREAKFAST_SUCCESS,
        breakfast: breakfast
    }
};

export const fetchBreakfast = (department, year) => {
    return dispatch => {
        axios.get('charts/breakfast/' + department + '/' + year)
            .then(response => {
                dispatch(fetchBreakfastSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fruits
export const fetchFruitsSuccess = (fruits) => {
    return {
        type: actionTypes.FETCH_FRUITS_SUCCESS,
        fruits: fruits
    }
};

export const fetchFruits = (department, year) => {
    return dispatch => {
        axios.get('charts/fruits/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFruitsSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//vegetables
export const fetchVegetablesSuccess = (vegetables) => {
    return {
        type: actionTypes.FETCH_VEGETABLES_SUCCESS,
        vegetables: vegetables
    }
};

export const fetchVegetables = (department, year) => {
    return dispatch => {
        axios.get('charts/vegetables/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVegetablesSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//sodas
export const fetchSodasSuccess = (sodas) => {
    return {
        type: actionTypes.FETCH_SODAS_SUCCESS,
        sodas: sodas
    }
};

export const fetchSodas = (department, year) => {
    return dispatch => {
        axios.get('charts/sodas/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSodasSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//fast food
export const fetchFastFoodSuccess = (fast_food) => {
    return {
        type: actionTypes.FETCH_FAST_FOOD_SUCCESS,
        fast_food: fast_food
    }
};

export const fetchFastFood = (department, year) => {
    return dispatch => {
        axios.get('charts/fastfood/' + department + '/' + year)
            .then(response => {
                dispatch(fetchFastFoodSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//alcohol
export const fetchAlcoholSuccess = (alcohol) => {
    return {
        type: actionTypes.FETCH_ALCOHOL_SUCCESS,
        alcohol: alcohol
    }
};

export const fetchAlcohol = (department, year) => {
    return dispatch => {
        axios.get('charts/alcohol/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAlcoholSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//beer
export const fetchBeerSuccess = (beer) => {
    return {
        type: actionTypes.FETCH_BEER_SUCCESS,
        beer: beer
    }
};

export const fetchBeer = (department, year) => {
    return dispatch => {
        axios.get('charts/beer/' + department + '/' + year)
            .then(response => {
                dispatch(fetchBeerSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//wine
export const fetchWineSuccess = (wine) => {
    return {
        type: actionTypes.FETCH_WINE_SUCCESS,
        wine: wine
    }
};

export const fetchWine = (department, year) => {
    return dispatch => {
        axios.get('charts/wine/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWineSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//spirit drinks
export const fetchSpiritDrinksSuccess = (spirit_drinks) => {
    return {
        type: actionTypes.FETCH_SPIRIT_DRINKS_SUCCESS,
        spirit_drinks: spirit_drinks
    }
};

export const fetchSpiritDrinks = (department, year) => {
    return dispatch => {
        axios.get('charts/spirit_drinks/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpiritDrinksSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//5
//physical activity
export const fetchPhysicalActivitySuccess = (physical_activity) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_SUCCESS,
        physical_activity: physical_activity
    }
};

export const fetchPhysicalActivity = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_activity/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalActivitySuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical activity values
export const fetchPhysicalValuesSuccess = (physical_values) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_ACTIVITY_VALUES_SUCCESS,
        physical_values: physical_values
    }
};

export const fetchPhysicalActivityValues = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_values/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalValuesSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//physical activity hours
export const fetchPhysicalHoursSuccess = (physical_hours) => {
    return {
        type: actionTypes.FETCH_PHYSICAL_HOURS_SUCCESS,
        physical_hours: physical_hours
    }
};

export const fetchPhysicalHours = (department, year) => {
    return dispatch => {
        axios.get('charts/physical_hours/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPhysicalHoursSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//walking and cycling
export const fetchWalkingCyclingSuccess = (walking_cycling) => {
    return {
        type: actionTypes.FETCH_WALKING_CYCLING_SUCCESS,
        walking_cycling: walking_cycling
    }
};

export const fetchWalkingCycling = (department, year) => {
    return dispatch => {
        axios.get('charts/walking_cycling/' + department + '/' + year)
            .then(response => {
                dispatch(fetchWalkingCyclingSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//6
//systolic blood pressure
export const fetchSbpSuccess = (sbp) => {
    return {
        type: actionTypes.FETCH_SBP_SUCCESS,
        sbp: sbp
    }
};

export const fetchSbp = (department, year) => {
    return dispatch => {
        axios.get('charts/sbp/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSbpSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//diastolic blood pressure
export const fetchDbpSuccess = (dbp) => {
    return {
        type: actionTypes.FETCH_DBP_SUCCESS,
        dbp: dbp
    }
};

export const fetchDbp = (department, year) => {
    return dispatch => {
        axios.get('charts/dbp/' + department + '/' + year)
            .then(response => {
                dispatch(fetchDbpSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//pulse
export const fetchPulseSuccess = (pulse) => {
    return {
        type: actionTypes.FETCH_PULSE_SUCCESS,
        pulse: pulse
    }
};

export const fetchPulse = (department, year) => {
    return dispatch => {
        axios.get('charts/pulse/' + department + '/' + year)
            .then(response => {
                dispatch(fetchPulseSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//uric acid
export const fetchUricAcidSuccess = (uric_acid) => {
    return {
        type: actionTypes.FETCH_URIC_ACID_SUCCESS,
        uric_acid: uric_acid
    }
};

export const fetchUricAcid = (department, year) => {
    return dispatch => {
        axios.get('charts/uric_acid/' + department + '/' + year)
            .then(response => {
                dispatch(fetchUricAcidSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//glucose
export const fetchGlucoseSuccess = (glucose) => {
    return {
        type: actionTypes.FETCH_GLUCOSE_SUCCESS,
        glucose: glucose
    }
};

export const fetchGlucose = (department, year) => {
    return dispatch => {
        axios.get('charts/glucose/' + department + '/' + year)
            .then(response => {
                dispatch(fetchGlucoseSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//cholesterol
export const fetchCholesterolSuccess = (cholesterol) => {
    return {
        type: actionTypes.FETCH_CHOLESTEROL_SUCCESS,
        cholesterol: cholesterol
    }
};

export const fetchCholesterol = (department, year) => {
    return dispatch => {
        axios.get('charts/cholesterol/' + department + '/' + year)
            .then(response => {
                dispatch(fetchCholesterolSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//6.1
//spirometry
export const fetchSpirometrySuccess = (spirometry) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_SUCCESS,
        spirometry: spirometry
    }
};

export const fetchSpirometry = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometrySuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchSpirometryChangeSuccess = (spirometry_change) => {
    return {
        type: actionTypes.FETCH_SPIROMETRY_CHANGE_SUCCESS,
        spirometry_change: spirometry_change
    }
};

export const fetchSpirometryChange = (department, year) => {
    return dispatch => {
        axios.get('charts/spirometry_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchSpirometryChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//visual screening
export const fetchVisualScreeningSuccess = (visual_screening) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_SUCCESS,
        visual_screening: visual_screening
    }
};

export const fetchVisualScreening = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_screening/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualScreeningSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchVisualChangeSuccess = (visual_change) => {
    return {
        type: actionTypes.FETCH_VISUAL_SCREENING_CHANGE_SUCCESS,
        visual_change: visual_change
    }
};

export const fetchVisualChange = (department, year) => {
    return dispatch => {
        axios.get('charts/visual_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchVisualChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//auditory screening
export const fetchAuditoryScreeningSuccess = (auditory_screening) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_SUCCESS,
        auditory_screening: auditory_screening
    }
};

export const fetchAuditoryScreening = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_screening/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryScreeningSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchAuditoryChangeSuccess = (auditory_change) => {
    return {
        type: actionTypes.FETCH_AUDITORY_SCREENING_CHANGE_SUCCESS,
        auditory_change: auditory_change
    }
};

export const fetchAuditoryChange = (department, year) => {
    return dispatch => {
        axios.get('charts/auditory_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchAuditoryChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//ecg
export const fetchEcgSuccess = (ecg) => {
    return {
        type: actionTypes.FETCH_ECG_SUCCESS,
        ecg: ecg
    }
};

export const fetchEcg = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEcgChangeSuccess = (ecg_change) => {
    return {
        type: actionTypes.FETCH_ECG_CHANGE_SUCCESS,
        ecg_change: ecg_change
    }
};

export const fetchEcgChange = (department, year) => {
    return dispatch => {
        axios.get('charts/ecg_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEcgChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//eritrogram
export const fetchEritrogramSuccess = (eritrogram) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_SUCCESS,
        eritrogram: eritrogram
    }
};

export const fetchEritrogram = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchEritrogramChangeSuccess = (eritrogram_change) => {
    return {
        type: actionTypes.FETCH_ERITROGRAM_CHANGE_SUCCESS,
        eritrogram_change: eritrogram_change
    }
};

export const fetchEritrogramChange = (department, year) => {
    return dispatch => {
        axios.get('charts/eritrogram_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchEritrogramChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//leukogram
export const fetchLeukogramSuccess = (leukogram) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_SUCCESS,
        leukogram: leukogram
    }
};

export const fetchLeukogram = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchLeukogramChangeSuccess = (leukogram_change) => {
    return {
        type: actionTypes.FETCH_LEUKOGRAM_CHANGE_SUCCESS,
        leukogram_change: leukogram_change
    }
};

export const fetchLeukogramChange = (department, year) => {
    return dispatch => {
        axios.get('charts/leukogram_change/' + department + '/' + year)
            .then(response => {
                dispatch(fetchLeukogramChangeSuccess(response.data.message[0]));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

//homepage info values
export const fetchUsersNumberSuccess = (user_number) => {
    return {
        type: actionTypes.FETCH_REGISTERED_USERS_SUCCESS,
        user_number: user_number
    }
};

export const fetchUserNumber = () => {
    return dispatch => {
        axios.get('user/number/')
            .then(response => {
                dispatch(fetchUsersNumberSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchFormsNumberSuccess = (forms_number) => {
    return {
        type: actionTypes.FETCH_FORMS_NUMBER_SUCCESS,
        forms_number: forms_number
    }
};

export const fetchFormsNumber = () => {
    return dispatch => {
        axios.get('forms/number/')
            .then(response => {
                dispatch(fetchFormsNumberSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const fetchRegisteredFormsNumberSuccess = (registered_forms) => {
    return {
        type: actionTypes.FETCH_REGISTERED_FORMS_SUCCESS,
        registered_forms: registered_forms
    }
};

export const fetchRegisteredFormsNumber = () => {
    return dispatch => {
        axios.get('forms/registered_number/')
            .then(response => {
                dispatch(fetchRegisteredFormsNumberSuccess(response.data.message));
            })
            .catch(err => {
                console.log(err);
            })
    };
};