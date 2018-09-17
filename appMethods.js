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
    const matchesWonOfAllTeams = matches.reduce((matchesWonOfAllTeams, match) => {
      if (match.season in matchesWonOfAllTeams) {
        if (match.winner in matchesWonOfAllTeams[match.season]) {
          matchesWonOfAllTeams[match.season][match.winner] += 1;
        } else {
          matchesWonOfAllTeams[match.season][match.winner] = 1;
        }
      } else {
        const winners = {};
        winners[match.winner] = 1;
        matchesWonOfAllTeams[match.season] = winners;
      }

      return matchesWonOfAllTeams;
    }, {});

    return matchesWonOfAllTeams;
  },

  extraRunConcidedPerTeam(deliveries, matches) {
    const matchIds = matches.filter(match => match.season === '2016')
      // .reduce((matchIds, match) => {
      //   matchIds.push(parseInt(match.id, 10));
      //   return matchIds;
      // }, []);
      .map(match => parseInt(match.id, 10));

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
    const season2015MatchIds = matches.filter(match => match.season === '2015')
      // .reduce((season2015MatchIds, match) => {
      //   season2015MatchIds.push(match.id);
      //   return season2015MatchIds;
      // }, []);
      .map(match => match.id);


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


    topEconomicalBowlers = Object.keys(bowlers)

      .map((bowler) => {
        let economy = bowlers[bowler].runs * 6 / bowlers[bowler].balls;
        economy = Math.round(economy * 100) / 100;
        return [bowler, economy];
      });
    topEconomicalBowlers.sort((a, b) => a[1] - b[1]);
    topEconomicalBowlers = topEconomicalBowlers.map((bowler) => {
      if (bowler[1] < 7) {
        return bowler;
      }
    });


    topEconomicalBowlers = topEconomicalBowlers.reduce((topEconomicalBowlers, bowler) => {
      topEconomicalBowlers[bowler[0]] = bowler[1];
      return topEconomicalBowlers;
    }, {});


    return topEconomicalBowlers;
  },


};
