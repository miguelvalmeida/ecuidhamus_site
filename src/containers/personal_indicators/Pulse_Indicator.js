import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class pulse_indicator extends Component {
    fetchData() {
        this.props.fetchPersonalPulse(this.props.date, this.props.date2);
        this.props.fetchAveragePulse(this.props.date, this.props.date2);
        this.props.fetchDepAveragePulse(this.props.date, this.props.date2, this.props.department);
    };

    componentDidUpdate(prevProps) {
        if (((prevProps.department !== this.props.department) || (prevProps.date !== this.props.date) || (prevProps.date2 !== this.props.date2) || (prevProps.isSelected !== this.props.isSelected)) && this.props.isSelected) {
            this.fetchData();
        }
    };

    render() {
        const options = {
            responsive: true,
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "ppm"
                    }
                }]
            }
        };

        const pPulseArray = [].concat(...this.props.personal_pulse);
        const personalPulseValues = pPulseArray.map(pw => pw.pulse);
        personalPulseValues.splice(-1,1);

        const aPulseArray = [].concat(...this.props.pulse_sum);
        const averagePulseValues = aPulseArray.map(aw => aw.pulse);
        averagePulseValues.splice(-1,1);

        const daPulseArray = [].concat(...this.props.dep_pulse_sum);
        const depAveragePulseValues = daPulseArray.map(daw => daw.pulse);
        depAveragePulseValues.splice(-1,1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        let myLabel = null;
        if (localStorage.getItem('language') === "pt") {
            myLabel = {
                myValue: "Meu valor",
                global: "Média global",
                department: "Média departamento"
            }
        } else {
            myLabel = {
                myValue: "My value",
                global: "Overall value",
                department: "Department Average"
            }
        };

        const pulseChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.myValue,
                    data: personalPulseValues,
                    fill: false,
                    pointStyle: 'rectRot',
                    lineTension: 0.3,
                    pointRadius: 10,
                    borderColor: bgColors[5],
                    backgroundColor: bgColors[5]
                },
                {
                    label: myLabel.global,
                    data: averagePulseValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAveragePulseValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[1],
                    backgroundColor: bgColors[1]
                }
            ]
        };

        return (
            <Aux>
                <div className="mx-auto d-block" style={{ margin: "auto", display: "block" }}>
                    <h4 className="text-center text-secondary"><FormattedMessage id="pulse2" /></h4>
                    <Line data={pulseChartData} options={options} width={720} height={360} />
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        personal_pulse: state.personal_indicators.personal_pulse,
        pulse_sum: state.personal_indicators.pulse_sum,
        dep_pulse_sum: state.personal_indicators.dep_pulse_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersonalPulse: (year1, year2) => dispatch(actions.fetchPersonalPulse(year1, year2)),
        fetchAveragePulse: (year1, year2) => dispatch(actions.fetchPulseSum(year1, year2)),
        fetchDepAveragePulse: (year1, year2, department) => dispatch(actions.fetchDepPulseSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(pulse_indicator);