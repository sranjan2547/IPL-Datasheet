module.exports = {
  noOfMatchesPerYear(matches) {
    const totalMatchesInSeason = matches.reduce((totalMatchesInSeason, match) => {
      if (totalMatchesInSeason.hasOwnProperty(match.season)) {
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
    const season2016Match_ids = matches.filter(match => match.season == 2016).reduce((season2016Match_ids, match) => {
      season2016Match_ids.push(parseInt(match.id));
      return season2016Match_ids;
    }, []);

    const result = deliveries.reduce((result, delivery) => {
      if (season2016Match_ids.includes(parseInt(delivery.match_id))) {
        if (result.hasOwnProperty(delivery.bowling_team)) {
          result[delivery.bowling_team] += parseInt(delivery.extra_runs);
        } else {
          result[delivery.bowling_team] = parseInt(delivery.extra_runs);
        }
      }
      return result;
    }, {});

    return result;
  },
  topEconomicalBowlers(deliveries, matches) {
    const season2015MatchIds = matches.filter(match => match.season == 2015).reduce((season2015MatchIds, match) => {
      season2015MatchIds.push(match.id);
      return season2015MatchIds;
    }, []);


    const bowlers = deliveries.reduce((bowlers, delivery) => {
      if (season2015MatchIds.includes(delivery.match_id)) {
        if (delivery.bowler in bowlers) {
          bowlers[delivery.bowler].runs += parseInt(delivery.total_runs);
          bowlers[delivery.bowler].balls++;
        } else {
          const obj = {};
          obj.runs = parseInt(delivery.total_runs);
          obj.balls = 1;
          bowlers[delivery.bowler] = obj;
        }
      }
      return bowlers;
    }, {});


    topEconomicalBowlers = Object.keys(bowlers).reduce((topEconomicalBowlers, bowler) => {
      let economy = bowlers[bowler].runs * 6 / bowlers[bowler].balls;

      economy = Math.round(economy * 100) / 100;

      topEconomicalBowlers.push([bowler, economy]);
      return topEconomicalBowlers;
    }, []);
    topEconomicalBowlers.sort((a, b) => a[1] - b[1]);
    topEconomicalBowlers = topEconomicalBowlers.reduce((topEconomicalBowlers, bowler) => {
      if (bowler[1] < 7) {
        topEconomicalBowlers.push(bowler);
      }
      return topEconomicalBowlers;
    }, []);


    topEconomicalBowlers = topEconomicalBowlers.reduce((topEconomicalBowlers, bowler) => {
      topEconomicalBowlers[bowler[0]] = bowler[1];
      return topEconomicalBowlers;
    }, {});


    return topEconomicalBowlers;
  },


};
