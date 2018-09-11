var obj=[];
$.get('js/iplStats.json',function(data){
    obj=Object.entries(data);
    obj=obj[3][1];
    
   stats= Object.keys(obj).reduce(function(stats,year){
      stats.push([year,obj[year]])
      return stats;
    },[])
  

Highcharts.chart('top-economical-bowlers', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Top Economical Bowlers Of 2015'
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
        text: 'Economy'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Economy Rate: <b>{point.y:.0f} </b>'
    },
    series: [{
      name: 'Population',
      data: stats,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  })});