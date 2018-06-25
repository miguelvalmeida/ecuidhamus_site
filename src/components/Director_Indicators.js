import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import SelectDepartment from './UI/PersonalSelect';
import SelectDate from './UI/Select';
import WeightIndicator from '../containers/director_indicators/weight';
import SbpIndicator from '../containers/director_indicators/sbp';
import DbpIndicator from '../containers/director_indicators/dbp';
import PulseIndicator from '../containers/director_indicators/pulse';
import UricAcidIndicator from '../containers/director_indicators/uricAcid';
import GlucoseIndicator from '../containers/director_indicators/glucose';
import CholesterolIndicator from '../containers/director_indicators/cholesterol';
import axios from '../axios';

class personal_indicators extends Component {
    state = {
        department: 0,
        date: 0,
        date2: 0,
        maxDate: 0,
        isSelected1: true,
        isSelected2: false,
        isSelected3: false,
        isSelected4: false,
        isSelected5: false,
        isSelected6: false,
        isSelected7: false
    };

    componentDidMount() {
        this.props.fetchDepartments();
        this.props.fetchDates();
        if (localStorage.getItem('department') !== null) {
            this.setState({ department: localStorage.getItem('department') });
        };
        axios.get('ref_values/dates/')
            .then(response => {
                const array = response.data.dates.results.map(year => year.year);
                const minYear = Math.min(...array);
                const maxYear = Math.max(...array);
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    total += array[i];
                };
                const avg = Math.round(total / array.length);
                this.setState({ date: minYear, date2: avg, maxDate: maxYear });
            })
            .catch(err => {
                console.log(err);
            })
    };

    onSelectChangeHandler = (event) => {
        this.setState({ department: event.target.value });
    };

    onSelectDate1ChangeHandler = (event) => {
        this.setState({ date: event.target.value });
        if (event.target.value > this.state.date2) {
            this.setState((prevState) => ({
                date2: parseInt(prevState.date, 10) + 1
            }));
        };
        if (event.target.value === this.state.maxDate.toString()) {
            this.setState({ date2: event.target.value  });
        };
    };

    onSelectDate2ChangeHandler = (event) => {
        this.setState({ date2: event.target.value });
    };

    onclick1 = () => {
        this.setState({ isSelected1: true, isSelected2: false, isSelected3: false, isSelected4: false, isSelected5: false, isSelected6: false, isSelected7: false });
    };
    onclick2 = () => {
        this.setState({ isSelected1: false, isSelected2: true, isSelected3: false, isSelected4: false, isSelected5: false, isSelected6: false, isSelected7: false });
    };
    onclick3 = () => {
        this.setState({ isSelected1: false, isSelected2: false, isSelected3: true, isSelected4: false, isSelected5: false, isSelected6: false, isSelected7: false });
    };
    onclick4 = () => {
        this.setState({ isSelected1: false, isSelected2: false, isSelected3: false, isSelected4: true, isSelected5: false, isSelected6: false, isSelected7: false });
    };
    onclick5 = () => {
        this.setState({ isSelected1: false, isSelected2: false, isSelected3: false, isSelected4: false, isSelected5: true, isSelected6: false, isSelected7: false });
    };
    onclick6 = () => {
        this.setState({ isSelected1: false, isSelected2: false, isSelected3: false, isSelected4: false, isSelected5: false, isSelected6: true, isSelected7: false });
    };
    onclick7 = () => {
        this.setState({ isSelected1: false, isSelected2: false, isSelected3: false, isSelected4: false, isSelected5: false, isSelected6: false, isSelected7: true });
    };

    render() {
        let select_dates = null;
        select_dates = this.props.dates.map(date => {
            return (
                <option value={date.year} key={date.year}>{date.year}</option>
            )
        });

        let yearArray = this.props.dates.map(date => date.year);

        let selectedYearFilter = yearArray.filter((year) => { return year >= this.state.date });

        let select_dates2 = null;
        select_dates2 = selectedYearFilter.map(date => {
            return (
                <option value={date} key={date}>{date}</option>
            )
        });

        let select = null;
        select = this.props.departments.map(department => {
            return (
                <option value={department.id_departments_services_schools} key={department.id_departments_services_schools}>{department.value}</option>
            )
        });

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-1-list" data-toggle="list" href="#list-1" role="tab" aria-controls="1" onClick={this.onclick1}><FormattedMessage id="weight2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-2-list" data-toggle="list" href="#list-2" role="tab" aria-controls="2" onClick={this.onclick2}><FormattedMessage id="systolic2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-3-list" data-toggle="list" href="#list-3" role="tab" aria-controls="3" onClick={this.onclick3}><FormattedMessage id="diastolic2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-4-list" data-toggle="list" href="#list-4" role="tab" aria-controls="4" onClick={this.onclick4}><FormattedMessage id="pulse2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-5-list" data-toggle="list" href="#list-5" role="tab" aria-controls="5" onClick={this.onclick5}><FormattedMessage id="uric-acid2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-6-list" data-toggle="list" href="#list-6" role="tab" aria-controls="6" onClick={this.onclick6}><FormattedMessage id="glucose2" /></a>
                            <a className="list-group-item list-group-item-action" id="list-7-list" data-toggle="list" href="#list-7" role="tab" aria-controls="7" onClick={this.onclick7}><FormattedMessage id="cholesterol2" /></a>
                        </div>
                    </div>
                    <div className="col-lg-9" style={{ margin: "auto" }}>
                        <SelectDepartment options={select} change={this.onSelectChangeHandler} default={this.state.department} />
                        <SelectDate options1={select_dates} changeDate1={this.onSelectDate1ChangeHandler} options2={select_dates2} changeDate2={this.onSelectDate2ChangeHandler} selected={this.state.date2} />
                        <p className="font-weight-light"><small><FormattedMessage id="legends-tooltip" /></small></p>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
                                <WeightIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected1} />
                            </div>
                            <div className="tab-pane fade" id="list-2" role="tabpanel" aria-labelledby="list-2-list">
                                <SbpIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected2} />
                            </div>
                            <div className="tab-pane fade" id="list-3" role="tabpanel" aria-labelledby="list-3-list">
                                <DbpIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected3} />
                            </div>
                            <div className="tab-pane fade" id="list-4" role="tabpanel" aria-labelledby="list-4-list">
                                <PulseIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected4} />
                            </div>
                            <div className="tab-pane fade" id="list-5" role="tabpanel" aria-labelledby="list-5-list">
                                <UricAcidIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected5} />
                            </div>
                            <div className="tab-pane fade" id="list-6" role="tabpanel" aria-labelledby="list-6-list">
                                <GlucoseIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected6} />
                            </div>
                            <div className="tab-pane fade" id="list-7" role="tabpanel" aria-labelledby="list-7-list">
                                <CholesterolIndicator department={this.state.department} date={this.state.date} date2={this.state.date2} isSelected={this.state.isSelected7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        departments: state.fetchRefValues.departments,
        dates: state.fetchRefValues.dates,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDepartments: () => dispatch(actions.fetchDepartments()),
        fetchDates: () => dispatch(actions.fetchDates()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(personal_indicators);