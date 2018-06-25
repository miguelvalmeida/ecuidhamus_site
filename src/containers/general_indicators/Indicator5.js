import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, pieOptions, bgColors, barOptionsLegend } from '../../utility/chartsOptions';

class indicator5 extends Component {
    fetchData() {
        this.props.fetchPhysicalActivity(this.props.department, this.props.year);
        this.props.fetchPhysicalActivityByGender(this.props.department, this.props.year);
        this.props.fetchPhysicalActivityByAge(this.props.department, this.props.year);
        this.props.fetchPhysicalHours(this.props.department, this.props.year);
        this.props.fetchPhysicalHoursByGender(this.props.department, this.props.year);
        this.props.fetchPhysicalHoursByAge(this.props.department, this.props.year);
        this.props.fetchWalkingCycling(this.props.department, this.props.year);
        this.props.fetchWalkingCyclingByGender(this.props.department, this.props.year);
        this.props.fetchWalkingCyclingByAge(this.props.department, this.props.year);
        this.props.fetchPhysicalValues(this.props.department, this.props.year);
        this.props.fetchPhysicalValuesByGender(this.props.department, this.props.year);
        this.props.fetchPhysicalValuesByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
            this.props.fetchPhysicalHoursValues();
            this.props.fetchWalkingCyclingValues();
            this.props.fetchPhysicalActivityValues();
        };

        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const physicalHoursLabels = this.props.physicalHoursValues.map(phv => phv.value);
        const physicalValuesLabels = this.props.physicalActivityValues.map(pav => pav.value);
        const walkingCyclingLabels = this.props.walkingCyclingValues.map(wcv => wcv.value);

        let yesNoLabels = null;
        if (localStorage.getItem('language') === "pt") {
            yesNoLabels = ["Não", "Sim"]
        } else {
            yesNoLabels = ["No", "Yes"]
        };

        //physical activity by gender
        const physicalActivityGenderArray = [].concat(...this.props.physicalActivity_gender);
        physicalActivityGenderArray.splice(-1, 1);
        const physicalactivitygendermap = physicalActivityGenderArray.map(w => w.total);
        const physicalActivityGenderTotal = physicalactivitygendermap.reduce((a, b) => a + b, 0);
        let physicalActivityGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = physicalActivityGenderArray.filter(a => a.physical_activity === i);
            const total = filter.map(a => a.total);
            physicalActivityGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalActivityGenderData = Object.keys(physicalActivityGenderObject).map(key => {
            return physicalActivityGenderObject[key];
        });

        //physical activity by age
        const physicalActivityAgeArray = [].concat(...this.props.physicalActivity_age);
        physicalActivityAgeArray.splice(-1, 1);
        const physicalactivityagemap = physicalActivityAgeArray.map(w => w.total);
        const physicalActivityAgeTotal = physicalactivityagemap.reduce((a, b) => a + b, 0);
        let physicalActivityAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = physicalActivityAgeArray.filter(a => a.physical_activity === i);
            const total = filter.map(a => a.total);
            physicalActivityAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalActivityAgeData = Object.keys(physicalActivityAgeObject).map(key => {
            return physicalActivityAgeObject[key];
        });

        //physical values by gender
        const physicalValuesGenderArray = [].concat(...this.props.physicalValues_gender);
        physicalValuesGenderArray.splice(-1, 1);
        const physicalvaluesgendermap = physicalValuesGenderArray.map(w => w.total);
        const physicalValuesGenderTotal = physicalvaluesgendermap.reduce((a, b) => a + b, 0);
        const physicalValuesIds = physicalValuesGenderArray.map(a => a.id);
        const physicalValuesMax = Math.max(...physicalValuesIds);
        let physicalValuesGenderObject = {};
        for (let i = 1; i <= physicalValuesMax; i++) {
            const filter = physicalValuesGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.physical_activity_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            physicalValuesGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalValuesGenderData = Object.keys(physicalValuesGenderObject).map(key => {
            return physicalValuesGenderObject[key];
        });

        //physical values by age
        const physicalValuesAgeArray = [].concat(...this.props.physicalValues_age);
        physicalValuesAgeArray.splice(-1, 1);
        const physicalvaluesagemap = physicalValuesAgeArray.map(w => w.total);
        const physicalValuesAgeTotal = physicalvaluesagemap.reduce((a, b) => a + b, 0);
        const physicalValuesAgeIds = physicalValuesAgeArray.map(a => a.id);
        const physicalValuesAgeMax = Math.max(...physicalValuesAgeIds);
        let physicalValuesAgeObject = {};
        for (let i = 1; i <= physicalValuesAgeMax; i++) {
            const filter = physicalValuesAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.physical_activity_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            physicalValuesAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalValuesAgeData = Object.keys(physicalValuesAgeObject).map(key => {
            return physicalValuesAgeObject[key];
        });

        //physical hours by gender
        const physicalHoursGenderArray = [].concat(...this.props.physicalHours_gender);
        physicalHoursGenderArray.splice(-1, 1);
        const physicalhoursgendermap = physicalHoursGenderArray.map(w => w.total);
        const physicalHoursGenderTotal = physicalhoursgendermap.reduce((a, b) => a + b, 0);
        const physicalHoursIds = physicalHoursGenderArray.map(a => a.id);
        const physicalHoursMax = Math.max(...physicalHoursIds);
        let physicalHoursGenderObject = {};
        for (let i = 1; i <= physicalHoursMax; i++) {
            const filter = physicalHoursGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.physical_activity_hours);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            physicalHoursGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalHoursGenderData = Object.keys(physicalHoursGenderObject).map(key => {
            return physicalHoursGenderObject[key];
        });

        //physical_hours by age
        const physicalHoursAgeArray = [].concat(...this.props.physicalHours_age);
        physicalHoursAgeArray.splice(-1, 1);
        const physicalhoursagemap = physicalHoursAgeArray.map(w => w.total);
        const physicalHoursAgeTotal = physicalhoursagemap.reduce((a, b) => a + b, 0);
        const physicalHoursAgeIds = physicalHoursAgeArray.map(a => a.id);
        const physicalHoursAgeMax = Math.max(...physicalHoursAgeIds);
        let physicalHoursAgeObject = {};
        for (let i = 1; i <= physicalHoursAgeMax; i++) {
            const filter = physicalHoursAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.physical_activity_hours);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            physicalHoursAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const physicalHoursAgeData = Object.keys(physicalHoursAgeObject).map(key => {
            return physicalHoursAgeObject[key];
        });

        //walking cycling by gender
        const walkingCyclingGenderArray = [].concat(...this.props.walkingCycling_gender);
        walkingCyclingGenderArray.splice(-1, 1);
        const walkingcyclinggendermap = walkingCyclingGenderArray.map(w => w.total);
        const walkingCyclingGenderTotal = walkingcyclinggendermap.reduce((a, b) => a + b, 0);
        const walkingCyclingIds = walkingCyclingGenderArray.map(a => a.id);
        const walkingCyclingMax = Math.max(...walkingCyclingIds);
        let walkingCyclingGenderObject = {};
        for (let i = 1; i <= walkingCyclingMax; i++) {
            const filter = walkingCyclingGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.walking_cycling_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            walkingCyclingGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const walkingCyclingGenderData = Object.keys(walkingCyclingGenderObject).map(key => {
            return walkingCyclingGenderObject[key];
        });

        //walking cycling by age
        const walkingCyclingAgeArray = [].concat(...this.props.walkingCycling_age);
        walkingCyclingAgeArray.splice(-1, 1);
        const walkingcyclingagemap = walkingCyclingAgeArray.map(w => w.total);
        const walkingCyclingAgeTotal = walkingcyclingagemap.reduce((a, b) => a + b, 0);
        const walkingCyclingAgeIds = walkingCyclingAgeArray.map(a => a.id);
        const walkingCyclingAgeMax = Math.max(...walkingCyclingAgeIds);
        let walkingCyclingAgeObject = {};
        for (let i = 1; i <= walkingCyclingAgeMax; i++) {
            const filter = walkingCyclingAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.walking_cycling_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            walkingCyclingAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const walkingCyclingAgeData = Object.keys(walkingCyclingAgeObject).map(key => {
            return walkingCyclingAgeObject[key];
        });

        let physicalActivityChart, physicalValuesChart, physicalHoursChart, walkingCyclingChart, physicalActivityData, physicalValuesData, physicalHoursData, walkingCyclingData = null;
        let physicalActivityTotal = this.props.physical_activity.total;
        let physicalValuesTotal = this.props.physical_values.total;
        let physicalHoursTotal = this.props.physical_hours.total;
        let walkingCyclingTotal = this.props.walking_cycling.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                physicalActivityData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.physical_activity.physical_activity_0_percentage,
                                this.props.physical_activity.physical_activity_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalValuesData = {
                    labels: physicalValuesLabels,
                    datasets: [
                        {
                            data: [
                                this.props.physical_values.physical_value_1_percentage,
                                this.props.physical_values.physical_value_2_percentage,
                                this.props.physical_values.physical_value_3_percentage,
                                this.props.physical_values.physical_value_4_percentage,
                                this.props.physical_values.physical_value_5_percentage,
                                this.props.physical_values.physical_value_6_percentage,
                                this.props.physical_values.physical_value_7_percentage,
                                this.props.physical_values.physical_value_8_percentage,
                                this.props.physical_values.physical_value_9_percentage,
                                this.props.physical_values.physical_value_10_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalHoursData = {
                    labels: physicalHoursLabels,
                    datasets: [
                        {
                            data: [
                                this.props.physical_hours.physical_hours_1_percentage,
                                this.props.physical_hours.physical_hours_2_percentage,
                                this.props.physical_hours.physical_hours_3_percentage,
                                this.props.physical_hours.physical_hours_4_percentage,
                                this.props.physical_hours.physical_hours_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                walkingCyclingData = {
                    labels: walkingCyclingLabels,
                    datasets: [
                        {
                            data: [
                                this.props.walking_cycling.walking_cycling_1_percentage,
                                this.props.walking_cycling.walking_cycling_2_percentage,
                                this.props.walking_cycling.walking_cycling_3_percentage,
                                this.props.walking_cycling.walking_cycling_4_percentage,
                                this.props.walking_cycling.walking_cycling_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalActivityChart = (<Pie data={physicalActivityData} width={350} height={350} options={pieOptions} />);
                physicalValuesChart = (<Pie data={physicalValuesData} width={350} height={350} options={pieOptions} />);
                physicalHoursChart = (<Pie data={physicalHoursData} width={350} height={350} options={pieOptions} />);
                walkingCyclingChart = (<Pie data={walkingCyclingData} width={350} height={350} options={pieOptions} />);
                break;

            case ('option2'):
                physicalActivityData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.physical_activity.physical_activity_0,
                                this.props.physical_activity.physical_activity_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalValuesData = {
                    labels: physicalValuesLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.physical_values.physical_value_1,
                                this.props.physical_values.physical_value_2,
                                this.props.physical_values.physical_value_3,
                                this.props.physical_values.physical_value_4,
                                this.props.physical_values.physical_value_5,
                                this.props.physical_values.physical_value_6,
                                this.props.physical_values.physical_value_7,
                                this.props.physical_values.physical_value_8,
                                this.props.physical_values.physical_value_9,
                                this.props.physical_values.physical_value_10,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalHoursData = {
                    labels: physicalHoursLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.physical_hours.physical_hours_1,
                                this.props.physical_hours.physical_hours_2,
                                this.props.physical_hours.physical_hours_3,
                                this.props.physical_hours.physical_hours_4,
                                this.props.physical_hours.physical_hours_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                walkingCyclingData = {
                    labels: walkingCyclingLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.walking_cycling.walking_cycling_1,
                                this.props.walking_cycling.walking_cycling_2,
                                this.props.walking_cycling.walking_cycling_3,
                                this.props.walking_cycling.walking_cycling_4,
                                this.props.walking_cycling.walking_cycling_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                physicalActivityChart = (<Bar data={physicalActivityData} width={350} height={350} options={barOptions} />);
                physicalValuesChart = (<Bar data={physicalValuesData} width={350} height={350} options={barOptions} />);
                physicalHoursChart = (<Bar data={physicalHoursData} width={350} height={350} options={barOptions} />);
                walkingCyclingChart = (<Bar data={walkingCyclingData} width={350} height={350} options={barOptions} />);
                break;

            case ('option3'):
                physicalActivityTotal = physicalActivityGenderTotal;
                physicalValuesTotal = physicalValuesGenderTotal;
                physicalHoursTotal = physicalHoursGenderTotal;
                walkingCyclingTotal = walkingCyclingGenderTotal;

                physicalActivityData = {
                    labels: genderLabels,
                    datasets: physicalActivityGenderData
                };

                physicalValuesData = {
                    labels: genderLabels,
                    datasets: physicalValuesGenderData
                };

                physicalHoursData = {
                    labels: genderLabels,
                    datasets: physicalHoursGenderData
                };

                walkingCyclingData = {
                    labels: genderLabels,
                    datasets: walkingCyclingGenderData
                };

                physicalActivityChart = (<Bar data={physicalActivityData} width={350} height={350} options={barOptionsLegend} />);
                physicalValuesChart = (<Bar data={physicalValuesData} width={350} height={350} options={barOptionsLegend} />);
                physicalHoursChart = (<Bar data={physicalHoursData} width={350} height={350} options={barOptionsLegend} />);
                walkingCyclingChart = (<Bar data={walkingCyclingData} width={350} height={350} options={barOptionsLegend} />);
                break;

            case ('option4'):
                physicalActivityTotal = physicalActivityAgeTotal;
                physicalValuesTotal = physicalValuesAgeTotal;
                physicalHoursTotal = physicalHoursAgeTotal;
                walkingCyclingTotal = walkingCyclingAgeTotal;

                physicalActivityData = {
                    labels: chartAgesLabels,
                    datasets: physicalActivityAgeData
                };

                physicalValuesData = {
                    labels: chartAgesLabels,
                    datasets: physicalValuesAgeData
                };

                physicalHoursData = {
                    labels: chartAgesLabels,
                    datasets: physicalHoursAgeData
                };

                walkingCyclingData = {
                    labels: chartAgesLabels,
                    datasets: walkingCyclingAgeData
                };

                physicalActivityChart = (<Bar data={physicalActivityData} width={350} height={350} options={barOptionsLegend} />);
                physicalValuesChart = (<Bar data={physicalValuesData} width={350} height={350} options={barOptionsLegend} />);
                physicalHoursChart = (<Bar data={physicalHoursData} width={350} height={350} options={barOptionsLegend} />);
                walkingCyclingChart = (<Bar data={walkingCyclingData} width={350} height={350} options={barOptionsLegend} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="practice-physical2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {physicalActivityTotal}</small></div>
                        {physicalActivityChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="physical-exercise" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {physicalValuesTotal}</small></div>
                        {physicalValuesChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="physical-hours2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {physicalHoursTotal}</small></div>
                        {physicalHoursChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="walking-cycling2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {walkingCyclingTotal}</small></div>
                        {walkingCyclingChart}
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        genderValues: state.fetchRefValues.genderValues,
        chartAgesValues: state.fetchRefValues.chartAgesValues,
        physical_activity: state.general_indicators.physical_activity,
        physicalActivity_gender: state.by_gender.physicalActivity_gender,
        physicalActivity_age: state.by_age.physicalActivity_age,
        physical_values: state.general_indicators.physical_values,
        physicalValues_gender: state.by_gender.physicalValues_gender,
        physicalValues_age: state.by_age.physicalValues_age,
        physical_hours: state.general_indicators.physical_hours,
        physicalHours_gender: state.by_gender.physicalHours_gender,
        physicalHours_age: state.by_age.physicalHours_age,
        walking_cycling: state.general_indicators.walking_cycling,
        walkingCycling_gender: state.by_gender.walkingCycling_gender,
        walkingCycling_age: state.by_age.walkingCycling_age,
        physicalHoursValues: state.fetchRefValues.physicalHoursValues,
        walkingCyclingValues: state.fetchRefValues.walkingCyclingValues,
        physicalActivityValues: state.fetchRefValues.physicalActivityValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhysicalActivity: (department, year) => dispatch(actions.fetchPhysicalActivity(department, year)),
        fetchPhysicalActivityByGender: (department, year) => dispatch(actions.fetchPhysicalActivityByGender(department, year)),
        fetchPhysicalActivityByAge: (department, year) => dispatch(actions.fetchPhysicalActivityByAge(department, year)),
        fetchPhysicalValues: (department, year) => dispatch(actions.fetchPhysicalActivityValues(department, year)),
        fetchPhysicalValuesByGender: (department, year) => dispatch(actions.fetchPhysicalValuesByGender(department, year)),
        fetchPhysicalValuesByAge: (department, year) => dispatch(actions.fetchPhysicalValuesByAge(department, year)),
        fetchPhysicalHours: (department, year) => dispatch(actions.fetchPhysicalHours(department, year)),
        fetchPhysicalHoursByGender: (department, year) => dispatch(actions.fetchPhysicalHoursByGender(department, year)),
        fetchPhysicalHoursByAge: (department, year) => dispatch(actions.fetchPhysicalHoursByAge(department, year)),
        fetchWalkingCycling: (department, year) => dispatch(actions.fetchWalkingCycling(department, year)),
        fetchWalkingCyclingByGender: (department, year) => dispatch(actions.fetchWalkingCyclingByGender(department, year)),
        fetchWalkingCyclingByAge: (department, year) => dispatch(actions.fetchWalkingCyclingByAge(department, year)),
        fetchPhysicalHoursValues: () => dispatch(actions.fetchPhysicalHoursValues()),
        fetchPhysicalActivityValues: () => dispatch(actions.fetchPhysicalValues()),
        fetchWalkingCyclingValues: () => dispatch(actions.fetchWalkingCyclingValues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator5);