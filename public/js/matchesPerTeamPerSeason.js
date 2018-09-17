let yearsData;
$(() => {
  finalStats = Object.values(iplStats.matchesPerTeamPerSeason);
  yearsData = Object.keys(iplStats.matchesPerYear);
});
$(() => {
  Highcharts.chart('matches-per-team-per-season', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'matches won of all teams over all the years',
    },
    xAxis: {
      categories: yearsData,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Teams',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: finalStats,
  });
});
