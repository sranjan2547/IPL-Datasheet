module.exports = {
  noOfMatchesPerYear(matches) {
    const totalMatchesInSeason = matches.reduce((totalMatchesInSeason, match) => {
      if (match.season in totalMatchesInSeason) {
        totalMatchesInSeason[match.season] += 1;
      } else {
        totalMatchesInSeason[match.season] = 1;
      }

      return totalMatchesInSeason;
    }, {});
    return totalMatchesInSeason;
  },

  matchesWonOfAllTeams(matches) {
    const year = [];
    const matchesWonPerYear = {};
    matches.map((match) => {
      if (match.winner !== '') {
        if (match.winner in matchesWonPerYear) {
          if (!year.includes(match.season)) {
            year.push(match.season);
          }
          if (match.season in matchesWonPerYear[match.winner].data) {
            matchesWonPerYear[match.winner].data[match.season] += 1;
          } else {
            matchesWonPerYear[match.winner].data[match.season] = 1;
          }
        } else {
          const yearMatches = {};
          yearMatches[match.season] = 1;
          matchesWonPerYear[match.winner] = { name: match.winner, data: yearMatches };
        }
      }
    });

    Object.values(matchesWonPerYear).map((matchesStats) => {
      year.map((match) => {
        if (!(match in matchesStats.data)) {
          matchesStats.data[match] = 0;
        }
      });
      matchesStats.data = Object.values(matchesStats.data);
    });
    return matchesWonPerYear;
  },

  extraRunConcidedPerTeam(deliveries, matches) {
    const matchIds = matches.filter(match => match.season === '2016').map(match => parseInt(match.id, 10));

    const result = deliveries.reduce((result, delivery) => {
      if (matchIds.includes(parseInt(delivery.match_id, 10))) {
        if (delivery.bowling_team in result) {
          result[delivery.bowling_team] += parseInt(delivery.extra_runs, 10);
        } else {
          result[delivery.bowling_team] = parseInt(delivery.extra_runs, 10);
        }
      }
      return result;
    }, {});

    return result;
  },
  topEconomicalBowlers(deliveries, matches) {
    const season2015MatchIds = matches.filter(match => match.season === '2015').map(match => match.id);


    const bowlers = deliveries.reduce((bowlers, delivery) => {
      if (season2015MatchIds.includes(delivery.match_id)) {
        if (delivery.bowler in bowlers) {
          bowlers[delivery.bowler].runs += parseInt(delivery.total_runs, 10);
          bowlers[delivery.bowler].balls += 1;
        } else {
          const obj = {};
          obj.runs = parseInt(delivery.total_runs, 10);
          obj.balls = 1;
          bowlers[delivery.bowler] = obj;
        }
      }
      return bowlers;
    }, {});
    //   console.log(bowlers)


    topEconomicalBowlers = Object.keys(bowlers).map((bowler) => {
      let economy = bowlers[bowler].runs * 6 / bowlers[bowler].balls;
      economy = Math.round(economy * 100) / 100;
      return [bowler, economy];
    });
    topEconomicalBowlers.sort((a, b) => a[1] - b[1]);
    topEconomicalBowlers = topEconomicalBowlers.filter(bowler => bowler[1] < 7);

    // console.log(topEconomicalBowlers)

    topEconomicalBowlers = topEconomicalBowlers.reduce((topEconomicalBowlers, bowler) => {
      topEconomicalBowlers[bowler[0]] = bowler[1];
      return topEconomicalBowlers;
    }, {});


    return topEconomicalBowlers;
  },


};
