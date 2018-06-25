//auth
export {
    login,
    logout,
    loginCheckState,
    loginRemoveMsg,
    setToken
} from './auth/login';

export {
    register,
    registerRemoveMsg
} from './auth/register';

export {
    recoverPassword,
    recoverPwMessage
} from './auth/recoverPassword';

//codes
export {
    insertCode,
    insertCodeRemoveMsg
} from './codes/insertCode';

export {
    fetchCodes,
    codeRemoveMessage,
    fetchNullValues,
    fetchNullNumbers,
    nullValuesMsgRemove
} from './codes/fetchCodes';

export {
    fetchCodeData
} from './codes/fetchCodeData';

export {
    deleteCode,
    deleteCodeMsgRemove
} from './codes/deleteCode';

//language
export {
    language
} from './language';

//indicators
export {
    fetchGender,
    fetchAge,
    fetchMaritalStatus,
    fetchAcademic,
    fetchSmokerFrequencie,
    fetchSmokerStatus,
    fetchSmokerNumber,
    fetchHealthOpinions,
    fetchWeight,
    fetchHeight,
    fetchHasChronic,
    fetchChronicValues,
    fetchTakesMeds,
    fetchMedsNumber,
    fetchMedsValues,
    fetchPainValue,
    fetchLocalPain,
    fetchPainScale,
    fetchMeals,
    fetchBreakfast,
    fetchFruits,
    fetchVegetables,
    fetchSodas,
    fetchFastFood,
    fetchAlcohol,
    fetchBeer,
    fetchWine,
    fetchSpiritDrinks,
    fetchPhysicalActivity,
    fetchPhysicalActivityValues,
    fetchPhysicalHours,
    fetchWalkingCycling,
    fetchSbp,
    fetchDbp,
    fetchPulse,
    fetchUricAcid,
    fetchGlucose,
    fetchCholesterol,
    fetchSpirometry,
    fetchSpirometryChange,
    fetchVisualScreening,
    fetchVisualChange,
    fetchAuditoryScreening,
    fetchAuditoryChange,
    fetchEcg,
    fetchEcgChange,
    fetchEritrogram,
    fetchEritrogramChange,
    fetchLeukogram,
    fetchLeukogramChange,
    fetchUserNumber,
    fetchRegisteredFormsNumber,
    fetchFormsNumber,
} from './indicators/general_indicators';

export {
    fetchAgesByGender,
    fetchAcademicByGender,
    fetchMaritalByGender,
    fetchSmokerStatusByGender,
    fetchSmokerFrequenciesByGender,
    fetchWeeklyNumberByGender,
    fetchHealthOpinionsByGender,
    fetchWeightByGender,
    fetchHeightByGender,
    fetchHasChronicByGender,
    fetchChronicValuesByGender,
    fetchTakesMedsByGender,
    fetchMedsNumberByGender,
    fetchMedsValuesByGender,
    fetchPainValueByGender,
    fetchLocalPainByGender,
    fetchPainScaleByGender,
    fetchMealsByGender,
    fetchBreakfastByGender,
    fetchFruitsByGender,
    fetchVegetablesByGender,
    fetchSodasByGender,
    fetchFastFoodByGender,
    fetchAlcoholByGender,
    fetchBeerByGender,
    fetchWineByGender,
    fetchSpiritDrinksByGender,
    fetchPhysicalActivityByGender,
    fetchPhysicalValuesByGender,
    fetchPhysicalHoursByGender,
    fetchWalkingCyclingByGender,
    fetchSbpByGender,
    fetchDbpByGender,
    fetchPulseByGender,
    fetchUricAcidByGender,
    fetchGlucoseByGender,
    fetchCholesterolByGender,
    fetchSpirometryByGender,
    fetchVisualScreeningByGender,
    fetchAuditoryScreeningByGender,
    fetchEcgByGender,
    fetchEritrogramByGender,
    fetchLeukogramByGender,
    fetchSpirometryChangeByGender,
    fetchVisualScreeningChangeByGender,
    fetchAuditoryScreeningChangeByGender,
    fetchEcgChangeByGender,
    fetchEritrogramChangeByGender,
    fetchLeukogramChangeByGender
} from './indicators/by_gender_indicators';

export {
    fetchGenderByAge,
    fetchAcademicByAge,
    fetchMaritalByAge,
    fetchSmokerStatusByAge,
    fetchSmokerFrequenciesByAge,
    fetchWeeklyNumberByAge,
    fetchHealthOpinionsByAge,
    fetchWeightByAge,
    fetchHeightByAge,
    fetchHasChronicByAge,
    fetchChronicValuesByAge,
    fetchTakesMedsByAge,
    fetchMedsNumberByAge,
    fetchMedsValuesByAge,
    fetchPainValueByAge,
    fetchLocalPainByAge,
    fetchPainScaleByAge,
    fetchMealsByAge,
    fetchBreakfastByAge,
    fetchFruitsByAge,
    fetchVegetablesByAge,
    fetchSodasByAge,
    fetchFastFoodByAge,
    fetchAlcoholByAge,
    fetchBeerByAge,
    fetchWineByAge,
    fetchSpiritDrinksByAge,
    fetchPhysicalActivityByAge,
    fetchPhysicalValuesByAge,
    fetchPhysicalHoursByAge,
    fetchWalkingCyclingByAge,
    fetchSbpByAge,
    fetchDbpByAge,
    fetchPulseByAge,
    fetchUricAcidByAge,
    fetchGlucoseByAge,
    fetchCholesterolByAge,
    fetchSpirometryByAge,
    fetchVisualScreeningByAge,
    fetchAuditoryScreeningByAge,
    fetchEcgByAge,
    fetchEritrogramByAge,
    fetchLeukogramByAge,
    fetchSpirometryChangeByAge,
    fetchVisualScreeningChangeByAge,
    fetchAuditoryScreeningChangeByAge,
    fetchEcgChangeByAge,
    fetchEritrogramChangeByAge,
    fetchLeukogramChangeByAge
} from './indicators/by_age_indicators';

export {
    fetchWeightSum,
    fetchDepWeightSum,
    fetchPersonalWeight,
    fetchSbpSum,
    fetchDepSbpSum,
    fetchPersonalSbp,
    fetchDbpSum,
    fetchDepDbpSum,
    fetchPersonalDbp,
    fetchPulseSum,
    fetchDepPulseSum,
    fetchPersonalPulse,
    fetchUricAcidSum,
    fetchDepUricAcidSum,
    fetchPersonalUricAcid,
    fetchGlucoseSum,
    fetchDepGlucoseSum,
    fetchPersonalGlucose,
    fetchCholesterolSum,
    fetchDepCholesterolSum,
    fetchPersonalCholesterol
} from './indicators/personal_indicators';

//reference values
export {
    fetchDepartments,
    fetchGenderValues,
    fetchAgeValues,
    fetchChartAgesValues,
    fetchAcademicValues,
    fetchMaritalValues,
    fetchSmokerStatusValues,
    fetchSmokerFrequencieValues,
    fetchSmokerNumberValues,
    fetchHealthOpinionsValues,
    fetchPainValueValues,
    fetchPainScaleValues,
    fetchMealsValues,
    fetchBreakfastValues,
    fetchFruitValues,
    fetchVegetablesValues,
    fetchSodasValues,
    fetchFastFoodValues,
    fetchPhysicalHoursValues,
    fetchWalkingCyclingValues,
    fetchDates,
    fetchMaxYear,
    fetchMinYear,
    fetchChronicDiseasesValues,
    fetchTakesMedsValues,
    fetchLocalPainValues,
    fetchPhysicalValues,
    fetchSpirometryChangeValues,
    fetchVisualChangeValues,
    fetchAuditoryChangeValues,
    fetchEcgChangeValues,
    fetchEritrogramChangeValues,
    fetchLeukogramChangeValues
} from './fetchRefValues';

//profile
export {
    fetchFirstLastName,
    updateProfile,
    updateProfileRemoveMessage,
    updatePassword,
    updatePasswordRemoveMessage,
    deleteAccount,
    deleteAccountRemoveMessage
} from './profile';