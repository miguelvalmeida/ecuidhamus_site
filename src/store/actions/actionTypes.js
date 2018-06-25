//AUTH ACTIONTYPES
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_MSG_REMOVE = 'LOGIN_MSG_REMOVE';

export const RECOVER_PW_START = 'RECOVER_PW_START';
export const RECOVER_PW_SUCCESS = 'RECOVER_PW_SUCCESS';
export const RECOVER_PW_FAIL = 'RECOVER_PW_FAIL';
export const RECOVER_PW_MSG_REMOVE = 'RECOVER_PW_MSG_REMOVE';

export const LOGOUT = 'LOGOUT';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_MSG_REMOVE = 'REGISTER_MSG_REMOVE';

//CODES ACTIONTYPES
export const INSERT_CODE_START = 'INSERT_CODE_START';
export const INSERT_CODE_SUCCESS = 'INSERT_CODE_SUCCESS';
export const INSERT_CODE_FAIL = 'INSERT_CODE_FAIL';
export const INSERT_CODE_MSG_REMOVE = 'INSERT_CODE_MSG_REMOVE';

export const FETCH_CODES_START = 'FETCH_CODES_START';
export const FETCH_CODES_SUCCESS = 'FETCH_CODES_SUCCESS';
export const FETCH_CODES_FAIL = 'FETCH_CODES_FAIL';

export const FETCH_CODE_DATA_START = 'FETCH_CODE_DATA_START';
export const FETCH_CODE_DATA_SUCCESS = 'FETCH_CODE_DATA_SUCCESS';
export const FETCH_CODE_DATA_FAIL = 'FETCH_CODE_DATA_FAIL';
export const CODE_DATA_REMOVE_MESSAGE = 'CODE_DATA_REMOVE_MESSAGE';

export const DELETE_CODE_START = 'DELETE_CODE_START';
export const DELETE_CODE_SUCCESS = 'DELETE_CODE_SUCCESS';
export const DELETE_CODE_FAIL = 'DELETE_CODE_FAIL';
export const DELETE_CODE_MSG_REMOVE = 'DELETE_CODE_MSG_REMOVE';

export const FETCH_FORM_NULL_VALUES_START = 'FETCH_FORM_NULL_VALUES_START';
export const FETCH_FORM_NULL_VALUES_SUCCESS = 'FETCH_FORM_NULL_VALUES_SUCCESS';
export const FETCH_FORM_NULL_VALUES_FAIL = 'FETCH_FORM_NULL_VALUES_FAIL';
export const FORM_NULL_REMOVE_MESSAGE = 'FORN_NULL_REMOVE_MESSAGE';
export const FETCH_FORM_NULL_NUMBERS_SUCCESS = 'FETCH_FORM_NULL_NUMBERS_SUCCESS';

//LANGUAGE ACTIONTYPES
export const SET_LANGUAGE = 'SET_LANGUAGE';

//GENERAL INDICATORS ACTIONTYPES
//1
export const FETCH_GENDER_SUCCESS = 'FETCH_GENDER_SUCCESS';
export const FETCH_AGE_SUCCESS = 'FETCH_AGE_SUCCESS';
export const FETCH_MARITAL_SUCCESS = 'FETCH_MARITAL_SUCCESS';
export const FETCH_ACADEMIC_SUCCESS = 'FETCH_ACADEMIC_SUCCESS';
//2
export const FETCH_SMOKER_STATUS_SUCCESS = 'FETCH_SMOKER_STATUS_SUCCESS';
export const FETCH_SMOKER_FREQUENCIES_SUCCESS = 'FETCH_SMOKER_FREQUENCIES_SUCCESS';
export const FETCH_SMOKER_NUMBER_SUCCESS = 'FETCH_SMOKER_NUMBER_SUCCESS';
export const FETCH_HEALTH_OPINIONS_SUCCESS = 'FETCH_HEALTH_OPINIONS_SUCCESS';
export const FETCH_WEIGHT_SUCCESS = 'FETCH_WEIGHT_SUCCESS';
export const FETCH_HEIGHT_SUCCESS = 'FETCH_HEIGHT_SUCCESS';
//3
export const FETCH_HAS_CHRONIC_SUCCESS = 'FETCH_HAS_CHRONIC_SUCCESS';
export const FETCH_CHRONIC_VALUES_SUCCESS = 'FETCH_CHRONIC_VALUES_SUCCESS';
export const FETCH_TAKES_MEDS_SUCCESS = 'FETCH_TAKES_MEDS_SUCCESS';
export const FETCH_MEDS_NUMBER_SUCCESS = 'FETCH_MEDS_NUMBER_SUCCESS';
export const FETCH_MEDS_VALUES_SUCCESS = 'FETCH_MEDS_VALUES_SUCCESS';
export const FETCH_PAIN_VALUE_SUCCESS = 'FETCH_PAIN_VALUE_SUCCESS';
export const FETCH_LOCAL_PAIN_SUCCESS = 'FETCH_LOCAL_PAIN_SUCCESS';
export const FETCH_PAIN_SCALE_SUCCESS = 'FETCH_PAIN_SCALE_SUCCESS';
//4
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_BREAKFAST_SUCCESS = 'FETCH_BREAKFAST_SUCCESS';
export const FETCH_FRUITS_SUCCESS = 'FETCH_FRUITS_SUCCESS';
export const FETCH_VEGETABLES_SUCCESS = 'FETCH_VEGETABLES_SUCCESS';
export const FETCH_SODAS_SUCCESS = 'FETCH_SODAS_SUCCESS';
export const FETCH_FAST_FOOD_SUCCESS = 'FETCH_FAST_FOOD_SUCCESS';
export const FETCH_ALCOHOL_SUCCESS = 'FETCH_ALCOHOL_SUCCESS';
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_WINE_SUCCESS = 'FETCH_WINE_SUCCESS';
export const FETCH_SPIRIT_DRINKS_SUCCESS = 'FETCH_SPIRIT_DRINKS_SUCCESS';
//5
export const FETCH_PHYSICAL_ACTIVITY_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_SUCCESS';
export const FETCH_PHYSICAL_ACTIVITY_VALUES_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_VALUES_SUCCESS';
export const FETCH_PHYSICAL_HOURS_SUCCESS = 'FETCH_PHYSICAL_HOURS_SUCCESS';
export const FETCH_WALKING_CYCLING_SUCCESS = 'FETCH_WALKING_CYCLING_SUCCESS';
//6
export const FETCH_SBP_SUCCESS = 'FETCH_SBP_SUCCESS';
export const FETCH_DBP_SUCCESS = 'FETCH_DBP_SUCCESS';
export const FETCH_PULSE_SUCCESS = 'FETCH_PULSE_SUCCESS';
export const FETCH_URIC_ACID_SUCCESS = 'FETCH_URIC_ACID_SUCCESS';
export const FETCH_GLUCOSE_SUCCESS = 'FETCH_GLUCOSE_SUCCESS';
export const FETCH_CHOLESTEROL_SUCCESS = 'FETCH_CHOLESTEROL_SUCCESS';
//6.1
export const FETCH_SPIROMETRY_SUCCESS = 'FETCH_SPIROMETRY_SUCCESS';
export const FETCH_SPIROMETRY_CHANGE_SUCCESS = 'FETCH_SPIROMETRY_CHANGE_SUCCESS';
export const FETCH_VISUAL_SCREENING_SUCCESS = 'FETCH_VISUAL_SCREENING_SUCCESS';
export const FETCH_VISUAL_SCREENING_CHANGE_SUCCESS = 'FETCH_VISUAL_SCREENING_CHANGE_SUCCESS';
export const FETCH_AUDITORY_SCREENING_SUCCESS = 'FETCH_AUDITORY_SCREENING_SUCCESS';
export const FETCH_AUDITORY_SCREENING_CHANGE_SUCCESS = 'FETCH_AUDITORY_SCREENING_CHANGE_SUCCESS';
export const FETCH_ECG_SUCCESS = 'FETCH_ECG_SUCCESS';
export const FETCH_ECG_CHANGE_SUCCESS = 'FETCH_ECG_CHANGE_SUCCESS';
export const FETCH_ERITROGRAM_SUCCESS = 'FETCH_ERITROGRAM_SUCCESS';
export const FETCH_ERITROGRAM_CHANGE_SUCCESS = 'FETCH_ERITROGRAM_CHANGE_SUCCESS';
export const FETCH_LEUKOGRAM_SUCCESS = 'FETCH_LEUKOGRAM_SUCCESS';
export const FETCH_LEUKOGRAM_CHANGE_SUCCESS = 'FETCH_LEUKOGRAM_CHANGE_SUCCESS';


//PERSONAL INDICATORS ACTIONTYPES
export const FETCH_PERSONAL_WEIGHT_START = 'FETCH_PERSONAL_WEIGHT_START';
export const FETCH_PERSONAL_WEIGHT_SUCCESS = 'FETCH_PERSONAL_WEIGHT_SUCCESS';
export const FETCH_WEIGHT_SUM_SUCCESS = 'FETCH_WEIGHT_SUM_SUCCESS';
export const FETCH_DEP_WEIGHT_SUM_SUCCESS = 'FETCH_DEP_WEIGHT_SUM_SUCCESS';

export const FETCH_PERSONAL_SBP_SUCCESS = 'FETCH_PERSONAL_SBP_SUCCESS';
export const FETCH_SBP_SUM_SUCCESS = 'FETCH_SBP_SUM_SUCCESS';
export const FETCH_DEP_SBP_SUM_SUCCESS = 'FETCH_DEP_SBP_SUM_SUCCESS';

export const FETCH_PERSONAL_DBP_SUCCESS = 'FETCH_PERSONAL_DBP_SUCCESS';
export const FETCH_DBP_SUM_SUCCESS = 'FETCH_DBP_SUM_SUCCESS';
export const FETCH_DEP_DBP_SUM_SUCCESS = 'FETCH_DEP_DBP_SUM_SUCCESS';

export const FETCH_PERSONAL_PULSE_SUCCESS = 'FETCH_PERSONAL_PULSE_SUCCESS';
export const FETCH_PULSE_SUM_SUCCESS = 'FETCH_PULSE_SUM_SUCCESS';
export const FETCH_DEP_PULSE_SUM_SUCCESS = 'FETCH_DEP_PULSE_SUM_SUCCESS';

export const FETCH_PERSONAL_URIC_ACID_SUCCESS = 'FETCH_PERSONAL_URIC_ACID_SUCCESS';
export const FETCH_URIC_ACID_SUM_SUCCESS = 'FETCH_URIC_ACID_SUM_SUCCESS';
export const FETCH_DEP_URIC_ACID_SUM_SUCCESS = 'FETCH_DEP_URIC_ACID_SUM_SUCCESS';

export const FETCH_PERSONAL_GLUCOSE_SUCCESS = 'FETCH_PERSONAL_GLUCOSE_SUCCESS';
export const FETCH_GLUCOSE_SUM_SUCCESS = 'FETCH_GLUCOSE_SUM_SUCCESS';
export const FETCH_DEP_GLUCOSE_SUM_SUCCESS = 'FETCH_DEP_GLUCOSE_SUM_SUCCESS';

export const FETCH_PERSONAL_CHOLESTEROL_SUCCESS = 'FETCH_PERSONAL_CHOLESTEROL_SUCCESS';
export const FETCH_CHOLESTEROL_SUM_SUCCESS = 'FETCH_CHOLESTEROL_SUM_SUCCESS';
export const FETCH_DEP_CHOLESTEROL_SUM_SUCCESS = 'FETCH_DEP_CHOLESTEROL_SUM_SUCCESS';

//REFERENCE VALUES ACTIONTYPES
export const FETCH_DEPARTMENTS_VALUES_SUCCESS = 'FETCH_DEPARTMENTS_VALUES_SUCCESS';
export const FETCH_GENDER_VALUES_SUCCESS = 'FETCH_GENDER_VALUES_SUCCESS';
export const FETCH_AGE_VALUES_SUCCESS = 'FETCH_AGE_VALUES_SUCCESS';
export const FETCH_CHART_AGES_VALUES_SUCCESS = 'FETCH_CHART_AGES_VALUES_SUCCESS';
export const FETCH_ACADEMIC_VALUES_SUCCESS = 'FETCH_ACADEMIC_VALUES_SUCCESS';
export const FETCH_MARITAL_VALUES_SUCCESS = 'FETCH_MARITAL_VALUES_SUCCESS';
export const FETCH_SMOKER_STATUS_VALUES_SUCCESS = 'FETCH_SMOKER_STATUS_VALUES_SUCCESS';
export const FETCH_SMOKER_FREQUENCIES_VALUES_SUCCESS = 'FETCH_SMOKER_FREQUENCIES_VALUES_SUCCESS';
export const FETCH_SMOKER_NUMBER_VALUES_SUCCESS = 'FETCH_SMOKER_NUMBER_VALUES_SUCCESS';
export const FETCH_HEALTH_OPINIONS_VALUES_SUCCESS = 'FETCH_HEALTH_OPINIONS_VALUES_SUCCESS';
export const FETCH_PAIN_VALUE_VALUES_SUCCESS = 'FETCH_PAIN_VALUE_VALUES_SUCCESS';
export const FETCH_PAIN_SCALE_VALUES_SUCCESS = 'FETCH_PAIN_SCALE_VALUES_SUCCESS';
export const FETCH_MEALS_VALUES_SUCCESS = 'FETCH_MEALS_VALUES_SUCCESS';
export const FETCH_BREAKFAST_VALUES_SUCCESS = 'FETCH_BREAKFAST_VALUES_SUCCESS';
export const FETCH_FRUITS_VALUES_SUCCESS = 'FETCH_FRUITS_VALUES_SUCCESS';
export const FETCH_VEGETABLES_VALUES_SUCCESS = 'FETCH_VEGETABLES_VALUES_SUCCESS';
export const FETCH_SODAS_VALUES_SUCCESS = 'FETCH_SODAS_VALUES_SUCCESS';
export const FETCH_FAST_FOOD_VALUES_SUCCESS = 'FETCH_FAST_FOOD_VALUES_SUCCESS';
export const FETCH_PHYSICAL_HOURS_VALUES_SUCCESS = 'FETCH_PHYSICAL_HOURS_VALUES_SUCCESS';
export const FETCH_WALKING_CYCLING_VALUES_SUCCESS = 'FETCH_WALKING_CYCLING_VALUES_SUCCESS';
export const FETCH_DATES_SUCCESS = 'FETCH_DATES_SUCCESS';
export const FETCH_MIN_YEAR_SUCCESS = 'FETCH_MIN_YEAR_SUCCESS';
export const FETCH_MAX_YEAR_SUCCESS = 'FETCH_MAX_YEAR_SUCCESS';
export const FETCH_CHRONIC_DISEASE_VALUES_SUCCESS = 'FETCH_CHRONIC_DISEASE_VALUES_SUCCESS';
export const FETCH_TAKES_MEDS_VALUES_SUCCESS = 'FETCH_TAKES_MEDS_VALUES_SUCCESS';
export const FETCH_LOCAL_PAIN_VALUES_SUCCESS = 'FETCH_LOCAL_PAIN_VALUES_SUCCESS';
export const FETCH_PHYSICAL_VALUES_SUCCESS = 'FETCH_PHYSICAL_VALUES_SUCCESS';
export const FETCH_SPIROMETRY_CHANGE_VALUES_SUCCESS = 'FETCH_SPIROMETRY_CHANGE_VALUES_SUCCESS';
export const FETCH_VISUAL_SCREENING_CHANGE_VALUES_SUCCESS = 'FETCH_VISUAL_SCREENING_CHANGE_VALUES_SUCCESS';
export const FETCH_AUDITORY_SCREENING_CHANGE_VALUES_SUCCESS = 'FETCH_AUDITORY_SCREENING_CHANGE_VALUES_SUCCESS';
export const FETCH_ECG_CHANGE_VALUES_SUCCESS = 'FETCH_ECG_CHANGE_VALUES_SUCCESS';
export const FETCH_ERITROGRAM_CHANGE_VALUES_SUCCESS = 'FETCH_ERITROGRAM_CHANGE_VALUES_SUCCESS';
export const FETCH_LEUKOGRAM_CHANGE_VALUES_SUCCESS = 'FETCH_LEUKOGRAM_CHANGE_VALUES_SUCCESS';

//HOMEPAGE INFO VALUES ACTIONTYPES
export const FETCH_REGISTERED_USERS_SUCCESS = 'FETCH_REGISTERED_USERS_SUCCESS';
export const FETCH_REGISTERED_FORMS_SUCCESS = 'FETCH_REGISTERED_FORMS_SUCCESS';
export const FETCH_FORMS_NUMBER_SUCCESS = 'FETCH_FORMS_NUMBER_SUCCESS';

//BY GENDER ACTIONTYPES
export const FETCH_AGE_BY_GENDER_SUCCESS = 'FETCH_AGE_BY_GENDER_SUCCESS';
export const FETCH_MARITAL_BY_GENDER_SUCCESS = 'FETCH_MARITAL_BY_GENDER_SUCCESS';
export const FETCH_ACADEMIC_BY_GENDER_SUCCESS = 'FETCH_ACADEMIC_BY_GENDER_SUCCESS';
export const FETCH_SMOKER_STATUS_BY_GENDER_SUCCESS = 'FETCH_SMOKER_STATUS_BY_GENDER_SUCCESS';
export const FETCH_SMOKER_FREQUENCIES_BY_GENDER_SUCCESS = 'FETCH_SMOKER_FREQUENCIES_BY_GENDER_SUCCESS';
export const FETCH_SMOKER_NUMBER_BY_GENDER_SUCCESS = 'FETCH_SMOKER_NUMBER_BY_GENDER_SUCCESS';
export const FETCH_HEALTH_OPINIONS_BY_GENDER_SUCCESS = 'FETCH_HEALTH_OPINIONS_BY_GENDER_SUCCESS';
export const FETCH_WEIGHT_BY_GENDER_SUCCESS = 'FETCH_WEIGHT_BY_GENDER_SUCCESS';
export const FETCH_HEIGHT_BY_GENDER_SUCCESS = 'FETCH_HEIGHT_BY_GENDER_SUCCESS';
export const FETCH_HAS_CHRONIC_BY_GENDER_SUCCESS = 'FETCH_HAS_CHRONIC_BY_GENDER_SUCCESS';
export const FETCH_CHRONIC_VALUES_BY_GENDER_SUCCESS = 'FETCH_CHRONIC_VALUES_BY_GENDER_SUCCESS';
export const FETCH_TAKES_MEDS_BY_GENDER_SUCCESS = 'FETCH_TAKES_MEDS_BY_GENDER_SUCCESS';
export const FETCH_MEDS_NUMBER_BY_GENDER_SUCCESS = 'FETCH_MEDS_NUMBER_BY_GENDER_SUCCESS';
export const FETCH_MEDS_VALUES_BY_GENDER_SUCCESS = 'FETCH_MEDS_VALUES_BY_GENDER_SUCCESS';
export const FETCH_PAIN_VALUE_BY_GENDER_SUCCESS = 'FETCH_PAIN_VALUE_BY_GENDER_SUCCESS';
export const FETCH_LOCAL_PAIN_BY_GENDER_SUCCESS = 'FETCH_LOCAL_PAIN_BY_GENDER_SUCCESS';
export const FETCH_PAIN_SCALE_BY_GENDER_SUCCESS = 'FETCH_PAIN_SCALE_BY_GENDER_SUCCESS';
export const FETCH_MEALS_BY_GENDER_SUCCESS = 'FETCH_MEALS_BY_GENDER_SUCCESS';
export const FETCH_BREAKFAST_BY_GENDER_SUCCESS = 'FETCH_BREAKFAST_BY_GENDER_SUCCESS';
export const FETCH_FRUITS_BY_GENDER_SUCCESS = 'FETCH_FRUITS_BY_GENDER_SUCCESS';
export const FETCH_VEGETABLES_BY_GENDER_SUCCESS = 'FETCH_VEGETABLES_BY_GENDER_SUCCESS';
export const FETCH_SODAS_BY_GENDER_SUCCESS = 'FETCH_SODAS_BY_GENDER_SUCCESS';
export const FETCH_FAST_FOOD_BY_GENDER_SUCCESS = 'FETCH_FAST_FOOD_BY_GENDER_SUCCESS';
export const FETCH_ALCOHOL_BY_GENDER_SUCCESS = 'FETCH_ALCOHOL_BY_GENDER_SUCCESS';
export const FETCH_BEER_BY_GENDER_SUCCESS = 'FETCH_BEER_BY_GENDER_SUCCESS';
export const FETCH_WINE_BY_GENDER_SUCCESS = 'FETCH_WINE_BY_GENDER_SUCCESS';
export const FETCH_SPIRIT_DRINKS_BY_GENDER_SUCCESS = 'FETCH_SPIRIT_DRINKS_BY_GENDER_SUCCESS';
export const FETCH_PHYSICAL_ACTIVITY_BY_GENDER_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_BY_GENDER_SUCCESS';
export const FETCH_PHYSICAL_ACTIVITY_VALUES_BY_GENDER_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_VALUES_BY_GENDER_SUCCESS';
export const FETCH_PHYSICAL_HOURS_BY_GENDER_SUCCESS = 'FETCH_PHYSICAL_HOURS_BY_GENDER_SUCCESS';
export const FETCH_WALKING_CYCLING_BY_GENDER_SUCCESS = 'FETCH_WALKING_CYCLING_BY_GENDER_SUCCESS';
export const FETCH_SBP_BY_GENDER_SUCCESS = 'FETCH_SBP_BY_GENDER_SUCCESS';
export const FETCH_DBP_BY_GENDER_SUCCESS = 'FETCH_DBP_BY_GENDER_SUCCESS';
export const FETCH_PULSE_BY_GENDER_SUCCESS = 'FETCH_PULSE_BY_GENDER_SUCCESS';
export const FETCH_URIC_ACID_BY_GENDER_SUCCESS = 'FETCH_URIC_ACID_BY_GENDER_SUCCESS';
export const FETCH_GLUCOSE_BY_GENDER_SUCCESS = 'FETCH_GLUCOSE_BY_GENDER_SUCCESS';
export const FETCH_CHOLESTEROL_BY_GENDER_SUCCESS = 'FETCH_CHOLESTEROL_BY_GENDER_SUCCESS';
export const FETCH_SPIROMETRY_BY_GENDER_SUCCESS = 'FETCH_SPIROMETRY_BY_GENDER_SUCCESS';
export const FETCH_SPIROMETRY_CHANGE_BY_GENDER_SUCCESS = 'FETCH_SPIROMETRY_CHANGE_BY_GENDER_SUCCESS';
export const FETCH_VISUAL_SCREENING_BY_GENDER_SUCCESS = 'FETCH_VISUAL_SCREENING_BY_GENDER_SUCCESS';
export const FETCH_VISUAL_SCREENING_CHANGE_BY_GENDER_SUCCESS = 'FETCH_VISUAL_SCREENING_CHANGE_BY_GENDER_SUCCESS';
export const FETCH_AUDITORY_SCREENING_BY_GENDER_SUCCESS = 'FETCH_AUDITORY_SCREENING_BY_GENDER_SUCCESS';
export const FETCH_AUDITORY_SCREENING_CHANGE_BY_GENDER_SUCCESS = 'FETCH_AUDITORY_SCREENING_CHANGE_BY_GENDER_SUCCESS';
export const FETCH_ECG_BY_GENDER_SUCCESS = 'FETCH_ECG_BY_GENDER_SUCCESS';
export const FETCH_ECG_CHANGE_BY_GENDER_SUCCESS = 'FETCH_ECG_CHANGE_BY_GENDER_SUCCESS';
export const FETCH_ERITROGRAM_BY_GENDER_SUCCESS = 'FETCH_ERITROGRAM_BY_GENDER_SUCCESS';
export const FETCH_ERITROGRAM_CHANGE_BY_GENDER_SUCCESS = 'FETCH_ERITROGRAM_CHANGE_BY_GENDER_SUCCESS';
export const FETCH_LEUKOGRAM_BY_GENDER_SUCCESS = 'FETCH_LEUKOGRAM_BY_GENDER_SUCCESS';
export const FETCH_LEUKOGRAM_CHANGE_BY_GENDER_SUCCESS = 'FETCH_LEUKOGRAM_CHANGE_BY_GENDER_SUCCESS';

//BY AGE ACTIONTYPES
export const FETCH_GENDER_BY_AGE_SUCCESS = 'FETCH_GENDER_BY_AGE_SUCCESS';
export const FETCH_MARITAL_BY_AGE_SUCCESS = 'FETCH_MARITAL_BY_AGE_SUCCESS';
export const FETCH_ACADEMIC_BY_AGE_SUCCESS = 'FETCH_ACADEMIC_BY_AGE_SUCCESS';
export const FETCH_SMOKER_STATUS_BY_AGE_SUCCESS = 'FETCH_SMOKER_STATUS_BY_AGE_SUCCESS';
export const FETCH_SMOKER_FREQUENCIES_BY_AGE_SUCCESS = 'FETCH_SMOKER_FREQUENCIES_BY_AGE_SUCCESS';
export const FETCH_SMOKER_NUMBER_BY_AGE_SUCCESS = 'FETCH_SMOKER_NUMBER_BY_AGE_SUCCESS';
export const FETCH_HEALTH_OPINIONS_BY_AGE_SUCCESS = 'FETCH_HEALTH_OPINIONS_BY_AGE_SUCCESS';
export const FETCH_WEIGHT_BY_AGE_SUCCESS = 'FETCH_WEIGHT_BY_AGE_SUCCESS';
export const FETCH_HEIGHT_BY_AGE_SUCCESS = 'FETCH_HEIGHT_BY_AGE_SUCCESS';
export const FETCH_HAS_CHRONIC_BY_AGE_SUCCESS = 'FETCH_HAS_CHRONIC_BY_AGE_SUCCESS';
export const FETCH_CHRONIC_VALUES_BY_AGE_SUCCESS = 'FETCH_CHRONIC_VALUES_BY_AGE_SUCCESS';
export const FETCH_TAKES_MEDS_BY_AGE_SUCCESS = 'FETCH_TAKES_MEDS_BY_AGE_SUCCESS';
export const FETCH_MEDS_NUMBER_BY_AGE_SUCCESS = 'FETCH_MEDS_NUMBER_BY_AGE_SUCCESS';
export const FETCH_MEDS_VALUES_BY_AGE_SUCCESS = 'FETCH_MEDS_VALUES_BY_AGE_SUCCESS';
export const FETCH_PAIN_VALUE_BY_AGE_SUCCESS = 'FETCH_PAIN_VALUE_BY_AGE_SUCCESS';
export const FETCH_LOCAL_PAIN_BY_AGE_SUCCESS = 'FETCH_LOCAL_PAIN_BY_AGE_SUCCESS';
export const FETCH_PAIN_SCALE_BY_AGE_SUCCESS = 'FETCH_PAIN_SCALE_BY_AGE_SUCCESS';
export const FETCH_MEALS_BY_AGE_SUCCESS = 'FETCH_MEALS_BY_AGE_SUCCESS';
export const FETCH_BREAKFAST_BY_AGE_SUCCESS = 'FETCH_BREAKFAST_BY_AGE_SUCCESS';
export const FETCH_FRUITS_BY_AGE_SUCCESS = 'FETCH_FRUITS_BY_AGE_SUCCESS';
export const FETCH_VEGETABLES_BY_AGE_SUCCESS = 'FETCH_VEGETABLES_BY_AGE_SUCCESS';
export const FETCH_SODAS_BY_AGE_SUCCESS = 'FETCH_SODAS_BY_AGE_SUCCESS';
export const FETCH_FAST_FOOD_BY_AGE_SUCCESS = 'FETCH_FAST_FOOD_BY_AGE_SUCCESS';
export const FETCH_ALCOHOL_BY_AGE_SUCCESS = 'FETCH_ALCOHOL_BY_AGE_SUCCESS';
export const FETCH_BEER_BY_AGE_SUCCESS = 'FETCH_BEER_BY_AGE_SUCCESS';
export const FETCH_WINE_BY_AGE_SUCCESS = 'FETCH_WINE_BY_AGE_SUCCESS';
export const FETCH_SPIRIT_DRINKS_BY_AGE_SUCCESS = 'FETCH_SPIRIT_DRINKS_BY_AGE_SUCCESS';
export const FETCH_PHYSICAL_ACTIVITY_BY_AGE_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_BY_AGE_SUCCESS';
export const FETCH_PHYSICAL_ACTIVITY_VALUES_BY_AGE_SUCCESS = 'FETCH_PHYSICAL_ACTIVITY_VALUES_BY_AGE_SUCCESS';
export const FETCH_PHYSICAL_HOURS_BY_AGE_SUCCESS = 'FETCH_PHYSICAL_HOURS_BY_AGE_SUCCESS';
export const FETCH_WALKING_CYCLING_BY_AGE_SUCCESS = 'FETCH_WALKING_CYCLING_BY_AGE_SUCCESS';
export const FETCH_SBP_BY_AGE_SUCCESS = 'FETCH_SBP_BY_AGE_SUCCESS';
export const FETCH_DBP_BY_AGE_SUCCESS = 'FETCH_DBP_BY_AGE_SUCCESS';
export const FETCH_PULSE_BY_AGE_SUCCESS = 'FETCH_PULSE_BY_AGE_SUCCESS';
export const FETCH_URIC_ACID_BY_AGE_SUCCESS = 'FETCH_URIC_ACID_BY_AGE_SUCCESS';
export const FETCH_GLUCOSE_BY_AGE_SUCCESS = 'FETCH_GLUCOSE_BY_AGE_SUCCESS';
export const FETCH_CHOLESTEROL_BY_AGE_SUCCESS = 'FETCH_CHOLESTEROL_BY_AGE_SUCCESS';
export const FETCH_SPIROMETRY_BY_AGE_SUCCESS = 'FETCH_SPIROMETRY_BY_AGE_SUCCESS';
export const FETCH_SPIROMETRY_CHANGE_BY_AGE_SUCCESS = 'FETCH_SPIROMETRY_CHANGE_BY_AGE_SUCCESS';
export const FETCH_VISUAL_SCREENING_BY_AGE_SUCCESS = 'FETCH_VISUAL_SCREENING_BY_AGE_SUCCESS';
export const FETCH_VISUAL_SCREENING_CHANGE_BY_AGE_SUCCESS = 'FETCH_VISUAL_SCREENING_CHANGE_BY_AGE_SUCCESS';
export const FETCH_AUDITORY_SCREENING_BY_AGE_SUCCESS = 'FETCH_AUDITORY_SCREENING_BY_AGE_SUCCESS';
export const FETCH_AUDITORY_SCREENING_CHANGE_BY_AGE_SUCCESS = 'FETCH_AUDITORY_SCREENING_CHANGE_BY_AGE_SUCCESS';
export const FETCH_ECG_BY_AGE_SUCCESS = 'FETCH_ECG_BY_AGE_SUCCESS';
export const FETCH_ECG_CHANGE_BY_AGE_SUCCESS = 'FETCH_ECG_CHANGE_BY_AGE_SUCCESS';
export const FETCH_ERITROGRAM_BY_AGE_SUCCESS = 'FETCH_ERITROGRAM_BY_AGE_SUCCESS';
export const FETCH_ERITROGRAM_CHANGE_BY_AGE_SUCCESS = 'FETCH_ERITROGRAM_CHANGE_BY_AGE_SUCCESS';
export const FETCH_LEUKOGRAM_BY_AGE_SUCCESS = 'FETCH_LEUKOGRAM_BY_AGE_SUCCESS';
export const FETCH_LEUKOGRAM_CHANGE_BY_AGE_SUCCESS = 'FETCH_LEUKOGRAM_CHANGE_BY_AGE_SUCCESS';

//PROFILE ACTIONTYPES
export const FETCH_FIRST_LAST_NAME_SUCCESS = 'FETCH_FIRST_LAST_NAME_SUCCESS';

export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';
export const UPDATE_PROFILE_REMOVE_MSG = 'UPDATE_PROFILE_REMOVE_MSG';

export const UPDATE_PASSWORD_START = 'UPDATE_PASSWORD_START';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';
export const UPDATE_PASSWORD_REMOVE_MSG = 'UPDATE_PASSWORD_REMOVE_MSG';

export const DELETE_ACCOUNT_START = 'UPDATE_PASSWORD_START';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';
export const DELETE_ACCOUNT_REMOVE_MSG = 'DELETE_ACCOUNT_REMOVE_MSG';