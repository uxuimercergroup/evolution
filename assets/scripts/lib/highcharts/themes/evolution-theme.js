/**
 * Grid theme for Highcharts JS
 * @author David Santos
 */

Highcharts.theme = {
	colors: ['#00A8C8', '#124F9B', '#8CBD4F', '#70973F', '#B7CAE1', '#810009', '#FF9655', '#FFF263', '#6AF9C4'],
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
			font: 'bold 16px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#666666',
			font: 'bold 12px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'
		}
	},
	xAxis: {
		//gridLineWidth: 1,
		//lineColor: '#000',
		//tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontSize: '12px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'

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
				font: '11px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif',
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt "proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif',
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
			color: '#99b',
			font: '"proxima_nova_ththin", arial, Tahoma, Geneva, sans-serif'
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
