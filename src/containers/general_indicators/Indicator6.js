import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { mmHgHistogramOptions, mmHgHistogramOptionsLegend, ppmHistogramOptions, ppmHistogramOptionsLegend, mgdlHistogramOptions, mgdlHistogramOptionsLegend, bgColors } from '../../utility/chartsOptions';

class indicator6 extends Component {
    fetchData() {
        this.props.fetchSbp(this.props.department, this.props.year);
        this.props.fetchSbpByGender(this.props.department, this.props.year);
        this.props.fetchSbpByAge(this.props.department, this.props.year);
        this.props.fetchDbp(this.props.department, this.props.year);
        this.props.fetchDbpByGender(this.props.department, this.props.year);
        this.props.fetchDbpByAge(this.props.department, this.props.year);
        this.props.fetchPulse(this.props.department, this.props.year);
        this.props.fetchPulseByGender(this.props.department, this.props.year);
        this.props.fetchPulseByAge(this.props.department, this.props.year);
        this.props.fetchUricAcid(this.props.department, this.props.year);
        this.props.fetchUricAcidByGender(this.props.department, this.props.year);
        this.props.fetchUricAcidByAge(this.props.department, this.props.year);
        this.props.fetchGlucose(this.props.department, this.props.year);
        this.props.fetchGlucoseByGender(this.props.department, this.props.year);
        this.props.fetchGlucoseByAge(this.props.department, this.props.year);
        this.props.fetchCholesterol(this.props.department, this.props.year);
        this.props.fetchCholesterolByGender(this.props.department, this.props.year);
        this.props.fetchCholesterolByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
        };
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const sbpValues = this.props.sbp.map(s => s.value);
        const sbpLabels = this.props.sbp.map(w => w.systolic_blood_pressure);
        const dbpValues = this.props.dbp.map(w => w.value);
        const dbpLabels = this.props.dbp.map(w => w.diastolic_blood_pressure);
        const pulseValues = this.props.pulse.map(w => w.value);
        const pulseLabels = this.props.pulse.map(w => w.pulse);
        const uricAcidValues = this.props.uric_acid.map(w => w.value);
        const uricAcidLabels = this.props.uric_acid.map(w => w.uric_acid);
        const glucoseValues = this.props.glucose.map(w => w.value);
        const glucoseLabels = this.props.glucose.map(w => w.glucose);
        const cholesterolValues = this.props.cholesterol.map(w => w.value);
        const cholesterolLabels = this.props.cholesterol.map(w => w.total_cholesterol);
        let sbpTotal = sbpValues.reduce((a, b) => a + b, 0);
        let dbpTotal = dbpValues.reduce((a, b) => a + b, 0);
        let pulseTotal = pulseValues.reduce((a, b) => a + b, 0);
        let uricAcidTotal = uricAcidValues.reduce((a, b) => a + b, 0);
        let glucoseTotal = glucoseValues.reduce((a, b) => a + b, 0);
        let cholesterolTotal = cholesterolValues.reduce((a, b) => a + b, 0);

        //sbp by gender
        const sbpGenderArray = [].concat(...this.props.sbp_gender);
        sbpGenderArray.splice(-1, 1);
        const sbpgendermap = sbpGenderArray.map(w => w.total);
        const sbpGenderTotal = sbpgendermap.reduce((a, b) => a + b, 0);
        const sbpIds = sbpGenderArray.map(a => a.id);
        const sbpMax = Math.max(...sbpIds);
        let sbpGenderObject = {};
        for (let i = 1; i <= sbpMax; i++) {
            const filter = sbpGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.sbp);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            sbpGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const sbpGenderData = Object.keys(sbpGenderObject).map(key => {
            return sbpGenderObject[key];
        });
        sbpGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //sbp by age
        const sbpAgeArray = [].concat(...this.props.sbp_age);
        sbpAgeArray.splice(-1, 1);
        const sbpagemap = sbpAgeArray.map(w => w.total);
        const sbpAgeTotal = sbpagemap.reduce((a, b) => a + b, 0);
        const sbpAgeIds = sbpAgeArray.map(a => a.id);
        const sbpAgeMax = Math.max(...sbpAgeIds);
        let sbpAgeObject = {};
        for (let i = 1; i <= sbpAgeMax; i++) {
            const filter = sbpAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.sbp);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            sbpAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const sbpAgeData = Object.keys(sbpAgeObject).map(key => {
            return sbpAgeObject[key];
        });
        sbpAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //dbp by gender
        const dbpGenderArray = [].concat(...this.props.dbp_gender);
        dbpGenderArray.splice(-1, 1);
        const dbpgendermap = dbpGenderArray.map(w => w.total);
        const dbpGenderTotal = dbpgendermap.reduce((a, b) => a + b, 0);
        const dbpIds = dbpGenderArray.map(a => a.id);
        const dbpMax = Math.max(...dbpIds);
        let dbpGenderObject = {};
        for (let i = 1; i <= dbpMax; i++) {
            const filter = dbpGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.dbp);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            dbpGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const dbpGenderData = Object.keys(dbpGenderObject).map(key => {
            return dbpGenderObject[key];
        });
        dbpGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //dbp by age
        const dbpAgeArray = [].concat(...this.props.dbp_age);
        dbpAgeArray.splice(-1, 1);
        const dbpagemap = dbpAgeArray.map(w => w.total);
        const dbpAgeTotal = dbpagemap.reduce((a, b) => a + b, 0);
        const dbpAgeIds = dbpAgeArray.map(a => a.id);
        const dbpAgeMax = Math.max(...dbpAgeIds);
        let dbpAgeObject = {};
        for (let i = 1; i <= dbpAgeMax; i++) {
            const filter = dbpAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.dbp);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            dbpAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const dbpAgeData = Object.keys(dbpAgeObject).map(key => {
            return dbpAgeObject[key];
        });
        dbpAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //pulse by gender
        const pulseGenderArray = [].concat(...this.props.pulse_gender);
        pulseGenderArray.splice(-1, 1);
        const pulsegendermap = pulseGenderArray.map(w => w.total);
        const pulseGenderTotal = pulsegendermap.reduce((a, b) => a + b, 0);
        const pulseIds = pulseGenderArray.map(a => a.id);
        const pulseMax = Math.max(...pulseIds);
        let pulseGenderObject = {};
        for (let i = 1; i <= pulseMax; i++) {
            const filter = pulseGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pulse);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            pulseGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const pulseGenderData = Object.keys(pulseGenderObject).map(key => {
            return pulseGenderObject[key];
        });
        pulseGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //pulse by age
        const pulseAgeArray = [].concat(...this.props.pulse_age);
        pulseAgeArray.splice(-1, 1);
        const pulseagemap = pulseAgeArray.map(w => w.total);
        const pulseAgeTotal = pulseagemap.reduce((a, b) => a + b, 0);
        const pulseAgeIds = pulseAgeArray.map(a => a.id);
        const pulseAgeMax = Math.max(...pulseAgeIds);
        let pulseAgeObject = {};
        for (let i = 1; i <= pulseAgeMax; i++) {
            const filter = pulseAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pulse);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            pulseAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const pulseAgeData = Object.keys(pulseAgeObject).map(key => {
            return pulseAgeObject[key];
        });
        pulseAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //uric acid by gender
        const uricAcidGenderArray = [].concat(...this.props.uricAcid_gender);
        uricAcidGenderArray.splice(-1, 1);
        const uricacidgendermap = uricAcidGenderArray.map(w => w.total);
        const uricAcidGenderTotal = uricacidgendermap.reduce((a, b) => a + b, 0);
        const uricAcidIds = uricAcidGenderArray.map(a => a.id);
        const uricAcidMax = Math.max(...uricAcidIds);
        let uricAcidGenderObject = {};
        for (let i = 1; i <= uricAcidMax; i++) {
            const filter = uricAcidGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.uric_acid);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            uricAcidGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const uricAcidGenderData = Object.keys(uricAcidGenderObject).map(key => {
            return uricAcidGenderObject[key];
        });
        uricAcidGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //uric acid by age
        const uricAcidAgeArray = [].concat(...this.props.uricAcid_age);
        uricAcidAgeArray.splice(-1, 1);
        const uricacidagemap = uricAcidAgeArray.map(w => w.total);
        const uricAcidAgeTotal = uricacidagemap.reduce((a, b) => a + b, 0);
        const uricAcidAgeIds = uricAcidAgeArray.map(a => a.id);
        const uricAcidAgeMax = Math.max(...uricAcidAgeIds);
        let uricAcidAgeObject = {};
        for (let i = 1; i <= uricAcidAgeMax; i++) {
            const filter = uricAcidAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.uric_acid);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            uricAcidAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const uricAcidAgeData = Object.keys(uricAcidAgeObject).map(key => {
            return uricAcidAgeObject[key];
        });
        uricAcidAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //glucose by gender
        const glucoseGenderArray = [].concat(...this.props.glucose_gender);
        glucoseGenderArray.splice(-1, 1);
        const glucosegendermap = glucoseGenderArray.map(w => w.total);
        const glucoseGenderTotal = glucosegendermap.reduce((a, b) => a + b, 0);
        const glucoseIds = glucoseGenderArray.map(a => a.id);
        const glucoseMax = Math.max(...glucoseIds);
        let glucoseGenderObject = {};
        for (let i = 1; i <= glucoseMax; i++) {
            const filter = glucoseGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.glucose);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            glucoseGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const glucoseGenderData = Object.keys(glucoseGenderObject).map(key => {
            return glucoseGenderObject[key];
        });
        glucoseGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //glucose by age
        const glucoseAgeArray = [].concat(...this.props.glucose_age);
        glucoseAgeArray.splice(-1, 1);
        const glucoseagemap = glucoseAgeArray.map(w => w.total);
        const glucoseAgeTotal = glucoseagemap.reduce((a, b) => a + b, 0);
        const glucoseAgeIds = glucoseAgeArray.map(a => a.id);
        const glucoseAgeMax = Math.max(...glucoseAgeIds);
        let glucoseAgeObject = {};
        for (let i = 1; i <= glucoseAgeMax; i++) {
            const filter = glucoseAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.glucose);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            glucoseAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const glucoseAgeData = Object.keys(glucoseAgeObject).map(key => {
            return glucoseAgeObject[key];
        });
        glucoseAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //cholesterol by gender
        const cholesterolGenderArray = [].concat(...this.props.cholesterol_gender);
        cholesterolGenderArray.splice(-1, 1);
        const cholesterolgendermap = cholesterolGenderArray.map(w => w.total);
        const cholesterolGenderTotal = cholesterolgendermap.reduce((a, b) => a + b, 0);
        const cholesterolIds = cholesterolGenderArray.map(a => a.id);
        const cholesterolMax = Math.max(...cholesterolIds);
        let cholesterolGenderObject = {};
        for (let i = 1; i <= cholesterolMax; i++) {
            const filter = cholesterolGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.cholesterol);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            cholesterolGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const cholesterolGenderData = Object.keys(cholesterolGenderObject).map(key => {
            return cholesterolGenderObject[key];
        });
        cholesterolGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //cholesterol by age
        const cholesterolAgeArray = [].concat(...this.props.cholesterol_age);
        cholesterolAgeArray.splice(-1, 1);
        const cholesterolagemap = cholesterolAgeArray.map(w => w.total);
        const cholesterolAgeTotal = cholesterolagemap.reduce((a, b) => a + b, 0);
        const cholesterolAgeIds = cholesterolAgeArray.map(a => a.id);
        const cholesterolAgeMax = Math.max(...cholesterolAgeIds);
        let cholesterolAgeObject = {};
        for (let i = 1; i <= cholesterolAgeMax; i++) {
            const filter = cholesterolAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.total_cholesterol);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            cholesterolAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const cholesterolAgeData = Object.keys(cholesterolAgeObject).map(key => {
            return cholesterolAgeObject[key];
        });
        cholesterolAgeData.sort((a, b) => {
            return a.label - b.label
        });

        let sbpChart, dbpChart, pulseChart, uricAcidChart, glucoseChart, cholesterolChart, sbpData, dbpData, pulseData, uricAcidData, glucoseData, cholesterolData = null;

        switch (this.props.selectedOption) {
            case ('option1'):
                sbpData = {
                    labels: sbpLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: sbpValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                dbpData = {
                    labels: dbpLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: dbpValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                pulseData = {
                    labels: pulseLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: pulseValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                uricAcidData = {
                    labels: uricAcidLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: uricAcidValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                glucoseData = {
                    labels: glucoseLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: glucoseValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                cholesterolData = {
                    labels: cholesterolLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: cholesterolValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                sbpChart = (<Bar data={sbpData} width={350} height={350} options={mmHgHistogramOptions} />);
                dbpChart = (<Bar data={dbpData} width={350} height={350} options={mmHgHistogramOptions} />);
                pulseChart = (<Bar data={pulseData} width={350} height={350} options={ppmHistogramOptions} />);
                uricAcidChart = (<Bar data={uricAcidData} width={350} height={350} options={mgdlHistogramOptions} />);
                glucoseChart = (<Bar data={glucoseData} width={350} height={350} options={mgdlHistogramOptions} />);
                cholesterolChart = (<Bar data={cholesterolData} width={350} height={350} options={mgdlHistogramOptions} />);
                break;

            case ('option2'):
                sbpData = {
                    labels: sbpLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: sbpValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                dbpData = {
                    labels: dbpLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: dbpValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                pulseData = {
                    labels: pulseLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: pulseValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                uricAcidData = {
                    labels: uricAcidLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: uricAcidValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                glucoseData = {
                    labels: glucoseLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: glucoseValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                cholesterolData = {
                    labels: cholesterolLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: cholesterolValues,
                            backgroundColor: "#add036",
                            borderColor: "#8a9b42",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                sbpChart = (<Bar data={sbpData} width={350} height={350} options={mmHgHistogramOptions} />);
                dbpChart = (<Bar data={dbpData} width={350} height={350} options={mmHgHistogramOptions} />);
                pulseChart = (<Bar data={pulseData} width={350} height={350} options={ppmHistogramOptions} />);
                uricAcidChart = (<Bar data={uricAcidData} width={350} height={350} options={mgdlHistogramOptions} />);
                glucoseChart = (<Bar data={glucoseData} width={350} height={350} options={mgdlHistogramOptions} />);
                cholesterolChart = (<Bar data={cholesterolData} width={350} height={350} options={mgdlHistogramOptions} />);
                break;

            case ('option3'):
                sbpTotal = sbpGenderTotal;
                dbpTotal = dbpGenderTotal;
                pulseTotal = pulseGenderTotal;
                uricAcidTotal = uricAcidGenderTotal;
                glucoseTotal = glucoseGenderTotal;
                cholesterolTotal = cholesterolGenderTotal;

                sbpData = {
                    labels: genderLabels,
                    datasets: sbpGenderData
                };

                dbpData = {
                    labels: genderLabels,
                    datasets: dbpGenderData
                };

                pulseData = {
                    labels: genderLabels,
                    datasets: pulseGenderData
                };

                uricAcidData = {
                    labels: genderLabels,
                    datasets: uricAcidGenderData
                };

                glucoseData = {
                    labels: genderLabels,
                    datasets: glucoseGenderData
                };

                cholesterolData = {
                    labels: genderLabels,
                    datasets: cholesterolGenderData
                };

                sbpChart = (<Bar data={sbpData} width={350} height={350} options={mmHgHistogramOptionsLegend} />);
                dbpChart = (<Bar data={dbpData} width={350} height={350} options={mmHgHistogramOptionsLegend} />);
                pulseChart = (<Bar data={pulseData} width={350} height={350} options={ppmHistogramOptionsLegend} />);
                uricAcidChart = (<Bar data={uricAcidData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                glucoseChart = (<Bar data={glucoseData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                cholesterolChart = (<Bar data={cholesterolData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                break;

            case ('option4'):
                sbpTotal = sbpAgeTotal;
                dbpTotal = dbpAgeTotal;
                pulseTotal = pulseAgeTotal;
                uricAcidTotal = uricAcidAgeTotal;
                glucoseTotal = glucoseAgeTotal;
                cholesterolTotal = cholesterolAgeTotal;

                sbpData = {
                    labels: chartAgesLabels,
                    datasets: sbpAgeData
                };

                dbpData = {
                    labels: chartAgesLabels,
                    datasets: dbpAgeData
                };

                pulseData = {
                    labels: chartAgesLabels,
                    datasets: pulseAgeData
                };

                uricAcidData = {
                    labels: chartAgesLabels,
                    datasets: uricAcidAgeData
                };

                glucoseData = {
                    labels: chartAgesLabels,
                    datasets: glucoseAgeData
                };

                cholesterolData = {
                    labels: chartAgesLabels,
                    datasets: cholesterolAgeData
                };

                sbpChart = (<Bar data={sbpData} width={350} height={350} options={mmHgHistogramOptionsLegend} />);
                dbpChart = (<Bar data={dbpData} width={350} height={350} options={mmHgHistogramOptionsLegend} />);
                pulseChart = (<Bar data={pulseData} width={350} height={350} options={ppmHistogramOptionsLegend} />);
                uricAcidChart = (<Bar data={uricAcidData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                glucoseChart = (<Bar data={glucoseData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                cholesterolChart = (<Bar data={cholesterolData} width={350} height={350} options={mgdlHistogramOptionsLegend} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="systolic2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {sbpTotal}</small></div>
                        {sbpChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="diastolic2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {dbpTotal}</small></div>
                        {dbpChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="pulse2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {pulseTotal}</small></div>
                        {pulseChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="uric-acid2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {uricAcidTotal}</small></div>
                        {uricAcidChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="glucose2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {glucoseTotal}</small></div>
                        {glucoseChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="cholesterol2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {cholesterolTotal}</small></div>
                        {cholesterolChart}
                    </div>
                </div>
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return {
        genderValues: state.fetchRefValues.genderValues,
        chartAgesValues: state.fetchRefValues.chartAgesValues,
        sbp: state.general_indicators.sbp,
        sbp_gender: state.by_gender.sbp_gender,
        sbp_age: state.by_age.sbp_age,
        dbp: state.general_indicators.dbp,
        dbp_gender: state.by_gender.dbp_gender,
        dbp_age: state.by_age.dbp_age,
        pulse: state.general_indicators.pulse,
        pulse_gender: state.by_gender.pulse_gender,
        pulse_age: state.by_age.pulse_age,
        uric_acid: state.general_indicators.uric_acid,
        uricAcid_gender: state.by_gender.uricAcid_gender,
        uricAcid_age: state.by_age.uricAcid_age,
        glucose: state.general_indicators.glucose,
        glucose_gender: state.by_gender.glucose_gender,
        glucose_age: state.by_age.glucose_age,
        cholesterol: state.general_indicators.cholesterol,
        cholesterol_gender: state.by_gender.cholesterol_gender,
        cholesterol_age: state.by_age.cholesterol_age,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSbp: (department, year) => dispatch(actions.fetchSbp(department, year)),
        fetchSbpByGender: (department, year) => dispatch(actions.fetchSbpByGender(department, year)),
        fetchSbpByAge: (department, year) => dispatch(actions.fetchSbpByAge(department, year)),
        fetchDbp: (department, year) => dispatch(actions.fetchDbp(department, year)),
        fetchDbpByGender: (department, year) => dispatch(actions.fetchDbpByGender(department, year)),
        fetchDbpByAge: (department, year) => dispatch(actions.fetchDbpByAge(department, year)),
        fetchPulse: (department, year) => dispatch(actions.fetchPulse(department, year)),
        fetchPulseByGender: (department, year) => dispatch(actions.fetchPulseByGender(department, year)),
        fetchPulseByAge: (department, year) => dispatch(actions.fetchPulseByAge(department, year)),
        fetchUricAcid: (department, year) => dispatch(actions.fetchUricAcid(department, year)),
        fetchUricAcidByGender: (department, year) => dispatch(actions.fetchUricAcidByGender(department, year)),
        fetchUricAcidByAge: (department, year) => dispatch(actions.fetchUricAcidByAge(department, year)),
        fetchGlucose: (department, year) => dispatch(actions.fetchGlucose(department, year)),
        fetchGlucoseByGender: (department, year) => dispatch(actions.fetchGlucoseByGender(department, year)),
        fetchGlucoseByAge: (department, year) => dispatch(actions.fetchGlucoseByAge(department, year)),
        fetchCholesterol: (department, year) => dispatch(actions.fetchCholesterol(department, year)),
        fetchCholesterolByGender: (department, year) => dispatch(actions.fetchCholesterolByGender(department, year)),
        fetchCholesterolByAge: (department, year) => dispatch(actions.fetchCholesterolByAge(department, year)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator6);