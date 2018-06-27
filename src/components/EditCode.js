import React from 'react';
import { FormattedMessage } from 'react-intl';

import Aux from '../hoc/auxi';

const editCode = (props) => {
    let gender = null;
    if (props.gender == null) {
        gender = (<div className="form-group">
            <label htmlFor="gender"><FormattedMessage id="gender" /></label>
            <select className="form-control" id="gender" onChange={props.genderChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.genderOptions}
            </select>
        </div>)
    };

    let department = null;
    if (props.department == null) {
        department = (<div className="form-group">
            <label htmlFor="department"><FormattedMessage id="department" /></label>
            <select className="form-control" id="department" onChange={props.departmentChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.departmentOptions}
            </select>
        </div>)
    };

    let age = null;
    if (props.age == null) {
        age = (<div className="form-group">
            <label htmlFor="age"><FormattedMessage id="age" /></label>
            <select className="form-control" id="age" onChange={props.ageChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.ageOptions}
            </select>
        </div>)
    };

    let marital_status = null;
    if (props.marital_status == null) {
        marital_status = (<div className="form-group">
            <label htmlFor="marital"><FormattedMessage id="marital-status" /></label>
            <select className="form-control" id="marital" onChange={props.maritalChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.maritalOptions}
            </select>
        </div>)
    };

    let academic_levels = null;
    if (props.academic_levels == null) {
        academic_levels = (<div className="form-group">
            <label htmlFor="academic"><FormattedMessage id="academic" /></label>
            <select className="form-control" id="academic" onChange={props.academicChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.academicOptions}
            </select>
        </div>)
    };

    let smoking_status = null;
    if (props.smoking_status == null) {
        smoking_status = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="smoker_status"><FormattedMessage id="smoker-status-edit" /></label>
                    <select className="form-control" id="smoker_status" onChange={props.smokerStatusChange} selected={props.selectedStatus}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.smokerStatusOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    let regularity_number = null;
    if ((props.smoking_status === 'Fumador' || props.smoking_status === 'Smoker') && (props.regularity == null && props.weeklyNumber == null)) {
        regularity_number = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="regularity"><FormattedMessage id="regularity-edit" /></label>
                    <select className="form-control" id="regularity-edit" onChange={props.smokerRegularityChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.regularityOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="average_number"><FormattedMessage id="average-number-edit" /></label>
                    <select className="form-control" id="average_number" onChange={props.smokerNumberChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.weeklyNumberOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.smoking_status === 'Fumador' || props.smoking_status === 'Smoker') && (props.regularity && props.weeklyNumber == null)) {
        regularity_number = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="average_number"><FormattedMessage id="average-number-edit" /></label>
                    <select className="form-control" id="average_number" onChange={props.smokerNumberChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.weeklyNumberOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.smoking_status === 'Fumador' || props.smoking_status === 'Smoker') && (props.regularity == null && props.weeklyNumber)) {
        regularity_number = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="regularity"><FormattedMessage id="regularity-edit" /></label>
                    <select className="form-control" id="regularity-edit" onChange={props.smokerRegularityChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.regularityOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if (props.selectedStatus === "1") {
        regularity_number = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="regularity"><FormattedMessage id="regularity-edit" /></label>
                    <select className="form-control" id="regularity-edit" onChange={props.smokerRegularityChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.regularityOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="average_number"><FormattedMessage id="average-number-edit" /></label>
                    <select className="form-control" id="average_number" onChange={props.smokerNumberChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.weeklyNumberOptions}
                    </select>
                </div>
            </Aux>
        )
    }

    let health_opinion = null;
    if (props.health_opinion == null) {
        health_opinion = (<div className="form-group">
            <label htmlFor="health_opinion"><FormattedMessage id="health-opinion" /></label>
            <select className="form-control" id="health_opinion" onChange={props.healthOpinionsChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.healthOpinionOptions}
            </select>
        </div>)
    };

    let weight = null;
    if (props.weight == null) {
        weight = (
            <div className="form-group">
                <label htmlFor="number"><FormattedMessage id="weight" /></label>
                <input type="number" min="40" step="0.5" onChange={props.weightChange} />
            </div>
        )
    };

    let height = null;
    if (props.height == null) {
        height = (
            <div className="form-group">
                <label htmlFor="number"><FormattedMessage id="height" /></label>
                <input type="number" min="1" step="0.01" onChange={props.heightChange} />
            </div>
        )
    };

    let has_chronic = null;
    if (props.has_chronic == null) {
        has_chronic = (<div className="form-group">
            <label htmlFor="has_chronic"><FormattedMessage id="has-disease" /></label>
            <select className="form-control" id="has_chronic" onChange={props.hasChronicChange} selected={props.selectedHasChronic}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                <option value="0"><FormattedMessage id="no" /></option>
                <option value="1"><FormattedMessage id="yes" /></option>
            </select>
        </div>)
    };

    let chronicValues = null;
    if (props.has_chronic === 1 && props.chronic_diseases == null) {
        chronicValues = (<div className="form-group">
            <label htmlFor="chronic_values"><FormattedMessage id="chronic-diseases-edit" /></label>
            <select className="form-control" id="chronic_values" onChange={props.chronicValuesChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.chronicValuesOptions}
            </select>
        </div>)
    };

    if (props.selectedHasChronic === "1") {
        chronicValues = (
            (<div className="form-group">
                <label htmlFor="chronic_values"><FormattedMessage id="chronic-diseases-edit" /></label>
                <select className="form-control" id="chronic_values" onChange={props.chronicValuesChange}>
                    <option value="null"><FormattedMessage id="no-answer" /></option>
                    {props.chronicValuesOptions}
                </select>
            </div>)
        )
    };

    let takes_meds = null;
    if (props.takes_meds == null) {
        takes_meds = (<div className="form-group">
            <label htmlFor="takes_meds"><FormattedMessage id="take-meds" /></label>
            <select className="form-control" id="takes_meds" onChange={props.takesMedsChange} selected={props.selectedTakesMeds}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                <option value="0"><FormattedMessage id="no" /></option>
                <option value="1"><FormattedMessage id="yes" /></option>
            </select>
        </div>)
    };

    let meds_number_values = null;
    if ((props.takes_meds === 1) && (props.meds_number == null && props.meds_values == null)) {
        meds_number_values = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="number"><FormattedMessage id="meds-number-edit" /></label>
                    <input type="number" step="1" min="0" />
                </div>
                <div className="form-group">
                    <label htmlFor="meds_values"><FormattedMessage id="meds-name-edit" /></label>
                    <select className="form-control" id="meds_values" onChange={props.medsValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.medsValuesOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.takes_meds === 1) && (props.meds_number && props.meds_values == null)) {
        meds_number_values = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="meds_values"><FormattedMessage id="meds-name-edit" /></label>
                    <select className="form-control" id="meds_values" onChange={props.medsValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.medsValuesOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.takes_meds === 1) && (props.meds_number == null && props.meds_values)) {
        meds_number_values = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="number"><FormattedMessage id="meds-number-edit" /></label>
                    <input type="number" step="1" min="0" onChange={props.medsNumberChange} />
                </div>
            </Aux>
        )
    };

    if (props.selectedTakesMeds === "1") {
        meds_number_values = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="number"><FormattedMessage id="meds-number-edit" /></label>
                    <input type="number" step="1" min="0" onChange={props.medsNumberChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="meds_values"><FormattedMessage id="meds-name-edit" /></label>
                    <select className="form-control" id="meds_values" onChange={props.medsValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.medsValuesOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    let pain_value = null;
    if (props.pain_value == null) {
        pain_value = (<div className="form-group">
            <label htmlFor="pain"><FormattedMessage id="pain" /></label>
            <select className="form-control" id="pain" onChange={props.painValueChange} selected={props.selectedPainValue}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.painValueOptions}
            </select>
        </div>)
    };

    let pain_local_scale = null;
    if (((props.pain_value === 'Dor crónica' || props.pain_value === 'Chronic pain') || (props.pain_value === 'Dor aguda' || props.pain_value === 'Acute pain')) && (props.local_pain == null && props.pain_scale == null)) {
        pain_local_scale = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="local_pain"><FormattedMessage id="pain-local" /></label>
                    <select className="form-control" id="local_pain" onChange={props.localPainChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.localPainOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pain_scale"><FormattedMessage id="pain-scale" /></label>
                    <select className="form-control" id="pain_scale" onChange={props.painScaleChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.painScaleOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if (((props.pain_value === 'Dor crónica' || props.pain_value === 'Chronic pain') || (props.pain_value === 'Dor aguda' || props.pain_value === 'Acute pain')) && (props.local_pain && props.pain_scale == null)) {
        pain_local_scale = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="pain_scale"><FormattedMessage id="pain-scale" /></label>
                    <select className="form-control" id="pain_scale" onChange={props.painScaleChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.painScaleOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if (((props.pain_value === 'Dor crónica' || props.pain_value === 'Chronic pain') || (props.pain_value === 'Dor aguda' || props.pain_value === 'Acute pain')) && (props.local_pain == null && props.pain_scale)) {
        pain_local_scale = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="local_pain"><FormattedMessage id="pain-local" /></label>
                    <select className="form-control" id="local_pain" onChange={props.localPainChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.localPainOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if (props.selectedPainValue === "2" || props.selectedPainValue === "3") {
        pain_local_scale = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="local_pain"><FormattedMessage id="pain-local" /></label>
                    <select className="form-control" id="local_pain" onChange={props.localPainChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.localPainOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pain_scale"><FormattedMessage id="pain-scale" /></label>
                    <select className="form-control" id="pain_scale" onChange={props.painScaleChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.painScaleOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    let meals = null;
    if (props.meals == null) {
        meals = (<div className="form-group">
            <label htmlFor="meals"><FormattedMessage id="meals" /></label>
            <select className="form-control" id="meals" onChange={props.mealsChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.mealsOptions}
            </select>
        </div>)
    };

    let breakfast = null;
    if (props.breakfast == null) {
        breakfast = (<div className="form-group">
            <label htmlFor="breakfast"><FormattedMessage id="breakfast" /></label>
            <select className="form-control" id="breakfast" onChange={props.breakfastChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.breakfastOptions}
            </select>
        </div>)
    };

    let fruit = null;
    if (props.fruit == null) {
        fruit = (<div className="form-group">
            <label htmlFor="fruit"><FormattedMessage id="fruit" /></label>
            <select className="form-control" id="fruit" onChange={props.fruitChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.fruitOptions}
            </select>
        </div>)
    };

    let vegetables = null;
    if (props.vegetables == null) {
        vegetables = (<div className="form-group">
            <label htmlFor="vegetables"><FormattedMessage id="vegetables" /></label>
            <select className="form-control" id="vegetables" onChange={props.vegetablesChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.vegetablesOptions}
            </select>
        </div>)
    };

    let sodas = null;
    if (props.sodas == null) {
        sodas = (<div className="form-group">
            <label htmlFor="sodas"><FormattedMessage id="sodas" /></label>
            <select className="form-control" id="sodas" onChange={props.sodasChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.sodasOptions}
            </select>
        </div>)
    };

    let fast_food = null;
    if (props.fast_food == null) {
        fast_food = (<div className="form-group">
            <label htmlFor="fast_food"><FormattedMessage id="fast-food" /></label>
            <select className="form-control" id="fast_food" onChange={props.fastFoodChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.fastFoodOptions}
            </select>
        </div>)
    };

    let alcohol = null;
    if (props.alcohol == null) {
        alcohol = (<div className="form-group">
            <label htmlFor="alcohol"><FormattedMessage id="alcohol-edit" /></label>
            <select className="form-control" id="alcohol" onChange={props.alcoholChange} selected={props.selectedAlcohol}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                <option value="0"><FormattedMessage id="no" /></option>
                <option value="1"><FormattedMessage id="yes" /></option>
            </select>
        </div>)
    };

    let beer_wine_spirit = null;
    if ((props.alcohol === 1) && (props.beer == null && props.wine == null && props.spirit_drinks == null)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="beer"><FormattedMessage id="beers" /></label>
                    <input type="number" step="1" min="0" id="beer" onChange={props.beerChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="wine"><FormattedMessage id="wine" /></label>
                    <input type="number" step="1" min="0" id="wine" onChange={props.wineChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="spirit_drinks"><FormattedMessage id="spirit_drinks" /></label>
                    <input type="number" step="1" min="0" id="spirit_drinks" onChange={props.spiritDrinksChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer && props.wine == null && props.spirit_drinks == null)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="wine"><FormattedMessage id="wine" /></label>
                    <input type="number" step="1" min="0" id="wine" onChange={props.wineChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="spirit_drinks"><FormattedMessage id="spirit_drinks" /></label>
                    <input type="number" step="1" min="0" id="spirit_drinks" onChange={props.spiritDrinksChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer == null && props.wine == null && props.spirit_drinks)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="beer"><FormattedMessage id="beers" /></label>
                    <input type="number" step="1" min="0" id="beer" onChange={props.beerChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="wine"><FormattedMessage id="wine" /></label>
                    <input type="number" step="1" min="0" id="wine" onChange={props.wineChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer == null && props.wine && props.spirit_drinks == null)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="beer"><FormattedMessage id="beers" /></label>
                    <input type="number" step="1" min="0" id="beer" onChange={props.beerChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="spirit_drinks"><FormattedMessage id="spirit_drinks" /></label>
                    <input type="number" step="1" min="0" id="spirit_drinks" onChange={props.spiritDrinksChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer == null && props.wine && props.spirit_drinks)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="beer"><FormattedMessage id="beers" /></label>
                    <input type="number" step="1" min="0" id="beer" onChange={props.beerChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer && props.wine == null && props.spirit_drinks)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="wine"><FormattedMessage id="wine" /></label>
                    <input type="number" step="1" min="0" id="wine" onChange={props.wineChange} />
                </div>
            </Aux>
        )
    };

    if ((props.alcohol === 1) && (props.beer && props.wine && props.spirit_drinks == null)) {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="spirit_drinks"><FormattedMessage id="spirit_drinks" /></label>
                    <input type="number" step="1" min="0" id="spirit_drinks" onChange={props.spiritDrinksChange} />
                </div>
            </Aux>
        )
    };

    if (props.selectedAlcohol === "1") {
        beer_wine_spirit = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="beer"><FormattedMessage id="beers" /></label>
                    <input type="number" step="1" min="0" id="beer" onChange={props.beerChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="wine"><FormattedMessage id="wine" /></label>
                    <input type="number" step="1" min="0" id="wine" onChange={props.wineChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="spirit_drinks"><FormattedMessage id="spirit_drinks" /></label>
                    <input type="number" step="1" min="0" id="spirit_drinks" onChange={props.spiritDrinksChange} />
                </div>
            </Aux>
        )
    };

    let physical_activity = null;
    if (props.physical_activity == null) {
        physical_activity = (<div className="form-group">
            <label htmlFor="physical_activity"><FormattedMessage id="practice-physical" /></label>
            <select className="form-control" id="physical_activity" onChange={props.physicalChange} selected={props.selectedPhysical}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                <option value="0"><FormattedMessage id="no" /></option>
                <option value="1"><FormattedMessage id="yes" /></option>
            </select>
        </div>)
    };

    let physical_values_hours = null;
    if ((props.physical_activity === 1) && (props.physical_values == null && props.physical_hours == null)) {
        physical_values_hours = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="physical_values"><FormattedMessage id="physical-name-edit" /></label>
                    <select className="form-control" id="physical_values" onChange={props.physicalValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalValuesOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="physical_hours"><FormattedMessage id="physical-hours-edit" /></label>
                    <select className="form-control" id="physical_hours" onChange={props.physicalHoursChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalHoursOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.physical_activity === 1) && (props.physical_values && props.physical_hours == null)) {
        physical_values_hours = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="physical_hours"><FormattedMessage id="physical-hours-edit" /></label>
                    <select className="form-control" id="physical_hours" onChange={props.physicalHoursChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalHoursOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if ((props.physical_activity === 1) && (props.physical_values == null && props.physical_hours)) {
        physical_values_hours = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="physical_values"><FormattedMessage id="physical-name-edit" /></label>
                    <select className="form-control" id="physical_values" onChange={props.physicalValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalValuesOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    if (props.selectedPhysical === "1") {
        physical_values_hours = (
            <Aux>
                <div className="form-group">
                    <label htmlFor="physical_values"><FormattedMessage id="physical-name-edit" /></label>
                    <select className="form-control" id="physical_values" onChange={props.physicalValuesChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalValuesOptions}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="physical_hours"><FormattedMessage id="physical-hours-edit" /></label>
                    <select className="form-control" id="physical_hours" onChange={props.physicalHoursChange}>
                        <option value="null"><FormattedMessage id="no-answer" /></option>
                        {props.physicalHoursOptions}
                    </select>
                </div>
            </Aux>
        )
    };

    let walking_cycling = null;
    if (props.walking_cycling == null) {
        walking_cycling = (<div className="form-group">
            <label htmlFor="walking_cycling"><FormattedMessage id="walking-cycling" /></label>
            <select className="form-control" id="walking_cycling" onChange={props.walkingCyclingChange}>
                <option value="null"><FormattedMessage id="no-answer" /></option>
                {props.walkingCyclingOptions}
            </select>
        </div>)
    };

    return (
        <div className="container mt-5">
            <h3 className="text-secondary mb-3"><FormattedMessage id="edit-form" /></h3>
            <hr></hr>
            <p className="font-weight-bold"><FormattedMessage id="edit-form-text" /></p>
            {gender}
            {department}
            {age}
            {marital_status}
            {academic_levels}

            {smoking_status}
            {regularity_number}
            {health_opinion}
            {weight}
            {height}

            {has_chronic}
            {chronicValues}
            {takes_meds}
            {meds_number_values}
            {pain_value}
            {pain_local_scale}

            {meals}
            {breakfast}
            {fruit}
            {vegetables}
            {sodas}
            {fast_food}
            {alcohol}
            {beer_wine_spirit}

            {physical_activity}
            {physical_values_hours}
            {walking_cycling}
        </div>
    )
}

export default editCode;