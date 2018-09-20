const fs = require('fs');
const appMethods = require('./appMethods');
const matches = require('./json/matches.json');
const deliveries = require('./json/deliveries.json');


let iplStats = {};

iplStats.matchesPerYear = appMethods.noOfMatchesPerYear(matches);
iplStats.matchesPerTeamPerSeason = appMethods.matchesWonOfAllTeams(matches);
iplStats.extraRunsConcededPerTeam = appMethods.extraRunConcidedPerTeam(deliveries, matches);
iplStats.topEconomicalBowlers = appMethods.topEconomicalBowlers(deliveries, matches);

iplStats = JSON.stringify(iplStats);

fs.writeFile('./public/js/iplStats.json', iplStats, (err) => {
  if (err) {
    console.log(err);
  }
});
