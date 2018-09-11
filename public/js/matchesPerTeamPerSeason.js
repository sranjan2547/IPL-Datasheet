$.get('js/iplStats.json',function(data){
    obj=Object.entries(data);
   obj=obj[1][1];
   var years=[];
    for(year in obj){
        years.push(year)
    }
    console.log(obj)
Highcharts.chart('container2', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories:years
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  })});