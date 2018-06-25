import React from 'react';
import { FormattedMessage } from 'react-intl'

import Aux from '../hoc/auxi';

const codeData = (props) => {
    let has_chronic_disease = props.has_chronic_disease;
    let takes_meds = props.takes_meds;
    let alcohol = props.alcohol;
    let physical_activity = props.physical_activity;
    let spirometry = props.spirometry;
    let visual_screening = props.visual_screening;
    let auditory = props.auditory;
    let ecg = props.ecg;
    let eritrogram = props.eritrogram;
    let leukogram = props.leukogram;
    let no_answer = <FormattedMessage id="not-answer" />;

    let spirometryPage = null;
    if (props.spirometry === 0) {
        spirometry = <FormattedMessage id="normal" />
        spirometryPage = <li><b><FormattedMessage id="spirometry" /></b> {spirometry}</li>
    } else if (props.spirometry === 1) {
        spirometry = <FormattedMessage id="changed" />
        spirometryPage = (<li><b><FormattedMessage id="spirometry" /></b> {spirometry}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.spirometry_change ? props.spirometry_change : "---"}</li>
            </ul>
        </li>)
    } else {
        spirometry = <FormattedMessage id="not-filled" />;
        spirometryPage = <li><b><FormattedMessage id="spirometry" /></b> {spirometry}</li>
    };

    let visualPage = null;
    if (props.visual_screening === 0) {
        visual_screening = <FormattedMessage id="normal" />
        visualPage = <li><b><FormattedMessage id="visual_screening" /></b> {visual_screening}</li>
    } else if (props.visual_screening === 1) {
        visual_screening = <FormattedMessage id="changed" />
        visualPage = (<li><b><FormattedMessage id="visual_screening" /></b> {visual_screening}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.visual_screening_change ? props.visual_screening_change : "---"}</li>
            </ul>
        </li>)
    } else {
        visual_screening = <FormattedMessage id="not-filled" />;
        visualPage = <li><b><FormattedMessage id="visual_screening" /></b> {visual_screening}</li>
    };

    let auditoryPage = null;
    if (props.auditory === 0) {
        auditory = <FormattedMessage id="normal" />
        auditoryPage = <li><b><FormattedMessage id="auditory_screening" /></b> {auditory}</li>
    } else if (props.auditory === 1) {
        auditory = <FormattedMessage id="changed" />
        auditoryPage = (<li><b><FormattedMessage id="auditory_screening" /></b> {auditory}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.auditory_change ? props.auditory_change : "---"}</li>
            </ul>
        </li>)
    } else {
        auditory = <FormattedMessage id="not-filled" />;
        auditoryPage = <li><b><FormattedMessage id="auditory_screening" /></b> {auditory}</li>
    };

    let ecgPage = null;
    if (props.ecg === 0) {
        ecg = <FormattedMessage id="normal" />
        ecgPage = <li><b><FormattedMessage id="ecg" /></b> {ecg}</li>
    } else if (props.ecg === 1) {
        ecg = <FormattedMessage id="changed" />
        ecgPage = (<li><b><FormattedMessage id="ecg" /></b> {ecg}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.ecg_change ? props.ecg_change : "---"}</li>
            </ul>
        </li>)
    } else {
        ecg = <FormattedMessage id="not-filled" />;
        ecgPage = <li><b><FormattedMessage id="ecg" /></b> {ecg}</li>
    };

    let eritrogramPage = null;
    if (props.eritrogram === 0) {
        eritrogram = <FormattedMessage id="normal" />
        eritrogramPage = <li><b><FormattedMessage id="erythrogram" /></b> {eritrogram}</li>
    } else if (props.eritrogram === 1) {
        eritrogram = <FormattedMessage id="changed" />
        eritrogramPage = (<li><b><FormattedMessage id="erythrogram" /></b> {eritrogram}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.eritrogram_change ? props.eritrogram_change : "---"}</li>
            </ul>
        </li>)
    } else {
        eritrogram = <FormattedMessage id="not-filled" />;
        eritrogramPage = <li><b><FormattedMessage id="erythrogram" /></b> {eritrogram}</li>
    };

    let leukogramPage = null;
    if (props.leukogram === 0) {
        leukogram = <FormattedMessage id="normal" />
        leukogramPage = <li><b><FormattedMessage id="leukogram" /></b> {leukogram}</li>
    } else if (props.leukogram === 1) {
        leukogram = <FormattedMessage id="changed" />
        leukogramPage = (<li><b><FormattedMessage id="leukogram" /></b> {leukogram}
            <ul>
                <li><b><FormattedMessage id="change" /></b> {props.leukogram_change ? props.leukogram_change : "---"}</li>
            </ul>
        </li>)
    } else {
        leukogram = <FormattedMessage id="not-filled" />;
        leukogramPage = <li><b><FormattedMessage id="leukogram" /></b> {leukogram}</li>
    };

    let chronicPage = null;
    if (props.has_chronic_disease === 0) {
        has_chronic_disease = <FormattedMessage id="no" />
        chronicPage = <li><b><FormattedMessage id="has-disease" /></b> {has_chronic_disease}</li>
    } else if (props.has_chronic_disease === 1) {
        has_chronic_disease = <FormattedMessage id="yes" />
        chronicPage = (
            <li><b><FormattedMessage id="has-disease" /></b> {has_chronic_disease}
                <ul>
                    <li><b><FormattedMessage id="chronic-diseases" /></b> {props.chronic_diseases ? props.chronic_diseases : no_answer}</li>
                </ul>
            </li>
        )
    } else {
        has_chronic_disease = <FormattedMessage id="not-answer" />
        chronicPage = <li><b><FormattedMessage id="has-disease" /></b> {has_chronic_disease}</li>
    };

    let medsPage = null;
    if (props.takes_meds === 0) {
        takes_meds = <FormattedMessage id="no" />
        medsPage = <p><b><FormattedMessage id="take-meds" /></b> {takes_meds}</p>
    } else if (props.takes_meds === 1) {
        takes_meds = <FormattedMessage id="yes" />
        medsPage = (
            <Aux>
                <p><b><FormattedMessage id="take-meds" /></b> {takes_meds}</p>
                <ul className="list-unstyled">
                    <li><b><FormattedMessage id="meds-number" /></b> {props.meds_number ? props.meds_number : no_answer}
                        <ul>
                            <li><b><FormattedMessage id="meds-name" /></b> {props.meds_value ? props.meds_value : no_answer}</li>
                        </ul>
                    </li>
                </ul>
            </Aux>
        )
    } else {
        takes_meds = <FormattedMessage id="not-answer" />
        medsPage = <p><b><FormattedMessage id="take-meds" /></b> {takes_meds}</p>
    };

    let physicalPage = null;
    if (props.physical_activity === 0) {
        physical_activity = <FormattedMessage id="no" />
        physicalPage = <p><b><FormattedMessage id="practice-physical" /></b> {physical_activity}</p>;
    } else if (props.physical_activity === 1) {
        physical_activity = <FormattedMessage id="yes" />
        physicalPage = (
            <Aux>
                <p><b><FormattedMessage id="practice-physical" /></b> {physical_activity}</p>
                <p><b><FormattedMessage id="physical-name" /></b> {props.activity_name ? props.activity_name : no_answer}</p>
                <p><b><FormattedMessage id="physical-hours" /></b> {props.activity_hours ? props.activity_hours : no_answer}</p>
            </Aux>
        )
    } else {
        physical_activity = <FormattedMessage id="not-answer" />;
        physicalPage = <p><b><FormattedMessage id="practice-physical" /></b> {physical_activity}</p>;
    };

    let painPage = null;
    if (props.pain === 'Não tem dor' || props.pain === "No pain") {
        painPage = <p><b><FormattedMessage id="pain" /></b> {props.pain ? props.pain : no_answer}</p>
    } else {
        painPage = (
            <Aux>
                <p><b><FormattedMessage id="pain" /></b> {props.pain ? props.pain : no_answer}</p>
                <p><b><FormattedMessage id="pain-local" /></b> {props.local_pain ? props.local_pain : no_answer}</p>
                <p><b><FormattedMessage id="pain-scale" /></b> {props.pain_scale ? props.pain_scale : no_answer}</p>
            </Aux>
        )
    };

    let smoker = null;
    if (props.is_smoker === 'Fumador' || props.is_smoker === 'Smoker') {
        smoker = (
            <Aux>
                <p><b><FormattedMessage id="smoker-status" /></b> {props.is_smoker ? props.is_smoker : no_answer}</p>
                <p><b><FormattedMessage id="regularity" /></b> {props.smoke_frequencie ? props.smoke_frequencie : no_answer}</p>
                <p><b><FormattedMessage id="average-number" /></b> {props.weekly_smokes ? props.weekly_smokes : no_answer}</p>
            </Aux>
        )
    } else {
        smoker = (
            <p><b><FormattedMessage id="smoker-status" /></b> {props.is_smoker ? props.is_smoker : no_answer}</p>
        )
    };

    let alcoholPage = null;
    if (props.alcohol === 0) {
        alcohol = <FormattedMessage id="not-consume" />;
        alcoholPage = <p><b><FormattedMessage id="alcohol" /></b> {alcohol}</p>
    } else if (props.alcohol === 1) {
        alcoholPage = (
            <Aux>
                <ul className="list-unstyled">
                    <li><b><FormattedMessage id="alcohol" /></b>
                        <ul>
                            <li><b><FormattedMessage id="beers" /></b> {props.beer ? props.beer : no_answer}</li>
                            <li><b><FormattedMessage id="spirit_drinks" /></b> {props.spirit_drinks ? props.spirit_drinks : no_answer}</li>
                            <li><b><FormattedMessage id="wine" /></b> {props.wine ? props.wine : no_answer}</li>
                        </ul>
                    </li>
                </ul>
            </Aux>
        )
    } else {
        alcohol = <FormattedMessage id="not-answer" />;
        alcoholPage = <p><b><FormattedMessage id="alcohol" /></b>{alcohol}</p>
    };

    return (
        <div className="container">
            <div className="accordion mt-5" id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-secondary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <FormattedMessage id="socio-demographic" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <p><b><FormattedMessage id="gender" /></b> {props.gender ? props.gender : no_answer}</p>
                            <p><b><FormattedMessage id="department" /></b> {props.department ? props.department : no_answer}</p>
                            <p><b><FormattedMessage id="age" /></b> {props.age ? props.age : no_answer}</p>
                            <p><b><FormattedMessage id="marital-status" /></b> {props.marital_status ? props.marital_status : no_answer}</p>
                            <p><b><FormattedMessage id="academic" /></b> {props.academic_level ? props.academic_level : no_answer}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed text-secondary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <FormattedMessage id="smoking-health" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            {smoker}
                            <p><b><FormattedMessage id="health-opinion" /></b> {props.health_opinion ? props.health_opinion : no_answer}</p>
                            <p><b><FormattedMessage id="weight" /></b> {props.weight ? props.weight : no_answer}</p>
                            <p><b><FormattedMessage id="height" /></b> {props.height ? props.height : no_answer}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed text-secondary" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <FormattedMessage id="diseases-pain" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                {chronicPage}
                            </ul>
                            {medsPage}
                            {painPage}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed text-secondary" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <FormattedMessage id="eating-habits" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                            <p><b><FormattedMessage id="meals" /></b> {props.meals ? props.meals : no_answer}</p>
                            <p><b><FormattedMessage id="breakfast" /></b> {props.breakfast ? props.breakfast : no_answer}</p>
                            <p><b><FormattedMessage id="fruit" /></b> {props.fruit ? props.fruit : no_answer}</p>
                            <p><b><FormattedMessage id="vegetables" /></b> {props.vegetables ? props.vegetables : no_answer}</p>
                            <p><b><FormattedMessage id="sodas" /></b> {props.sodas ? props.sodas : no_answer}</p>
                            <p><b><FormattedMessage id="fast-food" /></b> {props.fast_food ? props.fast_food : no_answer}</p>
                            {alcoholPage}
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingFive">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed text-secondary" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <FormattedMessage id="physical-exercise" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div className="card-body">
                            {physicalPage}
                            <p><b><FormattedMessage id="walking-cycling" /></b> {props.walking_cycling ? props.walking_cycling : no_answer}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingSix">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed text-secondary" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <FormattedMessage id="diagnostic-exams" />
                            </button>
                        </h5>
                    </div>
                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li><b><FormattedMessage id="cardiac-cycle" /></b>
                                    <ul>
                                        <li><b><FormattedMessage id="systolic" /></b> {props.systolic} mmHg</li>
                                        <li><b><FormattedMessage id="diastolic" /></b> {props.diastolic} mmHg</li>
                                        <li><b><FormattedMessage id="pulse" /></b> {props.pulse} ppm</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><b><FormattedMessage id="biochemistry" /></b>
                                    <ul>
                                        <li><b><FormattedMessage id="uric-acid" /></b> {props.uric_acid} mg/dl</li>
                                        <li><b><FormattedMessage id="glucose" /></b> {props.glicose} mg/dl</li>
                                        <li><b><FormattedMessage id="cholestrol" /></b> {props.cholesterol} mg/dl</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                {spirometryPage}
                            </ul>
                            <ul className="list-unstyled">
                                {visualPage}
                            </ul>
                            <ul className="list-unstyled">
                                {auditoryPage}
                            </ul>
                            <ul className="list-unstyled">
                                {ecgPage}
                            </ul>
                            <ul className="list-unstyled">
                                {eritrogramPage}
                            </ul>
                            <ul className="list-unstyled">
                                {leukogramPage}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default codeData;