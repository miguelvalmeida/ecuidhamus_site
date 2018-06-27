import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import { CSVLink } from 'react-csv';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { bgColors } from '../../utility/chartsOptions';

class uricAcid_indicator extends Component {
    fetchData() {
        this.props.fetchAverageUricAcid(this.props.date, this.props.date2);
        this.props.fetchDepAverageUricAcid(this.props.date, this.props.date2, this.props.department);
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

        const aUricAcidArray = [].concat(...this.props.uric_acid_sum);
        const averageUricAcidValues = aUricAcidArray.map(aw => aw.uric_acid);
        averageUricAcidValues.splice(-1, 1);

        const daUricAcidArray = [].concat(...this.props.dep_uricAcid_sum);
        const depAverageUricAcidValues = daUricAcidArray.map(daw => daw.uric_acid);
        depAverageUricAcidValues.splice(-1, 1);

        const labels = []
        for (let i = this.props.date; i <= this.props.date2; i++) {
            labels.push(i)
        };

        const uricAcidCsv = [
            labels,
            averageUricAcidValues,
            depAverageUricAcidValues
        ];

        const filename = "uricAcid_" + this.props.date + "_" + this.props.date2 + "_" + this.props.department + ".csv";

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

        const uricAcidChartData = {
            labels: labels,
            datasets: [
                {
                    label: myLabel.global,
                    data: averageUricAcidValues,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: bgColors[2],
                    backgroundColor: bgColors[2]
                },
                {
                    label: myLabel.department,
                    data: depAverageUricAcidValues,
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
                    <h4 className="text-center text-secondary"><FormattedMessage id="uric-acid2" /></h4>
                    <Line data={uricAcidChartData} options={options} width={720} height={360} />
                    <div className="mt-3">
                        <span>
                            <CSVLink data={uricAcidCsv} className="btn btn-primary text-white" filename={filename} separator={";"}>Download CSV</CSVLink>
                        </span>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        uric_acid_sum: state.personal_indicators.uric_acid_sum,
        dep_uricAcid_sum: state.personal_indicators.dep_uricAcid_sum,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAverageUricAcid: (year1, year2) => dispatch(actions.fetchUricAcidSum(year1, year2)),
        fetchDepAverageUricAcid: (year1, year2, department) => dispatch(actions.fetchDepUricAcidSum(year1, year2, department))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(uricAcid_indicator);