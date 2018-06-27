import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class dbp_indicator extends Component {
    fetchData() {
        this.props.fetchPersonalDbp(this.props.date, this.props.date2);
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

        const pDbpArray = [].concat(...this.props.personal_dbp);
        const personalDbpValues = pDbpArray.map(pw => pw.dbp);
        personalDbpValues.splice(-1,1);

        const aDbpArray = [].concat(...this.props.dbp_sum);
        const averageDbpValues = aDbpArray.map(aw => aw.dbp);
        averageDbpValues.splice(-1,1);

        const daDbpArray = [].concat(...this.props.dep_dbp_sum);
        const depAverageDbpValues = daDbpArray.map(daw => daw.dbp);
        depAverageDbpValues.splice(-1,1);

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

        const dbpChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.myValue,
                    data: personalDbpValues,
                    fill: false,
                    lineTension: 0.3,
                    pointStyle: 'rectRot',
                    pointRadius: 10,
                    borderColor: bgColors[3],
                    backgroundColor: bgColors[3]
                },
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
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        personal_dbp: state.personal_indicators.personal_dbp,
        dbp_sum: state.personal_indicators.dbp_sum,
        dep_dbp_sum: state.personal_indicators.dep_dbp_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPersonalDbp: (year1, year2) => dispatch(actions.fetchPersonalDbp(year1, year2)),
        fetchAverageDbp: (year1, year2) => dispatch(actions.fetchDbpSum(year1, year2)),
        fetchDepAverageDbp: (year1, year2, department) => dispatch(actions.fetchDepDbpSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(dbp_indicator);