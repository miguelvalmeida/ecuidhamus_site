import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class cholesterol_indicator extends Component {
    fetchData() {
        this.props.fetchPersonalCholesterol(this.props.date, this.props.date2);
        this.props.fetchAverageCholesterol(this.props.date, this.props.date2);
        this.props.fetchDepAverageCholesterol(this.props.date, this.props.date2, this.props.department);
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
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ": " + tooltipItems.yLabel + ' mg/dl';
                    }
                }
            }
        };

        const pCholesterolArray = [].concat(...this.props.personal_cholesterol);
        const personalCholesterolValues = pCholesterolArray.map(pw => pw.cholesterol);
        personalCholesterolValues.splice(-1, 1);

        const aCholesterolArray = [].concat(...this.props.cholesterol_sum);
        const averageCholesterolValues = aCholesterolArray.map(aw => aw.cholesterol);
        averageCholesterolValues.splice(-1, 1);

        const daCholesterolArray = [].concat(...this.props.dep_cholesterol_sum);
        const depAverageCholesterolValues = daCholesterolArray.map(daw => daw.cholesterol);
        depAverageCholesterolValues.splice(-1, 1);

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

        const cholesterolChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.myValue,
                    data: personalCholesterolValues,
                    fill: false,
                    pointStyle: 'rectRot',
                    lineTension: 0.3,
                    pointRadius: 10,
                    borderColor: bgColors[3],
                    backgroundColor: bgColors[3]
                },
                {
                    label: myLabel.global,
                    data: averageCholesterolValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageCholesterolValues,
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
                    <h4 className="text-center text-secondary"><FormattedMessage id="cholesterol2" /></h4>
                    <Line data={cholesterolChartData} options={options} width={720} height={360} />
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        personal_cholesterol: state.personal_indicators.personal_cholesterol,
        cholesterol_sum: state.personal_indicators.cholesterol_sum,
        dep_cholesterol_sum: state.personal_indicators.dep_cholesterol_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersonalCholesterol: (year1, year2) => dispatch(actions.fetchPersonalCholesterol(year1, year2)),
        fetchAverageCholesterol: (year1, year2) => dispatch(actions.fetchCholesterolSum(year1, year2)),
        fetchDepAverageCholesterol: (year1, year2, department) => dispatch(actions.fetchDepCholesterolSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cholesterol_indicator);