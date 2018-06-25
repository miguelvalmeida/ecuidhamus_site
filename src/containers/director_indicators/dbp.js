import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class dbp_indicator extends Component {
    fetchData() {
        this.props.fetchAverageDbp(this.props.date, this.props.date2);
        this.props.fetchDepAverageDbp(this.props.date, this.props.date2, this.props.department);
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
            }
        };

        const aDbpArray = [].concat(...this.props.dbp_sum);
        const averageDbpValues = aDbpArray.map(aw => aw.dbp);
        averageDbpValues.splice(-1, 1);

        const daDbpArray = [].concat(...this.props.dep_dbp_sum);
        const depAverageDbpValues = daDbpArray.map(daw => daw.dbp);
        depAverageDbpValues.splice(-1, 1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        const dbpCsv = [
            labels,
            averageDbpValues,
            depAverageDbpValues
        ];

        const filename = "dbp_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

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

        const dbpChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.global,
                    data: averageDbpValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageDbpValues,
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
                    <h4 className="text-center text-secondary"><FormattedMessage id="diastolic2" /></h4>
                    <Line data={dbpChartData} options={options} width={720} height={360} />
                    <div className="mt-3">
                        <span>
                            <CSVLink data={dbpCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        dbp_sum: state.personal_indicators.dbp_sum,
        dep_dbp_sum: state.personal_indicators.dep_dbp_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAverageDbp: (year1, year2) => dispatch(actions.fetchDbpSum(year1, year2)),
        fetchDepAverageDbp: (year1, year2, department) => dispatch(actions.fetchDepDbpSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(dbp_indicator);