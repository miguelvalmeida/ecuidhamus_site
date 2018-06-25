import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, barOptionsLegend, pieOptions, WeightHistogramOptions, HeighthistogramOptions, bgColors } from '../../utility/chartsOptions';

class indicator2 extends Component {
    fetchData() {
        this.props.fetchSmokerStatus(this.props.department, this.props.year);
        this.props.fetchSmokerStatusByGender(this.props.department, this.props.year);
        this.props.fetchSmokerStatusByAge(this.props.department, this.props.year);
        this.props.fetchSmokerFrequencie(this.props.department, this.props.year);
        this.props.fetchSmokerFrequencieByGender(this.props.department, this.props.year);
        this.props.fetchSmokerFrequencieByAge(this.props.department, this.props.year);
        this.props.fetchSmokerNumber(this.props.department, this.props.year);
        this.props.fetchSmokerNumberByGender(this.props.department, this.props.year);
        this.props.fetchSmokerNumberByAge(this.props.department, this.props.year);
        this.props.fetchHealthOpinions(this.props.department, this.props.year);
        this.props.fetchHealthOpinionsByGender(this.props.department, this.props.year);
        this.props.fetchHealthOpinionsByAge(this.props.department, this.props.year);
        this.props.fetchWeight(this.props.department, this.props.year);
        this.props.fetchWeightByGender(this.props.department, this.props.year);
        this.props.fetchWeightByAge(this.props.department, this.props.year);
        this.props.fetchHeight(this.props.department, this.props.year);
        this.props.fetchHeightByGender(this.props.department, this.props.year);
        this.props.fetchHeightByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
            this.props.fetchSmokerStatusValues();
            this.props.fetchSmokerFrequencieValues();
            this.props.fetchSmokerNumberValues();
            this.props.fetchHealthOpinionsValues();
        };
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const smokerStatusLabels = this.props.smokerStatusValues.map(ss => ss.value);
        const smokerFrequencieLabels = this.props.smokerFrequencieValues.map(sf => sf.value);
        const smokerNumberLabels = this.props.smokerNumberValues.map(sn => sn.value);
        const healthOpinionsLabels = this.props.healthOpinionsValues.map(ho => ho.value);
        const weightDataValues = this.props.weight.map(w => w.value);
        const weightLabels = this.props.weight.map(w => w.weight);
        const heightDataValues = this.props.height.map(w => w.value);
        const heightLabels = this.props.height.map(w => w.height);
        let weightTotal = weightDataValues.reduce((a, b) => a + b, 0);
        let heightTotal = heightDataValues.reduce((a, b) => a + b, 0);

        //smoker status by gender
        const smokerStatusGenderArray = [].concat(...this.props.smokerStatus_gender);
        smokerStatusGenderArray.splice(-1, 1);
        const smokerstatusgendermap = smokerStatusGenderArray.map(w => w.total);
        const smokerStatusGenderTotal = smokerstatusgendermap.reduce((a, b) => a + b, 0);
        const smokerStatusIds = smokerStatusGenderArray.map(a => a.id);
        const smokerStatusMax = Math.max(...smokerStatusIds);
        let smokerStatusGenderObject = {};
        for (let i = 1; i <= smokerStatusMax; i++) {
            const filter = smokerStatusGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.smoker_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            smokerStatusGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const smokerStatusGenderData = Object.keys(smokerStatusGenderObject).map(key => {
            return smokerStatusGenderObject[key];
        });

        //smoker status by age
        const smokerStatusAgeArray = [].concat(...this.props.smokerStatus_age);
        smokerStatusAgeArray.splice(-1, 1);
        const smokerstatusagemap = smokerStatusAgeArray.map(w => w.total);
        const smokerStatusAgeTotal = smokerstatusagemap.reduce((a, b) => a + b, 0);
        const smokerStatusAgeIds = smokerStatusAgeArray.map(a => a.id);
        const smokerStatusAgeMax = Math.max(...smokerStatusAgeIds);
        let smokerStatusAgeObject = {};
        for (let i = 1; i <= smokerStatusAgeMax; i++) {
            const filter = smokerStatusAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.smoker_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            smokerStatusAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const smokerStatusAgeData = Object.keys(smokerStatusAgeObject).map(key => {
            return smokerStatusAgeObject[key];
        });

        //smoker frequencies by gender
        const smokerFrequenciesGenderArray = [].concat(...this.props.smokerFrequencies_gender);
        smokerFrequenciesGenderArray.splice(-1, 1);
        const smokerfrequenciesgendermap = smokerFrequenciesGenderArray.map(w => w.total);
        const smokerFrequenciesGenderTotal = smokerfrequenciesgendermap.reduce((a, b) => a + b, 0);
        const smokerFrequenciesIds = smokerFrequenciesGenderArray.map(a => a.id);
        const smokerFrequenciesMax = Math.max(...smokerFrequenciesIds);
        let smokerFrequenciesGenderObject = {};
        for (let i = 1; i <= smokerFrequenciesMax; i++) {
            const filter = smokerFrequenciesGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.frequencie_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            smokerFrequenciesGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const smokerFrequenciesGenderData = Object.keys(smokerFrequenciesGenderObject).map(key => {
            return smokerFrequenciesGenderObject[key];
        });

        //smoker frequencies by age
        const smokerFrequenciesAgeArray = [].concat(...this.props.smokerFrequencies_age);
        smokerFrequenciesAgeArray.splice(-1, 1);
        const smokerfrequenciesagemap = smokerFrequenciesAgeArray.map(w => w.total);
        const smokerFrequenciesAgeTotal = smokerfrequenciesagemap.reduce((a, b) => a + b, 0);
        const smokerFrequenciesAgeIds = smokerFrequenciesAgeArray.map(a => a.id);
        const smokerFrequenciesAgeMax = Math.max(...smokerFrequenciesAgeIds);
        let smokerFrequenciesAgeObject = {};
        for (let i = 1; i <= smokerFrequenciesAgeMax; i++) {
            const filter = smokerFrequenciesAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.smoker_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            smokerFrequenciesAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const smokerFrequenciesAgeData = Object.keys(smokerFrequenciesAgeObject).map(key => {
            return smokerFrequenciesAgeObject[key];
        });

        //smoker number by gender
        const weeklyNumberGenderArray = [].concat(...this.props.weeklyNumber_gender);
        weeklyNumberGenderArray.splice(-1, 1);
        const smokernumbergendermap = weeklyNumberGenderArray.map(w => w.total);
        const smokerNumberGenderTotal = smokernumbergendermap.reduce((a, b) => a + b, 0);
        const weeklyNumberIds = weeklyNumberGenderArray.map(a => a.id);
        const weeklyNumberMax = Math.max(...weeklyNumberIds);
        let weeklyNumberGenderObject = {};
        for (let i = 1; i <= weeklyNumberMax; i++) {
            const filter = weeklyNumberGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.daily_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            weeklyNumberGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const weeklyNumberGenderData = Object.keys(weeklyNumberGenderObject).map(key => {
            return weeklyNumberGenderObject[key];
        });

        //smoker number by age
        const weeklyNumberAgeArray = [].concat(...this.props.weeklyNumber_age);
        weeklyNumberAgeArray.splice(-1, 1);
        const smokernumberagemap = weeklyNumberAgeArray.map(w => w.total);
        const smokerNumberAgeTotal = smokernumberagemap.reduce((a, b) => a + b, 0);
        const weeklyNumberAgeIds = weeklyNumberAgeArray.map(a => a.id);
        const weeklyNumberAgeMax = Math.max(...weeklyNumberAgeIds);
        let weeklyNumberAgeObject = {};
        for (let i = 1; i <= weeklyNumberAgeMax; i++) {
            const filter = weeklyNumberAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.smoker_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            weeklyNumberAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const weeklyNumberAgeData = Object.keys(weeklyNumberAgeObject).map(key => {
            return weeklyNumberAgeObject[key];
        });

        //health opinions by gender
        const healthOpinionsGenderArray = [].concat(...this.props.healthOpinions_gender);
        healthOpinionsGenderArray.splice(-1, 1);
        const healthopinionsgendermap = healthOpinionsGenderArray.map(w => w.total);
        const healthOpinionsGenderTotal = healthopinionsgendermap.reduce((a, b) => a + b, 0);
        const healthOpinionsIds = healthOpinionsGenderArray.map(a => a.id);
        const healthOpinionsMax = Math.max(...healthOpinionsIds);
        let healthOpinionsGenderObject = {};
        for (let i = 1; i <= healthOpinionsMax; i++) {
            const filter = healthOpinionsGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.opinion_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            healthOpinionsGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const healthOpinionsGenderData = Object.keys(healthOpinionsGenderObject).map(key => {
            return healthOpinionsGenderObject[key];
        });

        //health opinions by age
        const healthOpinionsAgeArray = [].concat(...this.props.healthOpinions_age);
        healthOpinionsAgeArray.splice(-1, 1);
        const healthopinionsagemap = healthOpinionsAgeArray.map(w => w.total);
        const healthOpinionsAgeTotal = healthopinionsagemap.reduce((a, b) => a + b, 0);
        const healthOpinionsAgeIds = healthOpinionsAgeArray.map(a => a.id);
        const healthOpinionsAgeMax = Math.max(...healthOpinionsAgeIds);
        let healthOpinionsAgeObject = {};
        for (let i = 1; i <= healthOpinionsAgeMax; i++) {
            const filter = healthOpinionsAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.health_opinions_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            healthOpinionsAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const healthOpinionsAgeData = Object.keys(healthOpinionsAgeObject).map(key => {
            return healthOpinionsAgeObject[key];
        });

        //weight by gender
        const weightGenderArray = [].concat(...this.props.weight_gender);
        weightGenderArray.splice(-1, 1);
        const weightgendermap = weightGenderArray.map(w => w.valor);
        const weightGenderTotal = weightgendermap.reduce((a, b) => a + b, 0);
        const weightIds = weightGenderArray.map(a => a.id);
        const weightMax = Math.max(...weightIds);
        let weightGenderObject = {};
        for (let i = 1; i <= weightMax; i++) {
            const filter = weightGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.valor);
            const labels = filter.map(a => a.weight);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            weightGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const weightGenderData = Object.keys(weightGenderObject).map(key => {
            return weightGenderObject[key];
        });
        weightGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //weight by age
        const weightAgeArray = [].concat(...this.props.weight_age);
        weightAgeArray.splice(-1, 1);
        const weightagemap = weightAgeArray.map(w => w.valor);
        const weightAgeTotal = weightagemap.reduce((a, b) => a + b, 0);
        const weightAgeIds = weightAgeArray.map(a => a.id);
        const weightAgeMax = Math.max(...weightAgeIds);
        let weightAgeObject = {};
        for (let i = 1; i <= weightAgeMax; i++) {
            const filter = weightAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.valor);
            const labels = filter.map(a => a.weight);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            weightAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const weightAgeData = Object.keys(weightAgeObject).map(key => {
            return weightAgeObject[key];
        });
        weightAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //height by gender
        const heightGenderArray = [].concat(...this.props.height_gender);
        heightGenderArray.splice(-1, 1);
        const heightgendermap = heightGenderArray.map(w => w.valor);
        const heightGenderTotal = heightgendermap.reduce((a, b) => a + b, 0);
        const heightIds = heightGenderArray.map(a => a.id);
        const heightMax = Math.max(...heightIds);
        let heightGenderObject = {};
        for (let i = 1; i <= heightMax; i++) {
            const filter = heightGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.valor);
            const labels = filter.map(a => a.height);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            heightGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const heightGenderData = Object.keys(heightGenderObject).map(key => {
            return heightGenderObject[key];
        });
        heightGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //height by age
        const heightAgeArray = [].concat(...this.props.height_age);
        heightAgeArray.splice(-1, 1);
        const heightagemap = heightAgeArray.map(w => w.valor);
        const heightAgeTotal = heightagemap.reduce((a, b) => a + b, 0);
        const heightAgeIds = heightAgeArray.map(a => a.id);
        const heightAgeMax = Math.max(...heightAgeIds);
        let heightAgeObject = {};
        for (let i = 1; i <= heightAgeMax; i++) {
            const filter = heightAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.valor);
            const labels = filter.map(a => a.height);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            heightAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const heightAgeData = Object.keys(heightAgeObject).map(key => {
            return heightAgeObject[key];
        });
        heightAgeData.sort((a, b) => {
            return a.label - b.label
        });

        let smokerStatusChart, smokerFrequencieChart, smokerNumberChart, healthOpinionsChart, weightChart, heightChart, smokerStatusData, smokerFrequencieData, smokerNumberData, healthOpinionsData, weightData, heightData = null;
        let smokerStatusTotal = this.props.smoker_status.total;
        let smokerFrequencieTotal = this.props.smoker_frequencie.total;
        let smokerNumberTotal = this.props.smoker_number.total;
        let healthOpinionsTotal = this.props.health_opinions.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                smokerStatusData = {
                    labels: smokerStatusLabels,
                    datasets: [
                        {
                            data: [
                                this.props.smoker_status.smoker_1_percentage,
                                this.props.smoker_status.smoker_2_percentage,
                                this.props.smoker_status.smoker_3_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                smokerFrequencieData = {
                    labels: smokerFrequencieLabels,
                    datasets: [
                        {
                            data: [
                                this.props.smoker_frequencie.frequencies_1_percentage,
                                this.props.smoker_frequencie.frequencies_2_percentage,
                                this.props.smoker_frequencie.frequencies_3_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                smokerNumberData = {
                    labels: smokerNumberLabels,
                    datasets: [
                        {
                            data: [
                                this.props.smoker_number.weekly_1_percentage,
                                this.props.smoker_number.weekly_2_percentage,
                                this.props.smoker_number.weekly_3_percentage,
                                this.props.smoker_number.weekly_4_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                healthOpinionsData = {
                    labels: healthOpinionsLabels,
                    datasets: [
                        {
                            data: [
                                this.props.health_opinions.health_1_percentage,
                                this.props.health_opinions.health_2_percentage,
                                this.props.health_opinions.health_3_percentage,
                                this.props.health_opinions.health_4_percentage,
                                this.props.health_opinions.health_5_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                weightData = {
                    labels: weightLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: weightDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                heightData = {
                    labels: heightLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: heightDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                smokerStatusChart = (<Pie data={smokerStatusData} width={350} height={350} options={pieOptions} />);
                smokerFrequencieChart = (<Pie data={smokerFrequencieData} width={350} height={350} options={pieOptions} />);
                smokerNumberChart = (<Pie data={smokerNumberData} width={350} height={350} options={pieOptions} />);
                healthOpinionsChart = (<Pie data={healthOpinionsData} width={350} height={350} options={pieOptions} />);
                weightChart = (<Bar data={weightData} width={350} height={350} options={WeightHistogramOptions} />);
                heightChart = (<Bar data={heightData} width={350} height={350} options={HeighthistogramOptions} />);
                break;

            case ('option2'):
                smokerStatusData = {
                    labels: smokerStatusLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.smoker_status.smoker_1,
                                this.props.smoker_status.smoker_2,
                                this.props.smoker_status.smoker_3
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                smokerFrequencieData = {
                    labels: smokerFrequencieLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.smoker_frequencie.frequencies_1,
                                this.props.smoker_frequencie.frequencies_2,
                                this.props.smoker_frequencie.frequencies_3,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                smokerNumberData = {
                    labels: smokerNumberLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.smoker_number.weekly_1,
                                this.props.smoker_number.weekly_2,
                                this.props.smoker_number.weekly_3,
                                this.props.smoker_number.weekly_4,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                healthOpinionsData = {
                    labels: healthOpinionsLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.health_opinions.health_1,
                                this.props.health_opinions.health_2,
                                this.props.health_opinions.health_3,
                                this.props.health_opinions.health_4,
                                this.props.health_opinions.health_5
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                weightData = {
                    labels: weightLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: weightDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                heightData = {
                    labels: heightLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: heightDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                smokerStatusChart = (<Bar data={smokerStatusData} width={350} height={350} options={barOptions} />);
                smokerFrequencieChart = (<Bar data={smokerFrequencieData} width={350} height={350} options={barOptions} />);
                smokerNumberChart = (<Bar data={smokerNumberData} width={350} height={350} options={barOptions} />);
                healthOpinionsChart = (<Bar data={healthOpinionsData} width={350} height={350} options={barOptions} />);
                weightChart = (<Bar data={weightData} width={350} height={350} options={WeightHistogramOptions} />);
                heightChart = (<Bar data={heightData} width={350} height={350} options={HeighthistogramOptions} />);
                break;

            case ('option3'):
                smokerStatusTotal = smokerStatusGenderTotal;
                smokerFrequencieTotal = smokerFrequenciesGenderTotal;
                smokerNumberTotal = smokerNumberGenderTotal;
                healthOpinionsTotal = healthOpinionsGenderTotal;
                weightTotal = weightGenderTotal;
                heightTotal = heightGenderTotal;

                smokerStatusData = {
                    labels: genderLabels,
                    datasets: smokerStatusGenderData
                };

                smokerFrequencieData = {
                    labels: genderLabels,
                    datasets: smokerFrequenciesGenderData
                };

                smokerNumberData = {
                    labels: genderLabels,
                    datasets: weeklyNumberGenderData
                };

                healthOpinionsData = {
                    labels: genderLabels,
                    datasets: healthOpinionsGenderData
                };

                weightData = {
                    labels: genderLabels,
                    datasets: weightGenderData
                };

                heightData = {
                    labels: genderLabels,
                    datasets: heightGenderData
                };

                smokerStatusChart = (<Bar data={smokerStatusData} width={350} height={350} options={barOptionsLegend} />);
                smokerFrequencieChart = (<Bar data={smokerFrequencieData} width={350} height={350} options={barOptionsLegend} />);
                smokerNumberChart = (<Bar data={smokerNumberData} width={350} height={350} options={barOptionsLegend} />);
                healthOpinionsChart = (<Bar data={healthOpinionsData} width={350} height={350} options={barOptionsLegend} />);
                weightChart = (<Bar data={weightData} width={350} height={350} options={WeightHistogramOptions} />);
                heightChart = (<Bar data={heightData} width={350} height={350} options={HeighthistogramOptions} />);
                break;

            case ('option4'):
                smokerStatusTotal = smokerStatusAgeTotal;
                smokerFrequencieTotal = smokerFrequenciesAgeTotal;
                smokerNumberTotal = smokerNumberAgeTotal;
                healthOpinionsTotal = healthOpinionsAgeTotal;
                weightTotal = weightAgeTotal;
                heightTotal = heightAgeTotal;

                smokerStatusData = {
                    labels: chartAgesLabels,
                    datasets: smokerStatusAgeData
                };

                smokerFrequencieData = {
                    labels: chartAgesLabels,
                    datasets: smokerFrequenciesAgeData
                };

                smokerNumberData = {
                    labels: chartAgesLabels,
                    datasets: weeklyNumberAgeData
                };

                healthOpinionsData = {
                    labels: chartAgesLabels,
                    datasets: healthOpinionsAgeData
                };

                weightData = {
                    labels: chartAgesLabels,
                    datasets: weightAgeData
                };

                heightData = {
                    labels: chartAgesLabels,
                    datasets: heightAgeData
                };

                smokerStatusChart = (<Bar data={smokerStatusData} width={350} height={350} options={barOptionsLegend} />);
                smokerFrequencieChart = (<Bar data={smokerFrequencieData} width={350} height={350} options={barOptionsLegend} />);
                smokerNumberChart = (<Bar data={smokerNumberData} width={350} height={350} options={barOptionsLegend} />);
                healthOpinionsChart = (<Bar data={healthOpinionsData} width={350} height={350} options={barOptionsLegend} />);
                weightChart = (<Bar data={weightData} width={350} height={350} options={WeightHistogramOptions} />);
                heightChart = (<Bar data={heightData} width={350} height={350} options={HeighthistogramOptions} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="smoker-status2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {smokerStatusTotal}</small></div>
                        {smokerStatusChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="regularity2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {smokerFrequencieTotal}</small></div>
                        {smokerFrequencieChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="average-number2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {smokerNumberTotal}</small></div>
                        {smokerNumberChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="health-opinion2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {healthOpinionsTotal}</small></div>
                        {healthOpinionsChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="weight2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {weightTotal}</small></div>
                        {weightChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="height2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {heightTotal}</small></div>
                        {heightChart}
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
        smoker_status: state.general_indicators.smoker_status,
        smokerStatus_gender: state.by_gender.smokerStatus_gender,
        smokerStatus_age: state.by_age.smokerStatus_age,
        smoker_frequencie: state.general_indicators.smoker_frequencie,
        smokerFrequencies_gender: state.by_gender.smokerFrequencies_gender,
        smokerFrequencies_age: state.by_age.smokerFrequencies_age,
        smoker_number: state.general_indicators.smoker_number,
        weeklyNumber_gender: state.by_gender.weeklyNumber_gender,
        weeklyNumber_age: state.by_age.weeklyNumber_age,
        health_opinions: state.general_indicators.health_opinions,
        healthOpinions_gender: state.by_gender.healthOpinions_gender,
        healthOpinions_age: state.by_age.healthOpinions_age,
        weight: state.general_indicators.weight,
        weight_gender: state.by_gender.weight_gender,
        weight_age: state.by_age.weight_age,
        height: state.general_indicators.height,
        height_gender: state.by_gender.height_gender,
        height_age: state.by_age.height_age,
        smokerStatusValues: state.fetchRefValues.smokerStatusValues,
        smokerFrequencieValues: state.fetchRefValues.smokerFrequencieValues,
        smokerNumberValues: state.fetchRefValues.smokerNumberValues,
        healthOpinionsValues: state.fetchRefValues.healthOpinionsValues,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSmokerStatus: (department, year) => dispatch(actions.fetchSmokerStatus(department, year)),
        fetchSmokerStatusByGender: (department, year) => dispatch(actions.fetchSmokerStatusByGender(department, year)),
        fetchSmokerStatusByAge: (department, year) => dispatch(actions.fetchSmokerStatusByAge(department, year)),
        fetchSmokerFrequencie: (department, year) => dispatch(actions.fetchSmokerFrequencie(department, year)),
        fetchSmokerFrequencieByGender: (department, year) => dispatch(actions.fetchSmokerFrequenciesByGender(department, year)),
        fetchSmokerFrequencieByAge: (department, year) => dispatch(actions.fetchSmokerFrequenciesByAge(department, year)),
        fetchSmokerNumber: (department, year) => dispatch(actions.fetchSmokerNumber(department, year)),
        fetchSmokerNumberByGender: (department, year) => dispatch(actions.fetchWeeklyNumberByGender(department, year)),
        fetchSmokerNumberByAge: (department, year) => dispatch(actions.fetchWeeklyNumberByAge(department, year)),
        fetchHealthOpinions: (department, year) => dispatch(actions.fetchHealthOpinions(department, year)),
        fetchHealthOpinionsByGender: (department, year) => dispatch(actions.fetchHealthOpinionsByGender(department, year)),
        fetchHealthOpinionsByAge: (department, year) => dispatch(actions.fetchHealthOpinionsByAge(department, year)),
        fetchWeight: (department, year) => dispatch(actions.fetchWeight(department, year)),
        fetchWeightByGender: (department, year) => dispatch(actions.fetchWeightByGender(department, year)),
        fetchWeightByAge: (department, year) => dispatch(actions.fetchWeightByAge(department, year)),
        fetchHeight: (department, year) => dispatch(actions.fetchHeight(department, year)),
        fetchHeightByGender: (department, year) => dispatch(actions.fetchHeightByGender(department, year)),
        fetchHeightByAge: (department, year) => dispatch(actions.fetchHeightByAge(department, year)),
        fetchSmokerStatusValues: () => dispatch(actions.fetchSmokerStatusValues()),
        fetchSmokerFrequencieValues: () => dispatch(actions.fetchSmokerFrequencieValues()),
        fetchSmokerNumberValues: () => dispatch(actions.fetchSmokerNumberValues()),
        fetchHealthOpinionsValues: () => dispatch(actions.fetchHealthOpinionsValues()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator2);