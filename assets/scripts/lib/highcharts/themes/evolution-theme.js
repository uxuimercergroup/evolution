/**
 * Grid theme for Highcharts JS
 * @author David Santos
 */

Highcharts.theme = {
	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#810009', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(255, 255, 255)']
			]
		}
		//plotBackgroundColor: 'rgba(255, 255, 255, .9)'
		//plotShadow: true,
		//plotBorderWidth: 1
	},
	title: {
		style: {
			color: '#000',
			font: 'bold 16px'
		}
	},
	subtitle: {
		style: {
			color: '#666666',
			font: 'bold 12px'
		}
	},
	xAxis: {
		//gridLineWidth: 1,
		//lineColor: '#000',
		//tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',

			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		//lineColor: '#000',
		//lineWidth: 1,
		//tickWidth: 1,
		//tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt',
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#CCCCCC'
			}
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
