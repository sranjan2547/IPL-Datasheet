let extraRuns;
$(() => {
  const extraruns = iplStats.extraRunsConcededPerTeam;
  const stats = Object.keys(extraruns).reduce((stats, year) => {
    stats.push([year, extraruns[year]]);
    return stats;
  }, []);
  extraRuns = stats;
});
$(() => {
  Highcharts.chart('extra-runs-consided-per-team', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra runs consided in year 2016',
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
        text: 'Extra runs',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: 'Extra runs: <b>{point.y:.0f} </b>',
    },
    series: [{
      name: 'Population',
      data: extraRuns,
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
