import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class cholesterol_indicator extends Component {
    fetchData() {
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
            }
        };

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

        const cholesterolCsv = [
            labels,
            averageCholesterolValues,
            depAverageCholesterolValues
        ];

        const filename = "cholesterol_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

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

        const cholesterolChartData = {
            labels: labels,
            datasets: [
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
                    <div className="mt-3">
                        <span>
                            <CSVLink data={cholesterolCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        cholesterol_sum: state.personal_indicators.cholesterol_sum,
        dep_cholesterol_sum: state.personal_indicators.dep_cholesterol_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAverageCholesterol: (year1, year2) => dispatch(actions.fetchCholesterolSum(year1, year2)),
        fetchDepAverageCholesterol: (year1, year2, department) => dispatch(actions.fetchDepCholesterolSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(cholesterol_indicator);