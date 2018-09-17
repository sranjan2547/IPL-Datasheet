$(() => {
  matchesPerTeamStats = iplStats.matchesPerTeamPerSeason;
  console.log(matchesPerTeamStats)
  years = Object.keys(matchesPerTeamStats);

  teamStats = Object.keys(matchesPerTeamStats).reduce((teamStats, yearStat) => {
    teamsInAllSeasons = Object.keys(matchesPerTeamStats[yearStat])
      .reduce((teamsInAllSeasons, team) => {
        teamStats[team] = [];
        return teamsInAllSeasons;
      }, {});

    return teamStats;
  }, {});

  finalResult = Object.keys(teamStats).reduce((finalResult, team) => {
    Object.keys(matchesPerTeamStats).reduce((noOfmatchesPerYear, year) => {
      let flag = false;
      Object.keys(matchesPerTeamStats[year]).reduce((a, teamInYear) => {
        if (team === teamInYear) {
          teamStats[team].push(matchesPerTeamStats[year][teamInYear]);
          flag = true;
        }
      }, {});
      if (flag === false) {
        teamStats[team].push(0);
      }
    }, {});
    return finalResult;
  }, {});

  finalStats = Object.keys(teamStats).reduce((finalStats, team) => {
    const teamStat = {};
    teamStat.name = team;
    teamStat.data = teamStats[team];
    finalStats.push(teamStat);
    return finalStats;
  }, []);
  console.log(finalStats)
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
      categories: years,
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
