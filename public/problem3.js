var obj=[];
$.get('problem3.json',function(data){
  obj=Object.entries(data);

Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'extra runs conceded per team in the year 2016.'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Extra runs'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Extra runs in 2016: <b>{point.y:.f}</b>'
    },
    series: [{
      name: 'Population',
      data: obj,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });});