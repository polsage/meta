var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 200,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Lvl-1', 'Lvl-2', 'Lvl-3', 'Lvl-4'],
legend: {
  show: true,
  floating: true,
  fontSize: '10px',
  position: 'left',
  
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();