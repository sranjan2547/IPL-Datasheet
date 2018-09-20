$(document).ready(() => { // eslint-disable-line no-undef
  $.get('js/iplStats.json', (iplStats) => { // eslint-disable-line no-undef
    processData(iplStats); // eslint-disable-line no-use-before-define
  });
});

function processData(iplStats) {
  const matchesStats = iplStats.matchesPerYear;

  const stats = Object.keys(matchesStats).map(matches => [matches, matchesStats[matches]]);

  const extrarunsData = iplStats.extraRunsConcededPerTeam;
  const extraRuns = Object.keys(extrarunsData).map(year => [year, extrarunsData[year]]);

  const seasonStats = iplStats.matchesPerTeamPerSeason;

  const finalStats = Object.keys(seasonStats).map((team) => {
    const stat = {};
    stat.name = team; // eslint-disable-line prefer-destructuring
    stat.data = Object.values(seasonStats[team]);

    return stat;
  });
  const yearsData = Object.keys(Object.values(seasonStats)[0]);


  const bowlerStats = iplStats.topEconomicalBowlers;
  const bowlersData = Object.keys(bowlerStats).map(year => [year, bowlerStats[year]]);
  const finalData = [stats, extraRuns, yearsData, finalStats, bowlersData];


  noOfMatchesPerYear(finalData[0]);// eslint-disable-line no-use-before-define
  extraRunsConceded(finalData[1]); // eslint-disable-line no-undef
  matchesPerTeamSeason(finalData[2], finalData[3]); // eslint-disable-line no-undef

  topBowlers(finalData[4]);// eslint-disable-line no-undef
}

function noOfMatchesPerYear(stats) {
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
  // });
}
