import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, pieOptions, histogramOptions, bgColors, barOptionsLegend } from '../../utility/chartsOptions';

class indicator3 extends Component {
    fetchData() {
        this.props.fetchHasChronic(this.props.department, this.props.year);
        this.props.fetchHasChronicByGender(this.props.department, this.props.year);
        this.props.fetchHasChronicByAge(this.props.department, this.props.year);
        this.props.fetchChronicValues(this.props.department, this.props.year);
        this.props.fetchChronicValuesByGender(this.props.department, this.props.year);
        this.props.fetchChronicValuesByAge(this.props.department, this.props.year);
        this.props.fetchMedsNumber(this.props.department, this.props.year);
        this.props.fetchMedsNumberByGender(this.props.department, this.props.year);
        this.props.fetchMedsNumberByAge(this.props.department, this.props.year);
        this.props.fetchMedsValues(this.props.department, this.props.year);
        this.props.fetchMedsValuesByGender(this.props.department, this.props.year);
        this.props.fetchMedsValuesByAge(this.props.department, this.props.year);
        this.props.fetchTakesMeds(this.props.department, this.props.year);
        this.props.fetchTakesMedsByGender(this.props.department, this.props.year);
        this.props.fetchTakesMedsByAge(this.props.department, this.props.year);
        this.props.fetchPainValue(this.props.department, this.props.year);
        this.props.fetchPainValueByGender(this.props.department, this.props.year);
        this.props.fetchPainValueByAge(this.props.department, this.props.year);
        this.props.fetchLocalPain(this.props.department, this.props.year);
        this.props.fetchLocalPainByGender(this.props.department, this.props.year);
        this.props.fetchLocalPainByAge(this.props.department, this.props.year);
        this.props.fetchPainScale(this.props.department, this.props.year);
        this.props.fetchPainScaleByGender(this.props.department, this.props.year);
        this.props.fetchPainScaleByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
            this.props.fetchPainScaleValues();
            this.props.fetchPainValueValues();
            this.props.fetchChronicValueValues();
            this.props.fetchLocalPainValues();
            this.props.fetchMedsValueValues();
        };
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const chronicValuesLabels = this.props.chronicValues.map(cv => cv.value);
        const medsValuesLabels = this.props.medsValues.map(mv => mv.value);
        const painValueLabels = this.props.painValues.map(pv => pv.value);
        const localPainValuesLabels = this.props.localPainValues.map(lpv => lpv.value);
        const painScaleLabels = this.props.painScaleValues.map(ps => ps.value);
        const medsNumberDataValues = this.props.meds_number.map(mn => mn.value);
        const medsNumberLabels = this.props.meds_number.map(mn => mn.meds_number);
        let medsNumberTotal = medsNumberDataValues.reduce((a, b) => a + b, 0);

        let yesNoLabels = null;
        if (localStorage.getItem('language') === "pt") {
            yesNoLabels = ["Não", "Sim"]
        } else {
            yesNoLabels = ["No", "Yes"]
        };

        //has chronic by gender
        const hasChronicGenderArray = [].concat(...this.props.hasChronic_gender);
        hasChronicGenderArray.splice(-1, 1);
        const haschronicgendermap = hasChronicGenderArray.map(w => w.total);
        const hasChronicGenderTotal = haschronicgendermap.reduce((a, b) => a + b, 0);
        let hasChronicGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = hasChronicGenderArray.filter(a => a.chronic_disease === i);
            const total = filter.map(a => a.total);
            hasChronicGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const hasChronicGenderData = Object.keys(hasChronicGenderObject).map(key => {
            return hasChronicGenderObject[key];
        });

        //has chronic by age
        const hasChronicAgeArray = [].concat(...this.props.hasChronic_age);
        hasChronicAgeArray.splice(-1, 1);
        const haschronicagemap = hasChronicAgeArray.map(w => w.total);
        const hasChronicAgeTotal = haschronicagemap.reduce((a, b) => a + b, 0);
        let hasChronicAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = hasChronicAgeArray.filter(a => a.chronic_disease === i);
            const total = filter.map(a => a.total);
            hasChronicAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const hasChronicAgeData = Object.keys(hasChronicAgeObject).map(key => {
            return hasChronicAgeObject[key];
        });

        //chronic values by gender
        const chronicValuesGenderArray = [].concat(...this.props.chronicValues_gender);
        chronicValuesGenderArray.splice(-1, 1);
        const chronicvaluesgendermap = chronicValuesGenderArray.map(w => w.total);
        const chronicValuesGenderTotal = chronicvaluesgendermap.reduce((a, b) => a + b, 0);
        const chronicValuesIds = chronicValuesGenderArray.map(a => a.id);
        const chronicValuesMax = Math.max(...chronicValuesIds);
        let chronicValuesGenderObject = {};
        for (let i = 1; i <= chronicValuesMax; i++) {
            const filter = chronicValuesGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.chronic_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            chronicValuesGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const chronicValuesGenderData = Object.keys(chronicValuesGenderObject).map(key => {
            return chronicValuesGenderObject[key];
        });

        //chronic values by age
        const chronicValuesAgeArray = [].concat(...this.props.chronicValues_age);
        chronicValuesAgeArray.splice(-1, 1);
        const chronicvaluesagemap = chronicValuesAgeArray.map(w => w.total);
        const chronicValuesAgeTotal = chronicvaluesagemap.reduce((a, b) => a + b, 0);
        const chronicValuesAgeIds = chronicValuesAgeArray.map(a => a.id);
        const chronicValuesAgeMax = Math.max(...chronicValuesAgeIds);
        let chronicValuesAgeObject = {};
        for (let i = 1; i <= chronicValuesAgeMax; i++) {
            const filter = chronicValuesAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.chronic_disease_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            chronicValuesAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const chronicValuesAgeData = Object.keys(chronicValuesAgeObject).map(key => {
            return chronicValuesAgeObject[key];
        });

        //takes meds by gender
        const takesMedsGenderArray = [].concat(...this.props.takesMeds_gender);
        takesMedsGenderArray.splice(-1, 1);
        const takesmedsgendermap = takesMedsGenderArray.map(w => w.total);
        const takesMedsGenderTotal = takesmedsgendermap.reduce((a, b) => a + b, 0);
        let takesMedsGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = takesMedsGenderArray.filter(a => a.takes_meds === i);
            const total = filter.map(a => a.total);
            takesMedsGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const takesMedsGenderData = Object.keys(takesMedsGenderObject).map(key => {
            return takesMedsGenderObject[key];
        });

        //takes meds by age
        const takesMedsAgeArray = [].concat(...this.props.takesMeds_age);
        takesMedsAgeArray.splice(-1, 1);
        const takesmedsagemap = takesMedsAgeArray.map(w => w.total);
        const takesMedsAgeTotal = takesmedsagemap.reduce((a, b) => a + b, 0);
        let takesMedsAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = takesMedsAgeArray.filter(a => a.takes_meds === i);
            const total = filter.map(a => a.total);
            takesMedsAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const takesMedsAgeData = Object.keys(takesMedsAgeObject).map(key => {
            return takesMedsAgeObject[key];
        });

        //meds number by gender
        const medsNumberGenderArray = [].concat(...this.props.medsNumber_gender);
        medsNumberGenderArray.splice(-1, 1);
        const medsnumbergendermap = medsNumberGenderArray.map(w => w.total);
        const medsNumberGenderTotal = medsnumbergendermap.reduce((a, b) => a + b, 0);
        const medsNumberIds = medsNumberGenderArray.map(a => a.id);
        const medsNumberMax = Math.max(...medsNumberIds);
        let medsNumberGenderObject = {};
        for (let i = 1; i <= medsNumberMax; i++) {
            const filter = medsNumberGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.meds_number);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            medsNumberGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const medsNumberGenderData = Object.keys(medsNumberGenderObject).map(key => {
            return medsNumberGenderObject[key];
        });
        medsNumberGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //meds number by age
        const medsNumberAgeArray = [].concat(...this.props.medsNumber_age);
        medsNumberAgeArray.splice(-1, 1);
        const medsnumberagemap = medsNumberAgeArray.map(w => w.total);
        const medsNumberAgeTotal = medsnumberagemap.reduce((a, b) => a + b, 0);
        const medsNumberAgeIds = medsNumberAgeArray.map(a => a.id);
        const medsNumberAgeMax = Math.max(...medsNumberAgeIds);
        let medsNumberAgeObject = {};
        for (let i = 1; i <= medsNumberAgeMax; i++) {
            const filter = medsNumberAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.meds_number);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            medsNumberAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const medsNumberAgeData = Object.keys(medsNumberAgeObject).map(key => {
            return medsNumberAgeObject[key];
        });
        medsNumberAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //meds values by gender
        const medsValuesGenderArray = [].concat(...this.props.medsValues_gender);
        medsValuesGenderArray.splice(-1, 1);
        const medsvaluesgendermap = medsValuesGenderArray.map(w => w.total);
        const medsValuesGenderTotal = medsvaluesgendermap.reduce((a, b) => a + b, 0);
        const medsValuesIds = medsValuesGenderArray.map(a => a.id);
        const medsValuesMax = Math.max(...medsValuesIds);
        let medsValuesGenderObject = {};
        for (let i = 1; i <= medsValuesMax; i++) {
            const filter = medsValuesGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.chronic_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            medsValuesGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const medsValuesGenderData = Object.keys(medsValuesGenderObject).map(key => {
            return medsValuesGenderObject[key];
        });

        //meds values by age
        const medsValuesAgeArray = [].concat(...this.props.medsValues_age);
        medsValuesAgeArray.splice(-1, 1);
        const medsvaluesagemap = medsValuesAgeArray.map(w => w.total);
        const medsValuesAgeTotal = medsvaluesagemap.reduce((a, b) => a + b, 0);
        const medsValuesAgeIds = medsValuesAgeArray.map(a => a.id);
        const medsValuesAgeMax = Math.max(...medsValuesAgeIds);
        let medsValuesAgeObject = {};
        for (let i = 1; i <= medsValuesAgeMax; i++) {
            const filter = medsValuesAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.meds_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            medsValuesAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const medsValuesAgeData = Object.keys(medsValuesAgeObject).map(key => {
            return medsValuesAgeObject[key];
        });

        //pain value by gender
        const painValueGenderArray = [].concat(...this.props.painValue_gender);
        painValueGenderArray.splice(-1, 1);
        const painvaluegendermap = painValueGenderArray.map(w => w.total);
        const painValueGenderTotal = painvaluegendermap.reduce((a, b) => a + b, 0);
        const painValueIds = painValueGenderArray.map(a => a.id);
        const painValueMax = Math.max(...painValueIds);
        let painValueGenderObject = {};
        for (let i = 1; i <= painValueMax; i++) {
            const filter = painValueGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pain_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            painValueGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const painValueGenderData = Object.keys(painValueGenderObject).map(key => {
            return painValueGenderObject[key];
        });

        //pain value by age
        const painValueAgeArray = [].concat(...this.props.painValue_age);
        painValueAgeArray.splice(-1, 1);
        const painvalueagemap = painValueAgeArray.map(w => w.total);
        const painValueAgeTotal = painvalueagemap.reduce((a, b) => a + b, 0);
        const painValueAgeIds = painValueAgeArray.map(a => a.id);
        const painValueAgeMax = Math.max(...painValueAgeIds);
        let painValueAgeObject = {};
        for (let i = 1; i <= painValueAgeMax; i++) {
            const filter = painValueAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pain_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            painValueAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const painValueAgeData = Object.keys(painValueAgeObject).map(key => {
            return painValueAgeObject[key];
        });
        painValueAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //local pain by gender
        const localPainGenderArray = [].concat(...this.props.localPain_gender);
        localPainGenderArray.splice(-1, 1);
        const localpaingendermap = localPainGenderArray.map(w => w.total);
        const localPainGenderTotal = localpaingendermap.reduce((a, b) => a + b, 0);
        const localPainIds = localPainGenderArray.map(a => a.id);
        const localPainMax = Math.max(...localPainIds);
        let localPainGenderObject = {};
        for (let i = 1; i <= localPainMax; i++) {
            const filter = localPainGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.local_pain);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            localPainGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const localPainGenderData = Object.keys(localPainGenderObject).map(key => {
            return localPainGenderObject[key];
        });

        //local pain by age
        const localPainAgeArray = [].concat(...this.props.localPain_age);
        localPainAgeArray.splice(-1, 1);
        const localpainagemap = localPainAgeArray.map(w => w.total);
        const localPainAgeTotal = localpainagemap.reduce((a, b) => a + b, 0);
        const localPainAgeIds = localPainAgeArray.map(a => a.id);
        const localPainAgeMax = Math.max(...localPainAgeIds);
        let localPainAgeObject = {};
        for (let i = 1; i <= localPainAgeMax; i++) {
            const filter = localPainAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.local_pain);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            localPainAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const localPainAgeData = Object.keys(localPainAgeObject).map(key => {
            return localPainAgeObject[key];
        });

        //pain scale by gender
        const painScaleGenderArray = [].concat(...this.props.painScale_gender);
        painScaleGenderArray.splice(-1, 1);
        const painscalegendermap = painScaleGenderArray.map(w => w.total);
        const painScaleGenderTotal = painscalegendermap.reduce((a, b) => a + b, 0);
        const painScaleIds = painScaleGenderArray.map(a => a.id);
        const painScaleMax = Math.max(...painScaleIds);
        let painScaleGenderObject = {};
        for (let i = 1; i <= painScaleMax; i++) {
            const filter = painScaleGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pain_scale);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            painScaleGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const painScaleGenderData = Object.keys(painScaleGenderObject).map(key => {
            return painScaleGenderObject[key];
        });

        //pain scale by age
        const painScaleAgeArray = [].concat(...this.props.painScale_age);
        painScaleAgeArray.splice(-1, 1);
        const painscaleagemap = painScaleAgeArray.map(w => w.total);
        const painScaleAgeTotal = painscaleagemap.reduce((a, b) => a + b, 0);
        const painScaleAgeIds = painScaleAgeArray.map(a => a.id);
        const painScaleAgeMax = Math.max(...painScaleAgeIds);
        let painScaleAgeObject = {};
        for (let i = 1; i <= painScaleAgeMax; i++) {
            const filter = painScaleAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.pain_scale);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            painScaleAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const painScaleAgeData = Object.keys(painScaleAgeObject).map(key => {
            return painScaleAgeObject[key];
        });

        let hasChronicChart, chronicValuesChart, takesMedsChart, medsNumberChart, medsValuesChart, painValueChart, localPainValueChart, painScaleChart, hasChronicData, chronicValuesData, takesMedsData, medsNumberData, medsValuesData, painValueData, localPainValueData, painScaleData = null;
        let hasChronicTotal = this.props.has_chronic.total;
        let chronicValuesTotal = this.props.chronic_values.total;
        let takesMedsTotal = this.props.takes_meds.total;
        let medsValuesTotal = this.props.meds_values.total;
        let painValueTotal = this.props.pain_value.total;
        let localPainTotal = this.props.local_pain.total;
        let painScaleTotal = this.props.pain_scale.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                hasChronicData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.has_chronic.has_chronic_0_percentage,
                                this.props.has_chronic.has_chronic_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                chronicValuesData = {
                    labels: chronicValuesLabels,
                    datasets: [
                        {
                            data: [
                                this.props.chronic_values.chronic_value_1_percentage,
                                this.props.chronic_values.chronic_value_2_percentage,
                                this.props.chronic_values.chronic_value_3_percentage,
                                this.props.chronic_values.chronic_value_4_percentage,
                                this.props.chronic_values.chronic_value_5_percentage,
                                this.props.chronic_values.chronic_value_6_percentage,
                                this.props.chronic_values.chronic_value_7_percentage,
                                this.props.chronic_values.chronic_value_8_percentage,
                                this.props.chronic_values.chronic_value_9_percentage,
                                this.props.chronic_values.chronic_value_10_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                takesMedsData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.takes_meds.takes_meds_0_percentage,
                                this.props.takes_meds.takes_meds_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                medsNumberData = {
                    labels: medsNumberLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: medsNumberDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                medsValuesData = {
                    labels: medsValuesLabels,
                    datasets: [
                        {
                            data: [
                                this.props.meds_values.meds_value_1_percentage,
                                this.props.meds_values.meds_value_2_percentage,
                                this.props.meds_values.meds_value_3_percentage,
                                this.props.meds_values.meds_value_4_percentage,
                                this.props.meds_values.meds_value_5_percentage,
                                this.props.meds_values.meds_value_6_percentage,
                                this.props.meds_values.meds_value_7_percentage,
                                this.props.meds_values.meds_value_8_percentage,
                                this.props.meds_values.meds_value_9_percentage,
                                this.props.meds_values.meds_value_10_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                painValueData = {
                    labels: painValueLabels,
                    datasets: [
                        {
                            data: [
                                this.props.pain_value.pain_value_1_percentage,
                                this.props.pain_value.pain_value_2_percentage,
                                this.props.pain_value.pain_value_3_percentage,

                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                localPainValueData = {
                    labels: localPainValuesLabels,
                    datasets: [
                        {
                            data: [
                                this.props.local_pain.local_pain_1_percentage,
                                this.props.local_pain.local_pain_2_percentage,
                                this.props.local_pain.local_pain_3_percentage,
                                this.props.local_pain.local_pain_4_percentage,
                                this.props.local_pain.local_pain_5_percentage,
                                this.props.local_pain.local_pain_6_percentage,
                                this.props.local_pain.local_pain_7_percentage,
                                this.props.local_pain.local_pain_8_percentage,
                                this.props.local_pain.local_pain_9_percentage,
                                this.props.local_pain.local_pain_10_percentage,

                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                painScaleData = {
                    labels: painScaleLabels,
                    datasets: [
                        {
                            data: [
                                this.props.pain_scale.pain_scale_0_percentage,
                                this.props.pain_scale.pain_scale_1_percentage,
                                this.props.pain_scale.pain_scale_2_percentage,
                                this.props.pain_scale.pain_scale_3_percentage,
                                this.props.pain_scale.pain_scale_4_percentage,
                                this.props.pain_scale.pain_scale_5_percentage,
                                this.props.pain_scale.pain_scale_6_percentage,
                                this.props.pain_scale.pain_scale_7_percentage,
                                this.props.pain_scale.pain_scale_8_percentage,
                                this.props.pain_scale.pain_scale_9_percentage,
                                this.props.pain_scale.pain_scale_10_percentage,
                                this.props.pain_scale.pain_scale_11_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                hasChronicChart = (<Pie data={hasChronicData} width={350} height={350} options={pieOptions} />);
                chronicValuesChart = (<Pie data={chronicValuesData} width={350} height={350} options={pieOptions} />);
                takesMedsChart = (<Pie data={takesMedsData} width={350} height={350} options={pieOptions} />);
                medsNumberChart = (<Bar data={medsNumberData} width={350} height={350} options={histogramOptions} />);
                medsValuesChart = (<Pie data={medsValuesData} width={350} height={350} options={pieOptions} />);
                painValueChart = (<Pie data={painValueData} width={350} height={350} options={pieOptions} />);
                localPainValueChart = (<Pie data={localPainValueData} width={350} height={350} options={pieOptions} />);
                painScaleChart = (<Pie data={painScaleData} width={350} height={350} options={pieOptions} />);
                break;

            case ('option2'):
                hasChronicData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.has_chronic.has_chronic_0,
                                this.props.has_chronic.has_chronic_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                chronicValuesData = {
                    labels: chronicValuesLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.chronic_values.chronic_value_1,
                                this.props.chronic_values.chronic_value_2,
                                this.props.chronic_values.chronic_value_3,
                                this.props.chronic_values.chronic_value_4,
                                this.props.chronic_values.chronic_value_5,
                                this.props.chronic_values.chronic_value_6,
                                this.props.chronic_values.chronic_value_7,
                                this.props.chronic_values.chronic_value_8,
                                this.props.chronic_values.chronic_value_9,
                                this.props.chronic_values.chronic_value_10,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                takesMedsData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.takes_meds.takes_meds_0,
                                this.props.takes_meds.takes_meds_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                medsNumberData = {
                    labels: medsNumberLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: medsNumberDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                medsValuesData = {
                    labels: medsValuesLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.meds_values.meds_value_1,
                                this.props.meds_values.meds_value_2,
                                this.props.meds_values.meds_value_3,
                                this.props.meds_values.meds_value_4,
                                this.props.meds_values.meds_value_5,
                                this.props.meds_values.meds_value_6,
                                this.props.meds_values.meds_value_7,
                                this.props.meds_values.meds_value_8,
                                this.props.meds_values.meds_value_9,
                                this.props.meds_values.meds_value_10,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                painValueData = {
                    labels: painValueLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.pain_value.pain_value_1,
                                this.props.pain_value.pain_value_2,
                                this.props.pain_value.pain_value_3,

                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                localPainValueData = {
                    labels: localPainValuesLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.local_pain.local_pain_1,
                                this.props.local_pain.local_pain_2,
                                this.props.local_pain.local_pain_3,
                                this.props.local_pain.local_pain_4,
                                this.props.local_pain.local_pain_5,
                                this.props.local_pain.local_pain_6,
                                this.props.local_pain.local_pain_7,
                                this.props.local_pain.local_pain_8,
                                this.props.local_pain.local_pain_9,
                                this.props.local_pain.local_pain_10,

                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                painScaleData = {
                    labels: painScaleLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.pain_scale.pain_scale_0,
                                this.props.pain_scale.pain_scale_1,
                                this.props.pain_scale.pain_scale_2,
                                this.props.pain_scale.pain_scale_3,
                                this.props.pain_scale.pain_scale_4,
                                this.props.pain_scale.pain_scale_5,
                                this.props.pain_scale.pain_scale_6,
                                this.props.pain_scale.pain_scale_7,
                                this.props.pain_scale.pain_scale_8,
                                this.props.pain_scale.pain_scale_9,
                                this.props.pain_scale.pain_scale_10,
                                this.props.pain_scale.pain_scale_11,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                hasChronicChart = (<Bar data={hasChronicData} width={350} height={350} options={barOptions} />);
                chronicValuesChart = (<Bar data={chronicValuesData} width={350} height={350} options={barOptions} />);
                takesMedsChart = (<Bar data={takesMedsData} width={350} height={350} options={barOptions} />);
                medsNumberChart = (<Bar data={medsNumberData} width={350} height={350} options={histogramOptions} />);
                medsValuesChart = (<Bar data={medsValuesData} width={350} height={350} options={barOptions} />);
                painValueChart = (<Bar data={painValueData} width={350} height={350} options={barOptions} />);
                localPainValueChart = (<Bar data={localPainValueData} width={350} height={350} options={barOptions} />);
                painScaleChart = (<Bar data={painScaleData} width={350} height={350} options={barOptions} />);
                break;

            case ('option3'):
                hasChronicTotal = hasChronicGenderTotal;
                chronicValuesTotal = chronicValuesGenderTotal;
                takesMedsTotal = takesMedsGenderTotal;
                medsValuesTotal = medsValuesGenderTotal;
                medsNumberTotal = medsNumberGenderTotal;
                painValueTotal = painValueGenderTotal;
                localPainTotal = localPainGenderTotal;
                painScaleTotal = painScaleGenderTotal;

                hasChronicData = {
                    labels: genderLabels,
                    datasets: hasChronicGenderData
                };

                chronicValuesData = {
                    labels: genderLabels,
                    datasets: chronicValuesGenderData
                };

                takesMedsData = {
                    labels: genderLabels,
                    datasets: takesMedsGenderData
                };

                medsNumberData = {
                    labels: genderLabels,
                    datasets: medsNumberGenderData
                };

                medsValuesData = {
                    labels: genderLabels,
                    datasets: medsValuesGenderData
                };

                painValueData = {
                    labels: genderLabels,
                    datasets: painValueGenderData
                };

                localPainValueData = {
                    labels: genderLabels,
                    datasets: localPainGenderData
                };

                painScaleData = {
                    labels: genderLabels,
                    datasets: painScaleGenderData
                };

                hasChronicChart = (<Bar data={hasChronicData} width={350} height={350} options={barOptionsLegend} />);
                chronicValuesChart = (<Bar data={chronicValuesData} width={350} height={350} options={barOptionsLegend} />);
                takesMedsChart = (<Bar data={takesMedsData} width={350} height={350} options={barOptionsLegend} />);
                medsNumberChart = (<Bar data={medsNumberData} width={350} height={350} options={histogramOptions} />);
                medsValuesChart = (<Bar data={medsValuesData} width={350} height={350} options={barOptionsLegend} />);
                painValueChart = (<Bar data={painValueData} width={350} height={350} options={barOptionsLegend} />);
                localPainValueChart = (<Bar data={localPainValueData} width={350} height={350} options={barOptionsLegend} />);
                painScaleChart = (<Bar data={painScaleData} width={350} height={350} options={barOptionsLegend} />);
                break;

            case ('option4'):
                hasChronicTotal = hasChronicAgeTotal;
                chronicValuesTotal = chronicValuesAgeTotal;
                takesMedsTotal = takesMedsAgeTotal;
                medsValuesTotal = medsValuesAgeTotal;
                medsNumberTotal = medsNumberAgeTotal;
                painValueTotal = painValueAgeTotal;
                localPainTotal = localPainAgeTotal;
                painScaleTotal = painScaleAgeTotal;

                hasChronicData = {
                    labels: chartAgesLabels,
                    datasets: hasChronicAgeData
                };

                chronicValuesData = {
                    labels: chartAgesLabels,
                    datasets: chronicValuesAgeData
                };

                takesMedsData = {
                    labels: chartAgesLabels,
                    datasets: takesMedsAgeData
                };

                medsNumberData = {
                    labels: chartAgesLabels,
                    datasets: medsNumberAgeData
                };

                medsValuesData = {
                    labels: chartAgesLabels,
                    datasets: medsValuesAgeData
                };

                painValueData = {
                    labels: chartAgesLabels,
                    datasets: painValueAgeData
                };

                localPainValueData = {
                    labels: chartAgesLabels,
                    datasets: localPainAgeData
                };

                painScaleData = {
                    labels: chartAgesLabels,
                    datasets: painScaleAgeData
                };

                hasChronicChart = (<Bar data={hasChronicData} width={350} height={350} options={barOptionsLegend} />);
                chronicValuesChart = (<Bar data={chronicValuesData} width={350} height={350} options={barOptionsLegend} />);
                takesMedsChart = (<Bar data={takesMedsData} width={350} height={350} options={barOptionsLegend} />);
                medsNumberChart = (<Bar data={medsNumberData} width={350} height={350} options={histogramOptions} />);
                medsValuesChart = (<Bar data={medsValuesData} width={350} height={350} options={barOptionsLegend} />);
                painValueChart = (<Bar data={painValueData} width={350} height={350} options={barOptionsLegend} />);
                localPainValueChart = (<Bar data={localPainValueData} width={350} height={350} options={barOptionsLegend} />);
                painScaleChart = (<Bar data={painScaleData} width={350} height={350} options={barOptionsLegend} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="has-disease2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {hasChronicTotal}</small></div>
                        {hasChronicChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="chronic-diseases2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {chronicValuesTotal}</small></div>
                        {chronicValuesChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="take-meds2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {takesMedsTotal}</small></div>
                        {takesMedsChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="meds-number2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {medsNumberTotal}</small></div>
                        {medsNumberChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="meds" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {medsValuesTotal}</small></div>
                        {medsValuesChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="pain2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {painValueTotal}</small></div>
                        {painValueChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="local-pain" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {localPainTotal}</small></div>
                        {localPainValueChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="pain-scale2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {painScaleTotal}</small></div>
                        {painScaleChart}
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
        has_chronic: state.general_indicators.has_chronic,
        hasChronic_gender: state.by_gender.hasChronic_gender,
        hasChronic_age: state.by_age.hasChronic_age,
        chronic_values: state.general_indicators.chronic_values,
        chronicValues_gender: state.by_gender.chronicValues_gender,
        chronicValues_age: state.by_age.chronicValues_age,
        takes_meds: state.general_indicators.takes_meds,
        takesMeds_gender: state.by_gender.takesMeds_gender,
        takesMeds_age: state.by_age.takesMeds_age,
        meds_number: state.general_indicators.meds_number,
        medsNumber_gender: state.by_gender.medsNumber_gender,
        medsNumber_age: state.by_age.medsNumber_age,
        meds_values: state.general_indicators.meds_values,
        medsValues_gender: state.by_gender.medsValues_gender,
        medsValues_age: state.by_age.medsValues_age,
        pain_value: state.general_indicators.pain_value,
        painValue_gender: state.by_gender.painValue_gender,
        painValue_age: state.by_age.painValue_age,
        local_pain: state.general_indicators.local_pain,
        localPain_gender: state.by_gender.localPain_gender,
        localPain_age: state.by_age.localPain_age,
        pain_scale: state.general_indicators.pain_scale,
        painScale_gender: state.by_gender.painScale_gender,
        painScale_age: state.by_age.painScale_age,
        painValues: state.fetchRefValues.painValues,
        painScaleValues: state.fetchRefValues.painScaleValues,
        chronicValues: state.fetchRefValues.chronicValues,
        medsValues: state.fetchRefValues.medsValues,
        localPainValues: state.fetchRefValues.localPainValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHasChronic: (department, year) => dispatch(actions.fetchHasChronic(department, year)),
        fetchHasChronicByGender: (department, year) => dispatch(actions.fetchHasChronicByGender(department, year)),
        fetchHasChronicByAge: (department, year) => dispatch(actions.fetchHasChronicByAge(department, year)),
        fetchChronicValues: (department, year) => dispatch(actions.fetchChronicValues(department, year)),
        fetchChronicValuesByGender: (department, year) => dispatch(actions.fetchChronicValuesByGender(department, year)),
        fetchChronicValuesByAge: (department, year) => dispatch(actions.fetchChronicValuesByAge(department, year)),
        fetchMedsNumber: (department, year) => dispatch(actions.fetchMedsNumber(department, year)),
        fetchMedsNumberByGender: (department, year) => dispatch(actions.fetchMedsNumberByGender(department, year)),
        fetchMedsNumberByAge: (department, year) => dispatch(actions.fetchMedsNumberByAge(department, year)),
        fetchMedsValues: (department, year) => dispatch(actions.fetchMedsValues(department, year)),
        fetchMedsValuesByGender: (department, year) => dispatch(actions.fetchMedsValuesByGender(department, year)),
        fetchMedsValuesByAge: (department, year) => dispatch(actions.fetchMedsValuesByAge(department, year)),
        fetchLocalPain: (department, year) => dispatch(actions.fetchLocalPain(department, year)),
        fetchLocalPainByGender: (department, year) => dispatch(actions.fetchLocalPainByGender(department, year)),
        fetchLocalPainByAge: (department, year) => dispatch(actions.fetchLocalPainByAge(department, year)),
        fetchTakesMeds: (department, year) => dispatch(actions.fetchTakesMeds(department, year)),
        fetchTakesMedsByGender: (department, year) => dispatch(actions.fetchTakesMedsByGender(department, year)),
        fetchTakesMedsByAge: (department, year) => dispatch(actions.fetchTakesMedsByAge(department, year)),
        fetchPainValue: (department, year) => dispatch(actions.fetchPainValue(department, year)),
        fetchPainValueByGender: (department, year) => dispatch(actions.fetchPainValueByGender(department, year)),
        fetchPainValueByAge: (department, year) => dispatch(actions.fetchPainValueByAge(department, year)),
        fetchPainScale: (department, year) => dispatch(actions.fetchPainScale(department, year)),
        fetchPainScaleByGender: (department, year) => dispatch(actions.fetchPainScaleByGender(department, year)),
        fetchPainScaleByAge: (department, year) => dispatch(actions.fetchPainScaleByAge(department, year)),
        fetchPainValueValues: () => dispatch(actions.fetchPainValueValues()),
        fetchPainScaleValues: () => dispatch(actions.fetchPainScaleValues()),
        fetchChronicValueValues: () => dispatch(actions.fetchChronicDiseasesValues()),
        fetchMedsValueValues: () => dispatch(actions.fetchTakesMedsValues()),
        fetchLocalPainValues: () => dispatch(actions.fetchLocalPainValues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator3);