import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, pieOptions, bgColors, barOptionsLegend } from '../../utility/chartsOptions';

class indicator1 extends Component {
    fetchData() {
        this.props.fetchSpirometry(this.props.department, this.props.year);
        this.props.fetchSpirometryChange(this.props.department, this.props.year);
        this.props.fetchSpirometryByGender(this.props.department, this.props.year);
        this.props.fetchSpirometryByAge(this.props.department, this.props.year);
        this.props.fetchSpirometryChangeByGender(this.props.department, this.props.year);
        this.props.fetchSpirometryChangeByAge(this.props.department, this.props.year);

        this.props.fetchVisualScreening(this.props.department, this.props.year);
        this.props.fetchVisualScreeningChange(this.props.department, this.props.year);
        this.props.fetchVisualScreeningByGender(this.props.department, this.props.year);
        this.props.fetchVisualScreeningByAge(this.props.department, this.props.year);
        this.props.fetchVisualScreeningChangeByGender(this.props.department, this.props.year);
        this.props.fetchVisualScreeningChangeByAge(this.props.department, this.props.year);

        this.props.fetchAuditoryScreening(this.props.department, this.props.year);
        this.props.fetchAuditoryScreeningChange(this.props.department, this.props.year);
        this.props.fetchAuditoryScreeningByGender(this.props.department, this.props.year);
        this.props.fetchAuditoryScreeningByAge(this.props.department, this.props.year);
        this.props.fetchAuditoryScreeningChangeByGender(this.props.department, this.props.year);
        this.props.fetchAuditoryScreeningChangeByAge(this.props.department, this.props.year);

        this.props.fetchEcg(this.props.department, this.props.year);
        this.props.fetchEcgChange(this.props.department, this.props.year);
        this.props.fetchEcgByGender(this.props.department, this.props.year);
        this.props.fetchEcgByAge(this.props.department, this.props.year);
        this.props.fetchEcgChangeByGender(this.props.department, this.props.year);
        this.props.fetchEcgChangeByAge(this.props.department, this.props.year);

        this.props.fetchEritrogram(this.props.department, this.props.year);
        this.props.fetchEritrogramChange(this.props.department, this.props.year);
        this.props.fetchEritrogramByGender(this.props.department, this.props.year);
        this.props.fetchEritrogramByAge(this.props.department, this.props.year);
        this.props.fetchEritrogramChangeByGender(this.props.department, this.props.year);
        this.props.fetchEritrogramChangeByAge(this.props.department, this.props.year);

        this.props.fetchLeukogram(this.props.department, this.props.year);
        this.props.fetchLeukogramChange(this.props.department, this.props.year);
        this.props.fetchLeukogramByGender(this.props.department, this.props.year);
        this.props.fetchLeukogramByAge(this.props.department, this.props.year);
        this.props.fetchLeukogramChangeByGender(this.props.department, this.props.year);
        this.props.fetchLeukogramChangeByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
            this.props.fetchSpirometryChangeValues();
            this.props.fetchVisualChangeValues();
            this.props.fetchAuditoryChangeValues();
            this.props.fetchEcgChangeValues();
            this.props.fetchEritrogramChangeValues();
            this.props.fetchLeukogramChangeValues();
        };
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const spirometryChangeLabels = this.props.spirometryChangeValues.map(cv => cv.value);
        const visualChangeLabels = this.props.visualChangeValues.map(cv => cv.value);
        const auditoryChangeLabels = this.props.auditoryChangeValues.map(cv => cv.value);
        const ecgChangeLabels = this.props.ecgChangeValues.map(cv => cv.value);
        const eritrogramChangeLabels = this.props.eritrogramChangeValues.map(cv => cv.value);
        const leukogramChangeLabels = this.props.leukogramChangeValues.map(cv => cv.value);

        let yesNoLabels = null;
        if (localStorage.getItem('language') === "pt") {
            yesNoLabels = ["Normal", "Alerado"]
        } else {
            yesNoLabels = ["Normal", "Changed"]
        }

        //spirometry by gender
        const spirometryGenderArray = [].concat(...this.props.spirometry_gender);
        spirometryGenderArray.splice(-1, 1);
        const spriometrygendermap = spirometryGenderArray.map(w => w.total);
        const spirometryGenderTotal = spriometrygendermap.reduce((a, b) => a + b, 0);
        let spirometryGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = spirometryGenderArray.filter(a => a.spirometry === i);
            const total = filter.map(a => a.total);
            spirometryGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spirometryGenderData = Object.keys(spirometryGenderObject).map(key => {
            return spirometryGenderObject[key];
        });

        //spirometry by age
        const spirometryAgeArray = [].concat(...this.props.spirometry_age);
        spirometryAgeArray.splice(-1, 1);
        const spriometryagemap = spirometryAgeArray.map(w => w.total);
        const spirometryAgeTotal = spriometryagemap.reduce((a, b) => a + b, 0);
        let spirometryAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = spirometryAgeArray.filter(a => a.spirometry === i);
            const total = filter.map(a => a.total);
            spirometryAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spirometryAgeData = Object.keys(spirometryAgeObject).map(key => {
            return spirometryAgeObject[key];
        });

        //spirometry change by gender
        const spirometryChangeGenderArray = [].concat(...this.props.spirometryChange_gender);
        spirometryChangeGenderArray.splice(-1, 1);
        const spriometrychangegendermap = spirometryChangeGenderArray.map(w => w.total);
        const spirometryChangeGenderTotal = spriometrychangegendermap.reduce((a, b) => a + b, 0);
        const spirometryChangeIds = spirometryChangeGenderArray.map(a => a.id);
        const spirometryChangeMax = Math.max(...spirometryChangeIds);
        let spirometryChangeGenderObject = {};
        for (let i = 1; i <= spirometryChangeMax; i++) {
            const filter = spirometryChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.spirometry_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            spirometryChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spirometryChangeGenderData = Object.keys(spirometryChangeGenderObject).map(key => {
            return spirometryChangeGenderObject[key];
        });

        //spirometry change by age
        const spirometryChangeAgeArray = [].concat(...this.props.spirometryChange_age);
        spirometryChangeAgeArray.splice(-1, 1);
        const spriometrychangeagemap = spirometryChangeAgeArray.map(w => w.total);
        const spirometryChangeAgeTotal = spriometrychangeagemap.reduce((a, b) => a + b, 0);
        const spirometryChangeAgeIds = spirometryChangeAgeArray.map(a => a.id);
        const spirometryChangeAgeMax = Math.max(...spirometryChangeAgeIds);
        let spirometryChangeAgeObject = {};
        for (let i = 1; i <= spirometryChangeAgeMax; i++) {
            const filter = spirometryChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.spirometry_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            spirometryChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spirometryChangeAgeData = Object.keys(spirometryChangeAgeObject).map(key => {
            return spirometryChangeAgeObject[key];
        });

        //visual screening by gender
        const visualScreeningGenderArray = [].concat(...this.props.visualScreening_gender);
        visualScreeningGenderArray.splice(-1, 1);
        const visualgendermap = visualScreeningGenderArray.map(w => w.total);
        const visualScreeningGenderTotal = visualgendermap.reduce((a, b) => a + b, 0);
        let visualScreeningGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = visualScreeningGenderArray.filter(a => a.visual_screening === i);
            const total = filter.map(a => a.total);
            visualScreeningGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const visualScreeningGenderData = Object.keys(visualScreeningGenderObject).map(key => {
            return visualScreeningGenderObject[key];
        });

        //visual screening by age
        const visualScreeningAgeArray = [].concat(...this.props.visualScreening_age);
        visualScreeningAgeArray.splice(-1, 1);
        const visualagemap = visualScreeningAgeArray.map(w => w.total);
        const visualScreeningAgeTotal = visualagemap.reduce((a, b) => a + b, 0);
        let visualScreeningAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = visualScreeningAgeArray.filter(a => a.visual_screening === i);
            const total = filter.map(a => a.total);
            visualScreeningAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const visualScreeningAgeData = Object.keys(visualScreeningAgeObject).map(key => {
            return visualScreeningAgeObject[key];
        });

        //visual screening change by gender
        const visualScreeningChangeGenderArray = [].concat(...this.props.visualScreeningChange_gender);
        visualScreeningChangeGenderArray.splice(-1, 1);
        const visualchangegendermap = visualScreeningChangeGenderArray.map(w => w.total);
        const visualScreeningChangeGenderTotal = visualchangegendermap.reduce((a, b) => a + b, 0);
        const visualScreeningChangeIds = visualScreeningChangeGenderArray.map(a => a.id);
        const visualScreeningChangeMax = Math.max(...visualScreeningChangeIds);
        let visualScreeningChangeGenderObject = {};
        for (let i = 1; i <= visualScreeningChangeMax; i++) {
            const filter = visualScreeningChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.visual_screening_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            visualScreeningChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const visualScreeningChangeGenderData = Object.keys(visualScreeningChangeGenderObject).map(key => {
            return visualScreeningChangeGenderObject[key];
        });

        //visual screening change by age
        const visualScreeningChangeAgeArray = [].concat(...this.props.visualScreeningChange_age);
        visualScreeningChangeAgeArray.splice(-1, 1);
        const visualchangeagemap = visualScreeningChangeAgeArray.map(w => w.total);
        const visualScreeningChangeAgeTotal = visualchangeagemap.reduce((a, b) => a + b, 0);
        const visualScreeningChangeAgeIds = visualScreeningChangeAgeArray.map(a => a.id);
        const visualScreeningChangeAgeMax = Math.max(...visualScreeningChangeAgeIds);
        let visualScreeningChangeAgeObject = {};
        for (let i = 1; i <= visualScreeningChangeAgeMax; i++) {
            const filter = visualScreeningChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.visual_screning_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            visualScreeningChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const visualScreeningChangeAgeData = Object.keys(visualScreeningChangeAgeObject).map(key => {
            return visualScreeningChangeAgeObject[key];
        });

        //auditory screening by gender
        const auditoryScreeningGenderArray = [].concat(...this.props.auditoryScreening_gender);
        auditoryScreeningGenderArray.splice(-1, 1);
        const auditorygendermap = auditoryScreeningGenderArray.map(w => w.total);
        const auditoryScreeningGenderTotal = auditorygendermap.reduce((a, b) => a + b, 0);
        let auditoryScreeningGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = auditoryScreeningGenderArray.filter(a => a.auditory_screening === i);
            const total = filter.map(a => a.total);
            auditoryScreeningGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const auditoryScreeningGenderData = Object.keys(auditoryScreeningGenderObject).map(key => {
            return auditoryScreeningGenderObject[key];
        });

        //auditory screening by age
        const auditoryScreeningAgeArray = [].concat(...this.props.auditoryScreening_age);
        auditoryScreeningAgeArray.splice(-1, 1);
        const auditoryagemap = auditoryScreeningAgeArray.map(w => w.total);
        const auditoryScreeningAgeTotal = auditoryagemap.reduce((a, b) => a + b, 0);
        let auditoryScreeningAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = auditoryScreeningAgeArray.filter(a => a.auditory_screening === i);
            const total = filter.map(a => a.total);
            auditoryScreeningAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const auditoryScreeningAgeData = Object.keys(auditoryScreeningAgeObject).map(key => {
            return auditoryScreeningAgeObject[key];
        });

        //auditory screening change by gender
        const auditoryScreeningChangeGenderArray = [].concat(...this.props.auditoryScreeningChange_gender);
        auditoryScreeningChangeGenderArray.splice(-1, 1);
        const auditorychangegendermap = auditoryScreeningChangeGenderArray.map(w => w.total);
        const auditoryScreeningChangeGenderTotal = auditorychangegendermap.reduce((a, b) => a + b, 0);
        const auditoryScreeningChangeIds = auditoryScreeningChangeGenderArray.map(a => a.id);
        const auditoryScreeningChangeMax = Math.max(...auditoryScreeningChangeIds);
        let auditoryScreeningChangeGenderObject = {};
        for (let i = 1; i <= auditoryScreeningChangeMax; i++) {
            const filter = auditoryScreeningChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.auditory_screening_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            auditoryScreeningChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const auditoryScreeningChangeGenderData = Object.keys(auditoryScreeningChangeGenderObject).map(key => {
            return auditoryScreeningChangeGenderObject[key];
        });

        //auditory screening change by age
        const auditoryScreeningChangeAgeArray = [].concat(...this.props.auditoryScreeningChange_age);
        auditoryScreeningChangeAgeArray.splice(-1, 1);
        const auditorychangeagemap = auditoryScreeningChangeAgeArray.map(w => w.total);
        const auditoryScreeningChangeAgeTotal = auditorychangeagemap.reduce((a, b) => a + b, 0);
        const auditoryScreeningChangeAgeIds = auditoryScreeningChangeAgeArray.map(a => a.id);
        const auditoryScreeningChangeAgeMax = Math.max(...auditoryScreeningChangeAgeIds);
        let auditoryScreeningChangeAgeObject = {};
        for (let i = 1; i <= auditoryScreeningChangeAgeMax; i++) {
            const filter = auditoryScreeningChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.auditory_screening_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            auditoryScreeningChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const auditoryScreeningChangeAgeData = Object.keys(auditoryScreeningChangeAgeObject).map(key => {
            return auditoryScreeningChangeAgeObject[key];
        });

        //ecg by gender
        const ecgGenderArray = [].concat(...this.props.ecg_gender);
        ecgGenderArray.splice(-1, 1);
        const ecggendermap = ecgGenderArray.map(w => w.total);
        const ecgGenderTotal = ecggendermap.reduce((a, b) => a + b, 0);
        let ecgGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = ecgGenderArray.filter(a => a.ecg === i);
            const total = filter.map(a => a.total);
            ecgGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const ecgGenderData = Object.keys(ecgGenderObject).map(key => {
            return ecgGenderObject[key];
        });

        //ecg by age
        const ecgAgeArray = [].concat(...this.props.ecg_age);
        ecgAgeArray.splice(-1, 1);
        const ecgagemap = ecgAgeArray.map(w => w.total);
        const ecgAgeTotal = ecgagemap.reduce((a, b) => a + b, 0);
        let ecgAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = ecgAgeArray.filter(a => a.ecg === i);
            const total = filter.map(a => a.total);
            ecgAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const ecgAgeData = Object.keys(ecgAgeObject).map(key => {
            return ecgAgeObject[key];
        });

        //ecg change by gender
        const ecgChangeGenderArray = [].concat(...this.props.ecgChange_gender);
        ecgChangeGenderArray.splice(-1, 1);
        const ecgchangegendermap = ecgChangeGenderArray.map(w => w.total);
        const ecgChangeGenderTotal = ecgchangegendermap.reduce((a, b) => a + b, 0);
        const ecgChangeIds = ecgChangeGenderArray.map(a => a.id);
        const ecgChangeMax = Math.max(...ecgChangeIds);
        let ecgChangeGenderObject = {};
        for (let i = 1; i <= ecgChangeMax; i++) {
            const filter = ecgChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.ecg_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            ecgChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const ecgChangeGenderData = Object.keys(ecgChangeGenderObject).map(key => {
            return ecgChangeGenderObject[key];
        });

        //ecg change by age
        const ecgChangeAgeArray = [].concat(...this.props.ecgChange_age);
        ecgChangeAgeArray.splice(-1, 1);
        const ecgchangeagemap = ecgChangeAgeArray.map(w => w.total);
        const ecgChangeAgeTotal = ecgchangeagemap.reduce((a, b) => a + b, 0);
        const ecgChangeAgeIds = ecgChangeAgeArray.map(a => a.id);
        const ecgChangeAgeMax = Math.max(...ecgChangeAgeIds);
        let ecgChangeAgeObject = {};
        for (let i = 1; i <= ecgChangeAgeMax; i++) {
            const filter = ecgChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.ecg_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            ecgChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const ecgChangeAgeData = Object.keys(ecgChangeAgeObject).map(key => {
            return ecgChangeAgeObject[key];
        });

        //eritrogram by gender
        const eritrogramGenderArray = [].concat(...this.props.eritrogram_gender);
        eritrogramGenderArray.splice(-1, 1);
        const eritrogramgendermap = eritrogramGenderArray.map(w => w.total);
        const eritrogramGenderTotal = eritrogramgendermap.reduce((a, b) => a + b, 0);
        let eritrogramGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = eritrogramGenderArray.filter(a => a.eritrogram === i);
            const total = filter.map(a => a.total);
            eritrogramGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const eritrogramGenderData = Object.keys(eritrogramGenderObject).map(key => {
            return eritrogramGenderObject[key];
        });

        //eritrogram by age
        const eritrogramAgeArray = [].concat(...this.props.eritrogram_age);
        eritrogramAgeArray.splice(-1, 1);
        const eritrogramagemap = eritrogramAgeArray.map(w => w.total);
        const eritrogramAgeTotal = eritrogramagemap.reduce((a, b) => a + b, 0);
        let eritrogramAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = eritrogramAgeArray.filter(a => a.eritrogram === i);
            const total = filter.map(a => a.total);
            eritrogramAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const eritrogramAgeData = Object.keys(eritrogramAgeObject).map(key => {
            return eritrogramAgeObject[key];
        });

        //eritrogram change by gender
        const eritrogramChangeGenderArray = [].concat(...this.props.eritrogramChange_gender);
        eritrogramChangeGenderArray.splice(-1, 1);
        const eritrogramchangegendermap = eritrogramChangeGenderArray.map(w => w.total);
        const eritrogramChangeGenderTotal = eritrogramchangegendermap.reduce((a, b) => a + b, 0);
        const eritrogramChangeIds = eritrogramChangeGenderArray.map(a => a.id);
        const eritrogramChangeMax = Math.max(...eritrogramChangeIds);
        let eritrogramChangeGenderObject = {};
        for (let i = 1; i <= eritrogramChangeMax; i++) {
            const filter = eritrogramChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.eritrogram_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            eritrogramChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const eritrogramChangeGenderData = Object.keys(eritrogramChangeGenderObject).map(key => {
            return eritrogramChangeGenderObject[key];
        });

        //eritrogram change by age
        const eritrogramChangeAgeArray = [].concat(...this.props.eritrogramChange_age);
        eritrogramChangeAgeArray.splice(-1, 1);
        const eritrogramchangeagemap = eritrogramChangeAgeArray.map(w => w.total);
        const eritrogramChangeAgeTotal = eritrogramchangeagemap.reduce((a, b) => a + b, 0);
        const eritrogramChangeAgeIds = eritrogramChangeAgeArray.map(a => a.id);
        const eritrogramChangeAgeMax = Math.max(...eritrogramChangeAgeIds);
        let eritrogramChangeAgeObject = {};
        for (let i = 1; i <= eritrogramChangeAgeMax; i++) {
            const filter = eritrogramChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.eritrogram_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            eritrogramChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const eritrogramChangeAgeData = Object.keys(eritrogramChangeAgeObject).map(key => {
            return eritrogramChangeAgeObject[key];
        });

        //leukogram by gender
        const leukogramGenderArray = [].concat(...this.props.leukogram_gender);
        leukogramGenderArray.splice(-1, 1);
        const leukogramgendermap = leukogramGenderArray.map(w => w.total);
        const leukogramGenderTotal = leukogramgendermap.reduce((a, b) => a + b, 0);
        let leukogramGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = leukogramGenderArray.filter(a => a.leukogram === i);
            const total = filter.map(a => a.total);
            leukogramGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const leukogramGenderData = Object.keys(leukogramGenderObject).map(key => {
            return leukogramGenderObject[key];
        });

        //leukogram by age
        const leukogramAgeArray = [].concat(...this.props.leukogram_age);
        leukogramAgeArray.splice(-1, 1);
        const leukogramagemap = leukogramAgeArray.map(w => w.total);
        const leukogramAgeTotal = leukogramagemap.reduce((a, b) => a + b, 0);
        let leukogramAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = leukogramAgeArray.filter(a => a.leukogram === i);
            const total = filter.map(a => a.total);
            leukogramAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const leukogramAgeData = Object.keys(leukogramAgeObject).map(key => {
            return leukogramAgeObject[key];
        });

        //leukogram change by gender
        const leukogramChangeGenderArray = [].concat(...this.props.leukogramChange_gender);
        leukogramChangeGenderArray.splice(-1, 1);
        const leukogramchangegendermap = leukogramChangeGenderArray.map(w => w.total);
        const leukogramChangeGenderTotal = leukogramchangegendermap.reduce((a, b) => a + b, 0);
        const leukogramChangeIds = leukogramChangeGenderArray.map(a => a.id);
        const leukogramChangeMax = Math.max(...leukogramChangeIds);
        let leukogramChangeGenderObject = {};
        for (let i = 1; i <= leukogramChangeMax; i++) {
            const filter = leukogramChangeGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.leukogram_change_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            leukogramChangeGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const leukogramChangeGenderData = Object.keys(leukogramChangeGenderObject).map(key => {
            return leukogramChangeGenderObject[key];
        });

        //leukogram change by age
        const leukogramChangeAgeArray = [].concat(...this.props.leukogramChange_age);
        leukogramChangeAgeArray.splice(-1, 1);
        const leukogramchangeagemap = leukogramChangeAgeArray.map(w => w.total);
        const leukogramChangeAgeTotal = leukogramchangeagemap.reduce((a, b) => a + b, 0);
        const leukogramChangeAgeIds = leukogramChangeAgeArray.map(a => a.id);
        const leukogramChangeAgeMax = Math.max(...leukogramChangeAgeIds);
        let leukogramChangeAgeObject = {};
        for (let i = 1; i <= leukogramChangeAgeMax; i++) {
            const filter = leukogramChangeAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.leukogram_change_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            leukogramChangeAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const leukogramChangeAgeData = Object.keys(leukogramChangeAgeObject).map(key => {
            return leukogramChangeAgeObject[key];
        });

        let spirometryChart, spirometryChangeChart, visualScreeningChart, visualScreeningChangeChart, auditoryScreeningChart, auditoryScreeningChangeChart, ecgChart, ecgChangeChart, eritrogramChart, eritrogramChangeChart, leukogramChart, leukogramChangeChart, spirometryData, spirometryChangeData, visualScreeningData, visualScreeningChangeData, auditoryScreeningData, auditoryScreeningChangeData, ecgData, ecgChangeData, eritrogramData, eritrogramChangeData, leukogramData, leukogramChangeData = null;
        let spirometryTotal = this.props.spirometry.total;
        let spirometryChangeTotal = this.props.spirometry_change.total;
        let visualScreeningTotal = this.props.visual_screening.total;
        let visualScreeningChangeTotal = this.props.visual_change.total;
        let auditoryScreeningTotal = this.props.auditory_screening.total;
        let auditoryScreeningChangeTotal = this.props.auditory_change.total;
        let ecgTotal = this.props.ecg.total;
        let ecgChangeTotal = this.props.ecg_change.total;
        let eritrogramTotal = this.props.eritrogram.total;
        let eritrogramChangeTotal = this.props.eritrogram_change.total;
        let leukogramTotal = this.props.leukogram.total;
        let leukogramChangeTotal = this.props.leukogram_change.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                spirometryData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.spirometry.spirometry_0_percentage,
                                this.props.spirometry.spirometry_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                spirometryChangeData = {
                    labels: spirometryChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.spirometry_change.spirometry_change_1_percentage,
                                this.props.spirometry_change.spirometry_change_2_percentage,
                                this.props.spirometry_change.spirometry_change_3_percentage,
                                this.props.spirometry_change.spirometry_change_4_percentage,
                                this.props.spirometry_change.spirometry_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                visualScreeningData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.visual_screening.visual_screening_0_percentage,
                                this.props.visual_screening.visual_screening_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                visualScreeningChangeData = {
                    labels: visualChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.visual_change.visual_change_1_percentage,
                                this.props.visual_change.visual_change_2_percentage,
                                this.props.visual_change.visual_change_3_percentage,
                                this.props.visual_change.visual_change_4_percentage,
                                this.props.visual_change.visual_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                auditoryScreeningData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.auditory_screening.auditory_screening_0_percentage,
                                this.props.auditory_screening.auditory_screening_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                auditoryScreeningChangeData = {
                    labels: auditoryChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.auditory_change.auditory_change_1_percentage,
                                this.props.auditory_change.auditory_change_2_percentage,
                                this.props.auditory_change.auditory_change_3_percentage,
                                this.props.auditory_change.auditory_change_4_percentage,
                                this.props.auditory_change.auditory_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ecgData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.ecg.ecg_0_percentage,
                                this.props.ecg.ecg_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ecgChangeData = {
                    labels: ecgChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.ecg_change.ecg_change_1_percentage,
                                this.props.ecg_change.ecg_change_2_percentage,
                                this.props.ecg_change.ecg_change_3_percentage,
                                this.props.ecg_change.ecg_change_4_percentage,
                                this.props.ecg_change.ecg_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                eritrogramData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.eritrogram.eritrogram_0_percentage,
                                this.props.eritrogram.eritrogram_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                eritrogramChangeData = {
                    labels: eritrogramChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.eritrogram_change.eritrogram_change_1_percentage,
                                this.props.eritrogram_change.eritrogram_change_2_percentage,
                                this.props.eritrogram_change.eritrogram_change_3_percentage,
                                this.props.eritrogram_change.eritrogram_change_4_percentage,
                                this.props.eritrogram_change.eritrogram_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                leukogramData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.leukogram.leukogram_0_percentage,
                                this.props.leukogram.leukogram_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                leukogramChangeData = {
                    labels: leukogramChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.leukogram_change.leukogram_change_1_percentage,
                                this.props.leukogram_change.leukogram_change_2_percentage,
                                this.props.leukogram_change.leukogram_change_3_percentage,
                                this.props.leukogram_change.leukogram_change_4_percentage,
                                this.props.leukogram_change.leukogram_change_5_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                spirometryChart = (<Pie data={spirometryData} width={350} height={350} options={pieOptions} />);
                spirometryChangeChart = (<Pie data={spirometryChangeData} width={350} height={350} options={pieOptions} />);
                visualScreeningChart = (<Pie data={visualScreeningData} width={350} height={350} options={pieOptions} />);
                visualScreeningChangeChart = (<Pie data={visualScreeningChangeData} width={350} height={350} options={pieOptions} />);
                auditoryScreeningChart = (<Pie data={auditoryScreeningData} width={350} height={350} options={pieOptions} />);
                auditoryScreeningChangeChart = (<Pie data={auditoryScreeningChangeData} width={350} height={350} options={pieOptions} />);
                ecgChart = (<Pie data={ecgData} width={350} height={350} options={pieOptions} />);
                ecgChangeChart = (<Pie data={ecgChangeData} width={350} height={350} options={pieOptions} />);
                eritrogramChart = (<Pie data={eritrogramData} width={350} height={350} options={pieOptions} />);
                eritrogramChangeChart = (<Pie data={eritrogramChangeData} width={350} height={350} options={pieOptions} />);
                leukogramChart = (<Pie data={leukogramData} width={350} height={350} options={pieOptions} />);
                leukogramChangeChart = (<Pie data={leukogramChangeData} width={350} height={350} options={pieOptions} />);
                break;

            case ('option2'):
                spirometryData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.spirometry.spirometry_0,
                                this.props.spirometry.spirometry_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                spirometryChangeData = {
                    labels: spirometryChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.spirometry_change.spirometry_change_1,
                                this.props.spirometry_change.spirometry_change_2,
                                this.props.spirometry_change.spirometry_change_3,
                                this.props.spirometry_change.spirometry_change_4,
                                this.props.spirometry_change.spirometry_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                visualScreeningData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.visual_screening.visual_screening_0,
                                this.props.visual_screening.visual_screening_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                visualScreeningChangeData = {
                    labels: visualChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.visual_change.visual_change_1,
                                this.props.visual_change.visual_change_2,
                                this.props.visual_change.visual_change_3,
                                this.props.visual_change.visual_change_4,
                                this.props.visual_change.visual_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                auditoryScreeningData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.auditory_screening.auditory_screening_0,
                                this.props.auditory_screening.auditory_screening_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                auditoryScreeningChangeData = {
                    labels: auditoryChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.auditory_change.auditory_change_1,
                                this.props.auditory_change.auditory_change_2,
                                this.props.auditory_change.auditory_change_3,
                                this.props.auditory_change.auditory_change_4,
                                this.props.auditory_change.auditory_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ecgData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.ecg.ecg_0,
                                this.props.ecg.ecg_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                ecgChangeData = {
                    labels: ecgChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.ecg_change.ecg_change_1,
                                this.props.ecg_change.ecg_change_2,
                                this.props.ecg_change.ecg_change_3,
                                this.props.ecg_change.ecg_change_4,
                                this.props.ecg_change.ecg_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                eritrogramData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.eritrogram.eritrogram_0,
                                this.props.eritrogram.eritrogram_1
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                eritrogramChangeData = {
                    labels: eritrogramChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.eritrogram_change.eritrogram_change_1,
                                this.props.eritrogram_change.eritrogram_change_2,
                                this.props.eritrogram_change.eritrogram_change_3,
                                this.props.eritrogram_change.eritrogram_change_4,
                                this.props.eritrogram_change.eritrogram_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                leukogramData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.leukogram.leukogram_0,
                                this.props.leukogram.leukogram_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                leukogramChangeData = {
                    labels: leukogramChangeLabels,
                    datasets: [
                        {
                            data: [
                                this.props.leukogram_change.leukogram_change_1,
                                this.props.leukogram_change.leukogram_change_2,
                                this.props.leukogram_change.leukogram_change_3,
                                this.props.leukogram_change.leukogram_change_4,
                                this.props.leukogram_change.leukogram_change_5,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                spirometryChart = (<Bar data={spirometryData} width={350} height={350} options={barOptions} />);
                spirometryChangeChart = (<Bar data={spirometryChangeData} width={350} height={350} options={barOptions} />);
                visualScreeningChart = (<Bar data={visualScreeningData} width={350} height={350} options={barOptions} />);
                visualScreeningChangeChart = (<Bar data={visualScreeningChangeData} width={350} height={350} options={barOptions} />);
                auditoryScreeningChart = (<Bar data={auditoryScreeningData} width={350} height={350} options={barOptions} />);
                auditoryScreeningChangeChart = (<Bar data={auditoryScreeningChangeData} width={350} height={350} options={barOptions} />);
                ecgChart = (<Bar data={ecgData} width={350} height={350} options={barOptions} />);
                ecgChangeChart = (<Bar data={ecgChangeData} width={350} height={350} options={barOptions} />);
                eritrogramChart = (<Bar data={eritrogramData} width={350} height={350} options={barOptions} />);
                eritrogramChangeChart = (<Bar data={eritrogramChangeData} width={350} height={350} options={barOptions} />);
                leukogramChart = (<Bar data={leukogramData} width={350} height={350} options={barOptions} />);
                leukogramChangeChart = (<Bar data={leukogramChangeData} width={350} height={350} options={barOptions} />);
                break;

            case ('option3'):
                spirometryTotal = spirometryGenderTotal;
                spirometryChangeTotal = spirometryChangeGenderTotal;
                visualScreeningTotal = visualScreeningGenderTotal;
                visualScreeningChangeTotal = visualScreeningChangeGenderTotal;
                auditoryScreeningTotal = auditoryScreeningGenderTotal;
                auditoryScreeningChangeTotal = auditoryScreeningChangeGenderTotal;
                ecgTotal = ecgGenderTotal;
                ecgChangeTotal = ecgChangeGenderTotal;
                eritrogramTotal = eritrogramGenderTotal;
                eritrogramChangeTotal = eritrogramChangeGenderTotal;
                leukogramTotal = leukogramGenderTotal
                leukogramChangeTotal = leukogramChangeGenderTotal;

                spirometryData = {
                    labels: genderLabels,
                    datasets: spirometryGenderData
                };

                spirometryChangeData = {
                    labels: genderLabels,
                    datasets: spirometryChangeGenderData
                };

                visualScreeningData = {
                    labels: genderLabels,
                    datasets: visualScreeningGenderData
                };

                visualScreeningChangeData = {
                    labels: genderLabels,
                    datasets: visualScreeningChangeGenderData
                };

                auditoryScreeningData = {
                    labels: genderLabels,
                    datasets: auditoryScreeningGenderData
                };

                auditoryScreeningChangeData = {
                    labels: genderLabels,
                    datasets: auditoryScreeningChangeGenderData
                };

                ecgData = {
                    labels: genderLabels,
                    datasets: ecgGenderData
                };

                ecgChangeData = {
                    labels: genderLabels,
                    datasets: ecgChangeGenderData
                };

                eritrogramData = {
                    labels: genderLabels,
                    datasets: eritrogramGenderData
                };

                eritrogramChangeData = {
                    labels: genderLabels,
                    datasets: eritrogramChangeGenderData
                };

                leukogramData = {
                    labels: genderLabels,
                    datasets: leukogramGenderData
                };

                leukogramChangeData = {
                    labels: genderLabels,
                    datasets: leukogramChangeGenderData
                };

                spirometryChart = (<Bar data={spirometryData} width={350} height={350} options={barOptionsLegend} />);
                spirometryChangeChart = (<Bar data={spirometryChangeData} width={350} height={350} options={barOptionsLegend} />);
                visualScreeningChart = (<Bar data={visualScreeningData} width={350} height={350} options={barOptionsLegend} />);
                visualScreeningChangeChart = (<Bar data={visualScreeningChangeData} width={350} height={350} options={barOptionsLegend} />);
                auditoryScreeningChart = (<Bar data={auditoryScreeningData} width={350} height={350} options={barOptionsLegend} />);
                auditoryScreeningChangeChart = (<Bar data={auditoryScreeningChangeData} width={350} height={350} options={barOptionsLegend} />);
                ecgChart = (<Bar data={ecgData} width={350} height={350} options={barOptionsLegend} />);
                ecgChangeChart = (<Bar data={ecgChangeData} width={350} height={350} options={barOptionsLegend} />);
                eritrogramChart = (<Bar data={eritrogramData} width={350} height={350} options={barOptionsLegend} />);
                eritrogramChangeChart = (<Bar data={eritrogramChangeData} width={350} height={350} options={barOptionsLegend} />);
                leukogramChart = (<Bar data={leukogramData} width={350} height={350} options={barOptionsLegend} />);
                leukogramChangeChart = (<Bar data={leukogramChangeData} width={350} height={350} options={barOptionsLegend} />);
                break;

            case ('option4'):
                spirometryTotal = spirometryAgeTotal;
                spirometryChangeTotal = spirometryChangeAgeTotal;
                visualScreeningTotal = visualScreeningAgeTotal;
                visualScreeningChangeTotal = visualScreeningChangeAgeTotal;
                auditoryScreeningTotal = auditoryScreeningAgeTotal;
                auditoryScreeningChangeTotal = auditoryScreeningChangeAgeTotal;
                ecgTotal = ecgAgeTotal;
                ecgChangeTotal = ecgChangeAgeTotal;
                eritrogramTotal = eritrogramAgeTotal;
                eritrogramChangeTotal = eritrogramChangeAgeTotal;
                leukogramTotal = leukogramAgeTotal
                leukogramChangeTotal = leukogramChangeAgeTotal;

                spirometryData = {
                    labels: chartAgesLabels,
                    datasets: spirometryAgeData
                };

                spirometryChangeData = {
                    labels: chartAgesLabels,
                    datasets: spirometryChangeAgeData
                };

                visualScreeningData = {
                    labels: chartAgesLabels,
                    datasets: visualScreeningAgeData
                };

                visualScreeningChangeData = {
                    labels: chartAgesLabels,
                    datasets: visualScreeningChangeAgeData
                };

                auditoryScreeningData = {
                    labels: chartAgesLabels,
                    datasets: auditoryScreeningAgeData
                };

                auditoryScreeningChangeData = {
                    labels: chartAgesLabels,
                    datasets: auditoryScreeningChangeAgeData
                };

                ecgData = {
                    labels: chartAgesLabels,
                    datasets: ecgAgeData
                };

                ecgChangeData = {
                    labels: chartAgesLabels,
                    datasets: ecgChangeAgeData
                };

                eritrogramData = {
                    labels: chartAgesLabels,
                    datasets: eritrogramAgeData
                };

                eritrogramChangeData = {
                    labels: chartAgesLabels,
                    datasets: eritrogramChangeAgeData
                };

                leukogramData = {
                    labels: chartAgesLabels,
                    datasets: leukogramAgeData
                };

                leukogramChangeData = {
                    labels: chartAgesLabels,
                    datasets: leukogramChangeAgeData
                };

                spirometryChart = (<Bar data={spirometryData} width={350} height={350} options={barOptionsLegend} />);
                spirometryChangeChart = (<Bar data={spirometryChangeData} width={350} height={350} options={barOptionsLegend} />);
                visualScreeningChart = (<Bar data={visualScreeningData} width={350} height={350} options={barOptionsLegend} />);
                visualScreeningChangeChart = (<Bar data={visualScreeningChangeData} width={350} height={350} options={barOptionsLegend} />);
                auditoryScreeningChart = (<Bar data={auditoryScreeningData} width={350} height={350} options={barOptionsLegend} />);
                auditoryScreeningChangeChart = (<Bar data={auditoryScreeningChangeData} width={350} height={350} options={barOptionsLegend} />);
                ecgChart = (<Bar data={ecgData} width={350} height={350} options={barOptionsLegend} />);
                ecgChangeChart = (<Bar data={ecgChangeData} width={350} height={350} options={barOptionsLegend} />);
                eritrogramChart = (<Bar data={eritrogramData} width={350} height={350} options={barOptionsLegend} />);
                eritrogramChangeChart = (<Bar data={eritrogramChangeData} width={350} height={350} options={barOptionsLegend} />);
                leukogramChart = (<Bar data={leukogramData} width={350} height={350} options={barOptionsLegend} />);
                leukogramChangeChart = (<Bar data={leukogramChangeData} width={350} height={350} options={barOptionsLegend} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="spirometry2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {spirometryTotal}</small></div>
                        {spirometryChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="spirometry-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {spirometryChangeTotal}</small></div>
                        {spirometryChangeChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="visual_screening2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {visualScreeningTotal}</small></div>
                        {visualScreeningChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="visual_screening-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {visualScreeningChangeTotal}</small></div>
                        {visualScreeningChangeChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="auditory_screening2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {auditoryScreeningTotal}</small></div>
                        {auditoryScreeningChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="auditory_screening-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {auditoryScreeningChangeTotal}</small></div>
                        {auditoryScreeningChangeChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="ecg2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {ecgTotal}</small></div>
                        {ecgChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="ecg-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {ecgChangeTotal}</small></div>
                        {ecgChangeChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="erythrogram2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {eritrogramTotal}</small></div>
                        {eritrogramChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="erythrogram-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {eritrogramChangeTotal}</small></div>
                        {eritrogramChangeChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="leukogram2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {leukogramTotal}</small></div>
                        {leukogramChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="leukogram-change" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {leukogramChangeTotal}</small></div>
                        {leukogramChangeChart}
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

        spirometry: state.general_indicators.spirometry,
        spirometry_change: state.general_indicators.spirometry_change,
        spirometry_gender: state.by_gender.spirometry_gender,
        spirometry_age: state.by_age.spirometry_age,
        spirometryChange_gender: state.by_gender.spirometryChange_gender,
        spirometryChange_age: state.by_age.spirometryChange_age,

        visual_screening: state.general_indicators.visual_screening,
        visual_change: state.general_indicators.visual_change,
        visualScreening_gender: state.by_gender.visualScreening_gender,
        visualScreening_age: state.by_age.visualScreening_age,
        visualScreeningChange_gender: state.by_gender.visualScreeningChange_gender,
        visualScreeningChange_age: state.by_age.visualScreeningChange_age,

        auditory_screening: state.general_indicators.auditory_screening,
        auditory_change: state.general_indicators.auditory_change,
        auditoryScreening_gender: state.by_gender.auditoryScreening_gender,
        auditoryScreening_age: state.by_age.auditoryScreening_age,
        auditoryScreeningChange_gender: state.by_gender.auditoryScreeningChange_gender,
        auditoryScreeningChange_age: state.by_age.auditoryScreeningChange_age,

        ecg: state.general_indicators.ecg,
        ecg_change: state.general_indicators.ecg_change,
        ecg_gender: state.by_gender.ecg_gender,
        ecg_age: state.by_age.ecg_age,
        ecgChange_gender: state.by_gender.ecgChange_gender,
        ecgChange_age: state.by_age.ecgChange_age,

        eritrogram: state.general_indicators.eritrogram,
        eritrogram_change: state.general_indicators.eritrogram_change,
        eritrogram_gender: state.by_gender.eritrogram_gender,
        eritrogram_age: state.by_age.eritrogram_age,
        eritrogramChange_gender: state.by_gender.eritrogramChange_gender,
        eritrogramChange_age: state.by_age.eritrogramChange_age,

        leukogram: state.general_indicators.leukogram,
        leukogram_change: state.general_indicators.leukogram_change,
        leukogram_gender: state.by_gender.leukogram_gender,
        leukogram_age: state.by_age.leukogram_age,
        leukogramChange_gender: state.by_gender.leukogramChange_gender,
        leukogramChange_age: state.by_age.leukogramChange_age,

        spirometryChangeValues: state.fetchRefValues.spirometryChangeValues,
        visualChangeValues: state.fetchRefValues.visualChangeValues,
        auditoryChangeValues: state.fetchRefValues.auditoryChangeValues,
        ecgChangeValues: state.fetchRefValues.ecgChangeValues,
        eritrogramChangeValues: state.fetchRefValues.eritrogramChangeValues,
        leukogramChangeValues: state.fetchRefValues.leukogramChangeValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSpirometry: (department, year) => dispatch(actions.fetchSpirometry(department, year)),
        fetchSpirometryChange: (department, year) => dispatch(actions.fetchSpirometryChange(department, year)),
        fetchSpirometryByGender: (department, year) => dispatch(actions.fetchSpirometryByGender(department, year)),
        fetchSpirometryByAge: (department, year) => dispatch(actions.fetchSpirometryByAge(department, year)),
        fetchSpirometryChangeByGender: (department, year) => dispatch(actions.fetchSpirometryChangeByGender(department, year)),
        fetchSpirometryChangeByAge: (department, year) => dispatch(actions.fetchSpirometryChangeByAge(department, year)),

        fetchVisualScreening: (department, year) => dispatch(actions.fetchVisualScreening(department, year)),
        fetchVisualScreeningChange: (department, year) => dispatch(actions.fetchVisualChange(department, year)),
        fetchVisualScreeningByGender: (department, year) => dispatch(actions.fetchVisualScreeningByGender(department, year)),
        fetchVisualScreeningByAge: (department, year) => dispatch(actions.fetchVisualScreeningByAge(department, year)),
        fetchVisualScreeningChangeByGender: (department, year) => dispatch(actions.fetchVisualScreeningChangeByGender(department, year)),
        fetchVisualScreeningChangeByAge: (department, year) => dispatch(actions.fetchVisualScreeningChangeByAge(department, year)),

        fetchAuditoryScreening: (department, year) => dispatch(actions.fetchAuditoryScreening(department, year)),
        fetchAuditoryScreeningChange: (department, year) => dispatch(actions.fetchAuditoryChange(department, year)),
        fetchAuditoryScreeningByGender: (department, year) => dispatch(actions.fetchAuditoryScreeningByGender(department, year)),
        fetchAuditoryScreeningByAge: (department, year) => dispatch(actions.fetchAuditoryScreeningByAge(department, year)),
        fetchAuditoryScreeningChangeByGender: (department, year) => dispatch(actions.fetchAuditoryScreeningChangeByGender(department, year)),
        fetchAuditoryScreeningChangeByAge: (department, year) => dispatch(actions.fetchAuditoryScreeningChangeByAge(department, year)),

        fetchEcg: (department, year) => dispatch(actions.fetchEcg(department, year)),
        fetchEcgChange: (department, year) => dispatch(actions.fetchEcgChange(department, year)),
        fetchEcgByGender: (department, year) => dispatch(actions.fetchEcgByGender(department, year)),
        fetchEcgByAge: (department, year) => dispatch(actions.fetchEcgByAge(department, year)),
        fetchEcgChangeByGender: (department, year) => dispatch(actions.fetchEcgChangeByGender(department, year)),
        fetchEcgChangeByAge: (department, year) => dispatch(actions.fetchEcgChangeByAge(department, year)),

        fetchEritrogram: (department, year) => dispatch(actions.fetchEritrogram(department, year)),
        fetchEritrogramChange: (department, year) => dispatch(actions.fetchEritrogramChange(department, year)),
        fetchEritrogramByGender: (department, year) => dispatch(actions.fetchEritrogramByGender(department, year)),
        fetchEritrogramByAge: (department, year) => dispatch(actions.fetchEritrogramByAge(department, year)),
        fetchEritrogramChangeByGender: (department, year) => dispatch(actions.fetchEritrogramChangeByGender(department, year)),
        fetchEritrogramChangeByAge: (department, year) => dispatch(actions.fetchEritrogramChangeByAge(department, year)),

        fetchLeukogram: (department, year) => dispatch(actions.fetchLeukogram(department, year)),
        fetchLeukogramChange: (department, year) => dispatch(actions.fetchLeukogramChange(department, year)),
        fetchLeukogramByGender: (department, year) => dispatch(actions.fetchLeukogramByGender(department, year)),
        fetchLeukogramByAge: (department, year) => dispatch(actions.fetchLeukogramByAge(department, year)),
        fetchLeukogramChangeByGender: (department, year) => dispatch(actions.fetchLeukogramChangeByGender(department, year)),
        fetchLeukogramChangeByAge: (department, year) => dispatch(actions.fetchLeukogramChangeByAge(department, year)),

        fetchSpirometryChangeValues: () => dispatch(actions.fetchSpirometryChangeValues()),
        fetchVisualChangeValues: () => dispatch(actions.fetchVisualChangeValues()),
        fetchAuditoryChangeValues: () => dispatch(actions.fetchAuditoryChangeValues()),
        fetchEcgChangeValues: () => dispatch(actions.fetchEcgChangeValues()),
        fetchEritrogramChangeValues: () => dispatch(actions.fetchEritrogramChangeValues()),
        fetchLeukogramChangeValues: () => dispatch(actions.fetchLeukogramChangeValues())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator1);