import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class pulse_indicator extends Component {
    fetchData() {
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

        const aPulseArray = [].concat(...this.props.pulse_sum);
        const averagePulseValues = aPulseArray.map(aw => aw.pulse);
        averagePulseValues.splice(-1, 1);

        const daPulseArray = [].concat(...this.props.dep_pulse_sum);
        const depAveragePulseValues = daPulseArray.map(daw => daw.pulse);
        depAveragePulseValues.splice(-1, 1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        const pulseCsv = [
            labels,
            averagePulseValues,
            depAveragePulseValues
        ];

        const filename = "pulse_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

        let myLabel = null;
        if (localStorage.getItem('language') === "pt") {
            myLabel = {
                global: "Média global",
                department: "Média departamento"
            }
        } else {
            myLabel = {
                global: "Overall value",
                department: "Department Average"
            }
        };

        const pulseChartData = {
            labels: labels,
            datasets: [
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
                    <div className="mt-3">
                        <span>
                            <CSVLink data={pulseCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        pulse_sum: state.personal_indicators.pulse_sum,
        dep_pulse_sum: state.personal_indicators.dep_pulse_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAveragePulse: (year1, year2) => dispatch(actions.fetchPulseSum(year1, year2)),
        fetchDepAveragePulse: (year1, year2, department) => dispatch(actions.fetchDepPulseSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(pulse_indicator);