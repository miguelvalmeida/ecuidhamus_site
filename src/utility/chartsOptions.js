export const pieOptions = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10,
        }
    },
    tooltips: {
        mode: 'label',
        callbacks: {
            label: function (tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']] + '%';
            }
        }
    }
};

export const histogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0
        }],
    }
};

export const histogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0
        }],
    }
};

export const barOptions = {
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
};

export const barOptionsLegend = {
    barValueSpacing: 20,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
            }
        }]
    },
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
};

export const WeightHistogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "kg"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel + ' kg';
            }
        }
    },
};

export const WeightHistogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "kg"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel;
            }
        }
    },
};

export const HeighthistogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "m"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel + ' m';
            }
        }
    },
};

export const HeighthistogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "m"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel;
            }
        }
    },
};

export const mmHgHistogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "mmHg"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel + ' mmHg';
            }
        }
    },
};

export const mmHgHistogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "mmHg"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel;
            }
        }
    },
};

export const ppmHistogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "ppm"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel + ' ppm';
            }
        }
    },
};

export const ppmHistogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "ppm"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel;
            }
        }
    },
};

export const mgdlHistogramOptions = {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 0
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "mg / dl"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel + ' mg / dl';
            }
        }
    },
};

export const mgdlHistogramOptionsLegend = {
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleLabel: {
                display: true,
                labelString: "mg / dl"
            }
        }],
    },
    tooltips: {
        callbacks: {
            title: function () {
                return '';
            },
            beforeLabel: function (tooltipItem, data) {
                //return formatted date
                return tooltipItem.xLabel;
            }
        }
    },
};

//export const bgColors = ["#7394CB", "#E1974D", "#84BB5C", "#D35D60", "#CCC374", "#AD6A58"];
export const bgColors = ["#00a099", "#add036", "#cf3027", "#ffc709", "#00538e", "#622d7b", "#7da277", "#9a873a", "#c1692f", "#f58020", "#8eb0d3", "#9b2378"];
//export const bgColors = ["#66a8d5","#7da277","#add036","#66b1b8","#ffe185","#8bd8cf","#c77c72","#7ad9f6","#ccb275","#f3f17b","#abd4a2","#9fa2a5","#e5dede","#f9f6f6"];