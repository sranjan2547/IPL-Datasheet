$.get('js/iplStats.json', (iplStats) => {
  matchesStats = iplStats.matchesPerYear;
  stats = Object.keys(matchesStats).reduce((stats, year) => {
    stats.push([year, matchesStats[year]]);
    return stats;
  }, []);


  Highcharts.chart('matches-per-year', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total Matches Per Year',
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number Of Matches',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: 'Matches: <b>{point.y:.0f} </b>',
    },
    series: [{
      name: 'Population',
      data: stats,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.0f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
  });
});
