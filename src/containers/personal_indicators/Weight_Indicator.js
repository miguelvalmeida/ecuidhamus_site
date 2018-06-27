import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class weight_indicator extends Component {
    fetchData() {
        this.props.fetchPersonalWeight(this.props.date, this.props.date2);
        this.props.fetchAverageWeight(this.props.date, this.props.date2);
        this.props.fetchDepAverageWeight(this.props.date, this.props.date2, this.props.department);
    };

    componentDidUpdate(prevProps) {
        if (((prevProps.department !== this.props.department) || (prevProps.date !== this.props.date) || (prevProps.date2 !== this.props.date2) || (prevProps.isSelected !== this.props.isSelected)) && this.props.isSelected) {
            this.fetchData();
        }
    };

    componentDidMount() {
        this.fetchData();
    };

    render() {
        const options = {
            responsive: true,
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "kg"
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ": " + tooltipItems.yLabel + ' kg';
                    }
                }
            }
        };

        const pwArray = [].concat(...this.props.personal_weight);
        const personalWeightValues = pwArray.map(pw => pw.weight);
        personalWeightValues.splice(-1,1);

        const awArray = [].concat(...this.props.weight_sum);
        const averageWeightValues = awArray.map(aw => aw.weight);
        averageWeightValues.splice(-1,1);

        const dawArray = [].concat(...this.props.dep_weight_sum);
        const depAverageWeightValues = dawArray.map(daw => daw.weight);
        depAverageWeightValues.splice(-1,1);

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

        const weightChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.myValue,
                    data: personalWeightValues,
                    fill: false,
                    pointStyle: 'rectRot',
                    lineTension: 0.3,
                    pointRadius: 10,
                    borderColor: bgColors[3],
                    backgroundColor: bgColors[3]
                },
                {
                    label: myLabel.global,
                    data: averageWeightValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageWeightValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[1],
                    backgroundColor: bgColors[1]
                }
            ]
        };

        return (
            <Aux>
                <div className="mx-auto d-block mt-2" style={{ margin: "auto", display: "block" }}>
                    <h4 className="text-center text-secondary"><FormattedMessage id="weight2" /></h4>
                    <Line data={weightChartData} options={options} width={720} height={360} />
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        personal_weight: state.personal_indicators.personal_weight,
        weight_sum: state.personal_indicators.weight_sum,
        dep_weight_sum: state.personal_indicators.dep_weight_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersonalWeight: (year1, year2) => dispatch(actions.fetchPersonalWeight(year1, year2)),
        fetchAverageWeight: (year1, year2) => dispatch(actions.fetchWeightSum(year1, year2)),
        fetchDepAverageWeight: (year1, year2, department) => dispatch(actions.fetchDepWeightSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(weight_indicator);