import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class sbp_indicator extends Component {
    fetchData() {
        this.props.fetchAverageSbp(this.props.date, this.props.date2);
        this.props.fetchDepAverageSbp(this.props.date, this.props.date2, this.props.department);
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
                        labelString: "mmHg"
                    }
                }]
            },
            tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ": " + tooltipItems.yLabel + ' mmHg';
                    }
                }
            }
        };

        const aSbpArray = [].concat(...this.props.sbp_sum);
        const averageSbpValues = aSbpArray.map(aw => aw.sbp);
        averageSbpValues.splice(-1, 1);

        const daSbpArray = [].concat(...this.props.dep_sbp_sum);
        const depAverageSbpValues = daSbpArray.map(daw => daw.sbp);
        depAverageSbpValues.splice(-1, 1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        const sbpCsv = [
            labels,
            averageSbpValues,
            depAverageSbpValues
        ];

        const filename = "sbp_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

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

        const sbpChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.global,
                    data: averageSbpValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageSbpValues,
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
                    <h4 className="text-center text-secondary"><FormattedMessage id="systolic2" /></h4>
                    <Line data={sbpChartData} options={options} width={720} height={360} />
                    <div className="mt-3">
                        <span>
                            <CSVLink data={sbpCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        sbp_sum: state.personal_indicators.sbp_sum,
        dep_sbp_sum: state.personal_indicators.dep_sbp_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAverageSbp: (year1, year2) => dispatch(actions.fetchSbpSum(year1, year2)),
        fetchDepAverageSbp: (year1, year2, department) => dispatch(actions.fetchDepSbpSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(sbp_indicator);