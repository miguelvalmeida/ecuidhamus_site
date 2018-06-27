import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import CodeData from '../../components/CodeData';
import Spinner from '../../components/UI/Spinner';
import Modal from '../../components/UI/Modal';
import Alert from '../../components/UI/Alert';
import Success from '../../components/UI/Success';
import Aux from '../../hoc/auxi';

class CodeInfo extends Component {
    componentDidMount() {
        this.props.fetchCodeData(this.props.match.params.code)
    };

    componentWillUnmount() {
        this.props.codeRemoveMessage()
    };

    onConfirmHandler = () => {
        this.props.deleteCode(this.props.match.params.code)
    };

    render() {
        let editBtn = null;
        let classname = "btn btn-danger float-right";
        if (this.props.completed === 0) {
            editBtn = (
                <Link to={'/edit/' + this.props.match.params.code} className="no-decoration">
                    <button type="button" className="btn btn-warning mr-3 float-left btn-lg"><FormattedMessage id="edit-button" /></button>
                </Link>
            )
            classname = "btn btn-danger float-left";
        };

        let codeData = (
            <Aux>
                <CodeData
                    gender={this.props.codeData.dados1.gender}
                    department={this.props.codeData.dados1.department}
                    age={this.props.codeData.dados1.age}
                    marital_status={this.props.codeData.dados1.marital_status}
                    academic_level={this.props.codeData.dados1.academic_level}
                    is_smoker={this.props.codeData.dados2.smoker}
                    smoke_frequencie={this.props.codeData.dados2.smoke_frequencie}
                    weekly_smokes={this.props.codeData.dados2.weekly_smokes}
                    health_opinion={this.props.codeData.dados2.health_opinion}
                    weight={this.props.codeData.dados2.weight}
                    height={this.props.codeData.dados2.height}
                    has_chronic_disease={this.props.codeData.dados3.chronic_disease}
                    chronic_diseases={this.props.codeData.dados3.chronic_diseases}
                    takes_meds={this.props.codeData.dados3.takes_meds}
                    meds_number={this.props.codeData.dados3.meds_number}
                    meds_value={this.props.codeData.dados3.meds_value}
                    pain={this.props.codeData.dados3.pain}
                    local_pain={this.props.codeData.dados3.local_pain}
                    pain_scale={this.props.codeData.dados3.pain_scale}
                    meals={this.props.codeData.dados4.meals}
                    breakfast={this.props.codeData.dados4.breakfast}
                    fruit={this.props.codeData.dados4.fruit}
                    vegetables={this.props.codeData.dados4.vegetables}
                    sodas={this.props.codeData.dados4.sodas}
                    fast_food={this.props.codeData.dados4.fast_food}
                    alcohol={this.props.codeData.dados4.alcohol}
                    beer={this.props.codeData.dados4.beers}
                    spirit_drinks={this.props.codeData.dados4.spirit_drinks}
                    wine={this.props.codeData.dados4.wine}
                    physical_activity={this.props.codeData.dados5.physical_activity}
                    activity_name={this.props.codeData.dados5.physical_activity_name}
                    activity_hours={this.props.codeData.dados5.physical_activity_hours}
                    walking_cycling={this.props.codeData.dados5.walking_cycling}
                    systolic={this.props.codeData.dados6.systolic_blood_pressure}
                    diastolic={this.props.codeData.dados6.diastolic_blood_pressure}
                    pulse={this.props.codeData.dados6.pulse}
                    uric_acid={this.props.codeData.dados6.uric_acid}
                    glicose={this.props.codeData.dados6.glucose}
                    cholesterol={this.props.codeData.dados6.total_cholesterol}
                    spirometry={this.props.codeData.dados6.spirometry}
                    spirometry_change={this.props.codeData.dados6.spirometry_change}
                    visual_screening={this.props.codeData.dados6.visual_screening}
                    visual_screening_change={this.props.codeData.dados6.visual_screening_change}
                    auditory={this.props.codeData.dados6.auditory_screening}
                    auditory_change={this.props.codeData.dados6.auditory_screening_change}
                    ecg={this.props.codeData.dados6.ecg}
                    ecg_change={this.props.codeData.dados6.ecg_change}
                    eritrogram={this.props.codeData.dados6.eritrogram}
                    eritrogram_change={this.props.codeData.dados6.eritrogram_change}
                    leukogram={this.props.codeData.dados6.leukogram}
                    leukogram_change={this.props.codeData.dados6.leukogram_change}
                />
                <div className="container mt-2">
                    {editBtn}
                    <Modal
                        class={classname}
                        btnText={<FormattedMessage id="delete" />}
                        title={<FormattedMessage id="delete-code" />}
                        modalText={<FormattedMessage id="delete-message" />}
                        action={<FormattedMessage id="delete" />}
                        confirm={this.onConfirmHandler}
                    />
                </div>
            </Aux>
        );

        if (this.props.loading) {
            codeData = <Spinner />
        };

        let message = null;
        if (this.props.deleteStatus === 0) {
            message = <Alert text={this.props.deleteMessage} />
        };

        let deleteRedirect = null;
        if (this.props.deleteStatus === 1) {
            deleteRedirect = <Redirect to="/codes" />
        };

        let redirect = null;
        if (this.props.status === 0) {
            redirect = <Redirect to="/" />
        };

        if (this.props.location.state && this.props.location.state.message) {
            message = <Success text={this.props.location.state.message} />
        };

        return (
            <Aux>
                <div className="text-center">
                    {message}
                </div>
                {codeData}
                {deleteRedirect}
                {redirect}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        codeData: state.fetchCodeData.codeData,
        loading: state.fetchCodeData.loading,
        status: state.fetchCodeData.status,
        completed: state.fetchCodeData.completed,
        deleteMessage: state.deleteCode.message,
        deleteStatus: state.deleteCode.status,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCodeData: (code) => dispatch(actions.fetchCodeData(code)),
        deleteCode: (code) => dispatch(actions.deleteCode(code)),
        codeRemoveMessage: () => dispatch(actions.codeRemoveMessage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeInfo);