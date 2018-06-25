import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class weight_indicator extends Component {
    fetchData() {
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
            }
        };

        const awArray = [].concat(...this.props.weight_sum);
        const averageWeightValues = awArray.map(aw => aw.weight);
        averageWeightValues.splice(-1, 1);

        const dawArray = [].concat(...this.props.dep_weight_sum);
        const depAverageWeightValues = dawArray.map(daw => daw.weight);
        depAverageWeightValues.splice(-1, 1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        const weightCsv = [
            labels,
            averageWeightValues,
            depAverageWeightValues
        ];

        const filename = "weight_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

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

        const weightChartData = {
            labels: labels,
            datasets: [
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
                    <div className="mt-3">
                        <span>
                            <CSVLink data={weightCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        weight_sum: state.personal_indicators.weight_sum,
        dep_weight_sum: state.personal_indicators.dep_weight_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAverageWeight: (year1, year2) => dispatch(actions.fetchWeightSum(year1, year2)),
        fetchDepAverageWeight: (year1, year2, department) => dispatch(actions.fetchDepWeightSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(weight_indicator);