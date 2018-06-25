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
    }
};

export const HeighthistogramOptions = {
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
    }
};

export const mmHgHistogramOptions = {
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
    }
};

export const ppmHistogramOptions = {
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
    }
};

export const mgdlHistogramOptions = {
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
    }
};

//export const bgColors = ["#7394CB", "#E1974D", "#84BB5C", "#D35D60", "#CCC374", "#AD6A58"];
export const bgColors = ["#006EB9","#F26C52","#003046","#007D89","#FFCD34","#3FBFB0","#A22615","#22C0F1","#AB7F19","#ECE924","#73B865","#5F646A","#D5C9C9","#F5F1F1"];
//export const bgColors = ["#66a8d5","#f7a697","#668290","#66b1b8","#ffe185","#8bd8cf","#c77c72","#7ad9f6","#ccb275","#f3f17b","#abd4a2","#9fa2a5","#e5dede","#f9f6f6"];