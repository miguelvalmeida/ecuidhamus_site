import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class glucose_indicator extends Component {
    fetchData() {
        this.props.fetchPersonalGlucose(this.props.date, this.props.date2);
        this.props.fetchAverageGlucose(this.props.date, this.props.date2);
        this.props.fetchDepAverageGlucose(this.props.date, this.props.date2, this.props.department);
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
                        labelString: "mg / dl"
                    }
                }]
            }
        };

        const pGlucoseArray = [].concat(...this.props.personal_glucose);
        const personalGlucoseValues = pGlucoseArray.map(pw => pw.glucose);
        personalGlucoseValues.splice(-1,1);

        const aGlucoseArray = [].concat(...this.props.glucose_sum);
        const averageGlucoseValues = aGlucoseArray.map(aw => aw.glucose);
        averageGlucoseValues.splice(-1,1);

        const daGlucoseArray = [].concat(...this.props.dep_glucose_sum);
        const depAverageGlucoseValues = daGlucoseArray.map(daw => daw.glucose);
        depAverageGlucoseValues.splice(-1,1);

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

        const glucoseChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.myValue,
                    data: personalGlucoseValues,
                    fill: false,
                    pointStyle: 'rectRot',
                    lineTension: 0.3,
                    pointRadius: 10,
                    borderColor: bgColors[5],
                    backgroundColor: bgColors[5]
                },
                {
                    label: myLabel.global,
                    data: averageGlucoseValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageGlucoseValues,
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
                    <h4 className="text-center text-secondary"><FormattedMessage id="glucose2" /></h4>
                    <Line data={glucoseChartData} options={options} width={720} height={360} />
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        personal_glucose: state.personal_indicators.personal_glucose,
        glucose_sum: state.personal_indicators.glucose_sum,
        dep_glucose_sum: state.personal_indicators.dep_glucose_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersonalGlucose: (year1, year2) => dispatch(actions.fetchPersonalGlucose(year1, year2)),
        fetchAverageGlucose: (year1, year2) => dispatch(actions.fetchGlucoseSum(year1, year2)),
        fetchDepAverageGlucose: (year1, year2, department) => dispatch(actions.fetchDepGlucoseSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(glucose_indicator);