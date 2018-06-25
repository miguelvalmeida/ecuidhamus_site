import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import Select from './UI/SelectDepartments';
import Indicator1 from '../containers/general_indicators/Indicator1';
import Indicator2 from '../containers/general_indicators/Indicator2';
import Indicator3 from '../containers/general_indicators/Indicator3';
import Indicator4 from '../containers/general_indicators/Indicator4';
import Indicator5 from '../containers/general_indicators/Indicator5';
import Indicator6 from '../containers/general_indicators/Indicator6';
import Indicator7 from '../containers/general_indicators/Indicator7';
import axios from '../axios';


class indicators extends Component {
    state = {
        department: 0,
        year: null,
        selectedOption: 'option1',
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
        this.props.fetchMinYear();
        this.props.fetchMaxYear();
        axios.get('ref_values/dates/')
            .then(response => {
                const array = response.data.dates.results.map(year => year.year);
                const minYear = Math.min(...array);
                const maxYear = Math.max(...array);
                this.setState({ year: minYear + ',' + maxYear });
            })
            .catch(err => {
                console.log(err);
            })
    };

    onSelectDepartmentChangeHandler = (event) => {
        this.setState({ department: event.target.value });
    };

    onSelectYearChangeHandler = (event) => {
        this.setState({ year: event.target.value });
    };

    onRadioChangeHandler = (event) => {
        this.setState({ selectedOption: event.target.value });
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
        let selectDepartments = null;
        selectDepartments = this.props.departments.map(department => {
            return (
                <option value={department.id_departments_services_schools} key={department.id_departments_services_schools}>{department.value}</option>
            )
        });

        let selectYear = null;
        selectYear = this.props.dates.map(date => {
            return (
                <option value={date.year + ',' + date.year} key={date.year}>{date.year}</option>
            )
        });

        let initalyears = this.props.minYear.min_year + ',' + this.props.maxYear.max_year;

        let titles = {
            pie_chart: <FormattedMessage id="pie-chart" />,
            bar_chart: <FormattedMessage id="bar-chart" />
        };

        if (this.state.isSelected6) {
            titles = {
                pie_chart: <FormattedMessage id="histogram" />,
                bar_chart: <FormattedMessage id="histogram" />
            }
        };

        if (this.state.isSelected6 && this.state.selectedOption === 'option2') {
            this.setState({ selectedOption: 'option1' });
        };

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-1-list" data-toggle="list" href="#list-1" role="tab" aria-controls="1" onClick={this.onclick1}><FormattedMessage id="socio-demographic" /></a>
                            <a className="list-group-item list-group-item-action" id="list-2-list" data-toggle="list" href="#list-2" role="tab" aria-controls="2" onClick={this.onclick2}><FormattedMessage id="smoking-health" /></a>
                            <a className="list-group-item list-group-item-action" id="list-3-list" data-toggle="list" href="#list-3" role="tab" aria-controls="3" onClick={this.onclick3}><FormattedMessage id="diseases-pain" /></a>
                            <a className="list-group-item list-group-item-action" id="list-4-list" data-toggle="list" href="#list-4" role="tab" aria-controls="4" onClick={this.onclick4}><FormattedMessage id="eating-habits" /></a>
                            <a className="list-group-item list-group-item-action" id="list-5-list" data-toggle="list" href="#list-5" role="tab" aria-controls="5" onClick={this.onclick5}><FormattedMessage id="physical-exercise" /></a>
                            <a className="list-group-item list-group-item-action" id="list-6-list" data-toggle="list" href="#list-6" role="tab" aria-controls="6" onClick={this.onclick6}><FormattedMessage id="physiological-data" /></a>
                            <a className="list-group-item list-group-item-action" id="list-7-list" data-toggle="list" href="#list-7" role="tab" aria-controls="7" onClick={this.onclick7}><FormattedMessage id="diagnostic-exams" /></a>
                        </div>
                    </div>
                    <div className="col-lg-9" style={{ margin: "auto" }}>
                        <Select options={selectDepartments} change={this.onSelectDepartmentChangeHandler} default={this.state.department} />
                        <div className="form-group">
                            <select className="form-control col-sm-2 mt-2" id="exampleFormControlSelect1" onChange={this.onSelectYearChangeHandler} defaultValue={this.state.year}>
                                <option value={initalyears}><FormattedMessage id="all-years" /></option>
                                {selectYear}
                            </select>
                        </div>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.onRadioChangeHandler} />
                                <label className="form-check-label" htmlFor="inlineRadio1">{titles.pie_chart}</label>
                            </div>
                            {this.state.isSelected6 ? null : <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.onRadioChangeHandler} />
                                <label className="form-check-label" htmlFor="inlineRadio2">{titles.bar_chart}</label>
                            </div>}
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.onRadioChangeHandler} />
                                <label className="form-check-label" htmlFor="inlineRadio3"><FormattedMessage id="by-gender" /></label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" checked={this.state.selectedOption === 'option4'} onChange={this.onRadioChangeHandler} />
                                <label className="form-check-label" htmlFor="inlineRadio4"><FormattedMessage id="by-ages" /></label>
                            </div>
                        </div>
                        <p className="font-weight-light mt-2"><small><FormattedMessage id="legends-tooltip" /></small></p>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
                                <Indicator1 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected1} />
                            </div>
                            <div className="tab-pane fade" id="list-2" role="tabpanel" aria-labelledby="list-2-list">
                                <Indicator2 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected2} />
                            </div>
                            <div className="tab-pane fade" id="list-3" role="tabpanel" aria-labelledby="list-3-list">
                                <Indicator3 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected3} />
                            </div>
                            <div className="tab-pane fade" id="list-4" role="tabpanel" aria-labelledby="list-4-list">
                                <Indicator4 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected4} />
                            </div>
                            <div className="tab-pane fade" id="list-5" role="tabpanel" aria-labelledby="list-5-list">
                                <Indicator5 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected5} />
                            </div>
                            <div className="tab-pane fade" id="list-6" role="tabpanel" aria-labelledby="list-6-list">
                                <Indicator6 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected6} />
                            </div>
                            <div className="tab-pane fade" id="list-7" role="tabpanel" aria-labelledby="list-7-list">
                                <Indicator7 department={this.state.department} year={this.state.year} selectedOption={this.state.selectedOption} isSelected={this.state.isSelected7} />
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
        minYear: state.fetchRefValues.minYear,
        maxYear: state.fetchRefValues.maxYear,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDepartments: () => dispatch(actions.fetchDepartments()),
        fetchDates: () => dispatch(actions.fetchDates()),
        fetchMinYear: () => dispatch(actions.fetchMinYear()),
        fetchMaxYear: () => dispatch(actions.fetchMaxYear()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicators);