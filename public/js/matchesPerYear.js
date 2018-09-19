
$(document).ready(() => {
  $.get('js/iplStats.json', (iplStats) => {
    processData(iplStats);
  });
});

function processData(iplStats) {
  promice = new Promise((resolve, reject) => {
    matchesStats = iplStats.matchesPerYear;

    const stats = Object.keys(matchesStats).map(matches => [matches, matchesStats[matches]]);

    const extrarunsData = iplStats.extraRunsConcededPerTeam;
    const extraRuns = Object.keys(extrarunsData).map(year => [year, extrarunsData[year]]);

    const finalStats = Object.values(iplStats.matchesPerTeamPerSeason);
    const yearsData = Object.keys(iplStats.matchesPerYear);

    bowlerStats = iplStats.topEconomicalBowlers;
    const bowlersData = Object.keys(bowlerStats).map(year => [year, bowlerStats[year]]);
    const finalData = [stats, extraRuns, yearsData, finalStats, bowlersData];


    resolve(finalData);
   
  }).then((finalData) => {
    noOfMatchesPerYear(finalData[0]);
    extraRunsConceded(finalData[1]);
    matchesPerTeamSeason(finalData[2], finalData[3]);
    topBowlers(finalData[4]);
    console.log('resolved');
  });
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
