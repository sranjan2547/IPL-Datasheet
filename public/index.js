var obj=[];
$.get('result.json',function(data){
  obj=Object.entries(data);

//console.log(obj);


 Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Total matches per year'
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
          text: 'Number of matches'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
    //  pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Matches',
      data:obj,
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
         // format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
});});