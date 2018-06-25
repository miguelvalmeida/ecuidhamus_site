import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, barOptionsLegend, pieOptions, bgColors } from '../../utility/chartsOptions';

class indicator1 extends Component {
    fetchData() {
        this.props.fetchGender(this.props.department, this.props.year);
        this.props.fetchGenderByAge(this.props.department, this.props.year);
        this.props.fetchAge(this.props.department, this.props.year);
        this.props.fetchAgeByGender(this.props.department, this.props.year);
        this.props.fetchMarital(this.props.department, this.props.year);
        this.props.fetchMaritalByGender(this.props.department, this.props.year);
        this.props.fetchMaritalByAge(this.props.department, this.props.year);
        this.props.fetchAcademic(this.props.department, this.props.year);
        this.props.fetchAcademicByGender(this.props.department, this.props.year);
        this.props.fetchAcademicByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year) || (prevProps.isSelected !== this.props.isSelected)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    componentDidMount() {
        this.props.fetchGenderValues();
        this.props.fetchAgeValues();
        this.props.fetchChartAgesValues();
        this.props.fetchAcademicValues();
        this.props.fetchMaritalValues();
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const ageLabels = this.props.ageValues.map(a => a.value);
        const academicLabels = this.props.academicValues.map(a => a.value);
        const maritalLabels = this.props.maritalValues.map(m => m.value);

        //gender by age
        const genderAgeArray = [].concat(...this.props.gender_age);
        genderAgeArray.splice(-1, 1);
        const gendermap = genderAgeArray.map(w => w.total);
        const genderAgeTotal = gendermap.reduce((a, b) => a + b, 0);
        const genderIds = genderAgeArray.map(a => a.id);
        const genderMax = Math.max(...genderIds);
        let genderAgeObject = {};
        for (let i = 1; i <= genderMax; i++) {
            const filter = genderAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.genders_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            genderAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const genderAgeData = Object.keys(genderAgeObject).map(key => {
            return genderAgeObject[key];
        });

        //age by gender
        const ageGenderArray = [].concat(...this.props.age_gender);
        ageGenderArray.splice(-1, 1);
        const ageGendermap = ageGenderArray.map(w => w.total);
        const ageGenderTotal = ageGendermap.reduce((a, b) => a + b, 0);
        const ageIds = ageGenderArray.map(a => a.id);
        const ageMax = Math.max(...ageIds);
        let ageGenderObject = {};
        for (let i = 1; i <= ageMax; i++) {
            const filter = ageGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.ages_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            ageGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const ageGenderData = Object.keys(ageGenderObject).map(key => {
            return ageGenderObject[key];
        });

        //marital by gender
        const maritalGenderArray = [].concat(...this.props.marital_gender);
        maritalGenderArray.splice(-1, 1);
        const maritalGendermap = maritalGenderArray.map(w => w.total);
        const maritalGenderTotal = maritalGendermap.reduce((a, b) => a + b, 0);
        const maritalIds = maritalGenderArray.map(a => a.id);
        const maritalMax = Math.max(...maritalIds);
        let maritalGenderObject = {};
        for (let i = 1; i <= maritalMax; i++) {
            const filter = maritalGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.marital_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            maritalGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const maritalGenderData = Object.keys(maritalGenderObject).map(key => {
            return maritalGenderObject[key];
        });

        //marital by age
        const maritalAgeArray = [].concat(...this.props.marital_age);
        maritalAgeArray.splice(-1, 1);
        const maritalAgemap = maritalAgeArray.map(w => w.total);
        const maritalAgeTotal = maritalAgemap.reduce((a, b) => a + b, 0);
        const maritalAgeIds = maritalAgeArray.map(a => a.id);
        const maritalAgeMax = Math.max(...maritalAgeIds);
        let maritalAgeObject = {};
        for (let i = 1; i <= maritalAgeMax; i++) {
            const filter = maritalAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.marital_status_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            maritalAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const maritalAgeData = Object.keys(maritalAgeObject).map(key => {
            return maritalAgeObject[key];
        });

        //academic by gender
        const academicGenderArray = [].concat(...this.props.academic_gender);
        academicGenderArray.splice(-1, 1);
        const academicGendermap = academicGenderArray.map(w => w.total);
        const academicGenderTotal = academicGendermap.reduce((a, b) => a + b, 0);
        const academicIds = academicGenderArray.map(a => a.id);
        const academicMax = Math.max(...academicIds);
        let academicGenderObject = {};
        for (let i = 1; i <= academicMax; i++) {
            const filter = academicGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.academic_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            academicGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const academicGenderData = Object.keys(academicGenderObject).map(key => {
            return academicGenderObject[key];
        });

        //academic by age
        const academicAgeArray = [].concat(...this.props.academic_age);
        academicAgeArray.splice(-1, 1);
        const academicAgemap = academicAgeArray.map(w => w.total);
        const academicAgeTotal = academicAgemap.reduce((a, b) => a + b, 0);
        const academicAgeIds = academicAgeArray.map(a => a.id);
        const academicAgeMax = Math.max(...academicAgeIds);
        let academicAgeObject = {};
        for (let i = 1; i <= academicAgeMax; i++) {
            const filter = academicAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.academic_levels_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            academicAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const academicAgeData = Object.keys(academicAgeObject).map(key => {
            return academicAgeObject[key];
        });

        let genderChart, maritalChart, academicChart, ageChart, genderData, ageData, maritalData, academicData = null;
        let genderTotal = this.props.gender.total;
        let ageTotal = this.props.age.total;
        let maritalTotal = this.props.marital.total;
        let academicTotal = this.props.academic.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                genderData = {
                    labels: genderLabels,
                    datasets: [
                        {
                            data: [
                                this.props.gender.male_percentage,
                                this.props.gender.female_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ageData = {
                    labels: ageLabels,
                    datasets: [
                        {
                            data: [
                                this.props.age.ages_1_percentage,
                                this.props.age.ages_2_percentage,
                                this.props.age.ages_3_percentage,
                                this.props.age.ages_4_percentage,
                                this.props.age.ages_5_percentage,
                                this.props.age.ages_6_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                maritalData = {
                    labels: maritalLabels,
                    datasets: [
                        {
                            data: [
                                this.props.marital.marital_1_percentage,
                                this.props.marital.marital_2_percentage,
                                this.props.marital.marital_3_percentage,
                                this.props.marital.marital_4_percentage,
                                this.props.marital.marital_5_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                academicData = {
                    labels: academicLabels,
                    datasets: [
                        {
                            data: [
                                this.props.academic.academic_1_percentage,
                                this.props.academic.academic_2_percentage,
                                this.props.academic.academic_3_percentage,
                                this.props.academic.academic_4_percentage,
                                this.props.academic.academic_5_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                genderChart = (<Pie data={genderData} width={350} height={350} options={pieOptions} />);
                ageChart = (<Pie data={ageData} width={350} height={350} options={pieOptions} />);
                maritalChart = (<Pie data={maritalData} width={350} height={350} options={pieOptions} />);
                academicChart = (<Pie data={academicData} width={350} height={350} options={pieOptions} />);
                break;

            case ('option2'):
                genderData = {
                    labels: genderLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.gender.gender_male,
                                this.props.gender.gender_female
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ageData = {
                    labels: ageLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.age.ages_1,
                                this.props.age.ages_2,
                                this.props.age.ages_3,
                                this.props.age.ages_4,
                                this.props.age.ages_5,
                                this.props.age.ages_6,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                maritalData = {
                    labels: maritalLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.marital.marital_1,
                                this.props.marital.marital_2,
                                this.props.marital.marital_3,
                                this.props.marital.marital_4,
                                this.props.marital.marital_5
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                academicData = {
                    labels: academicLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.academic.academic_1,
                                this.props.academic.academic_2,
                                this.props.academic.academic_3,
                                this.props.academic.academic_4,
                                this.props.academic.academic_5
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                genderChart = (<Bar data={genderData} width={350} height={350} options={barOptions} />);
                ageChart = (<Bar data={ageData} width={350} height={350} options={barOptions} />);
                maritalChart = (<Bar data={maritalData} width={350} height={350} options={barOptions} />);
                academicChart = (<Bar data={academicData} width={350} height={350} options={barOptions} />);
                break;

            case ('option3'):
                ageTotal = ageGenderTotal;
                maritalTotal = maritalGenderTotal;
                academicTotal = academicGenderTotal;
                genderData = {
                    labels: genderLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.gender.gender_male,
                                this.props.gender.gender_female
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ageData = {
                    labels: genderLabels,
                    datasets: ageGenderData
                };

                maritalData = {
                    labels: genderLabels,
                    datasets: maritalGenderData
                };

                academicData = {
                    labels: genderLabels,
                    datasets: academicGenderData
                };

                genderChart = (<Bar data={genderData} width={350} height={350} options={barOptions} />);
                ageChart = (<Bar data={ageData} width={350} height={350} options={barOptionsLegend} />);
                maritalChart = (<Bar data={maritalData} width={350} height={350} options={barOptionsLegend} />);
                academicChart = (<Bar data={academicData} width={350} height={350} options={barOptionsLegend} />);
                break;

            case ('option4'):
                genderTotal = genderAgeTotal;
                maritalTotal = maritalAgeTotal;
                academicTotal = academicAgeTotal;
                genderData = {
                    labels: chartAgesLabels,
                    datasets: genderAgeData
                };

                ageData = {
                    labels: ageLabels,
                    datasets: [
                        {
                            data: [
                                this.props.age.ages_1_percentage,
                                this.props.age.ages_2_percentage,
                                this.props.age.ages_3_percentage,
                                this.props.age.ages_4_percentage,
                                this.props.age.ages_5_percentage,
                                this.props.age.ages_6_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                maritalData = {
                    labels: chartAgesLabels,
                    datasets: maritalAgeData
                };

                academicData = {
                    labels: chartAgesLabels,
                    datasets: academicAgeData
                };

                genderChart = (<Bar data={genderData} width={350} height={350} options={barOptionsLegend} />);
                ageChart = (<Bar data={ageData} width={350} height={350} options={barOptions} />);
                maritalChart = (<Bar data={maritalData} width={350} height={350} options={barOptionsLegend} />);
                academicChart = (<Bar data={academicData} width={350} height={350} options={barOptionsLegend} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="gender2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {genderTotal}</small></div>
                        {genderChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="age2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {ageTotal}</small></div>
                        {ageChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="marital2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {maritalTotal}</small></div>
                        {maritalChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="academic2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {academicTotal}</small></div>
                        {academicChart}
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gender: state.general_indicators.gender,
        gender_age: state.by_age.gender_age,
        age: state.general_indicators.age,
        age_gender: state.by_gender.age_gender,
        marital: state.general_indicators.marital,
        marital_gender: state.by_gender.marital_gender,
        marital_age: state.by_age.marital_age,
        academic: state.general_indicators.academic,
        academic_gender: state.by_gender.academic_gender,
        academic_age: state.by_age.academic_age,
        genderValues: state.fetchRefValues.genderValues,
        chartAgesValues: state.fetchRefValues.chartAgesValues,
        ageValues: state.fetchRefValues.ageValues,
        academicValues: state.fetchRefValues.academicValues,
        maritalValues: state.fetchRefValues.maritalValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGender: (department, year) => dispatch(actions.fetchGender(department, year)),
        fetchGenderByAge: (department, year) => dispatch(actions.fetchGenderByAge(department, year)),
        fetchAge: (department, year) => dispatch(actions.fetchAge(department, year)),
        fetchAgeByGender: (department, year) => dispatch(actions.fetchAgesByGender(department, year)),
        fetchMarital: (department, year) => dispatch(actions.fetchMaritalStatus(department, year)),
        fetchMaritalByGender: (department, year) => dispatch(actions.fetchMaritalByGender(department, year)),
        fetchMaritalByAge: (department, year) => dispatch(actions.fetchMaritalByAge(department, year)),
        fetchAcademic: (department, year) => dispatch(actions.fetchAcademic(department, year)),
        fetchAcademicByGender: (department, year) => dispatch(actions.fetchAcademicByGender(department, year)),
        fetchAcademicByAge: (department, year) => dispatch(actions.fetchAcademicByAge(department, year)),
        fetchGenderValues: () => dispatch(actions.fetchGenderValues()),
        fetchAgeValues: () => dispatch(actions.fetchAgeValues()),
        fetchChartAgesValues: () => dispatch(actions.fetchChartAgesValues()),
        fetchAcademicValues: () => dispatch(actions.fetchAcademicValues()),
        fetchMaritalValues: () => dispatch(actions.fetchMaritalValues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator1);