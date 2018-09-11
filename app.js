const appMethods=require('./appMethods');
const fs=require('fs');
var matches = require('./json/matches.json');
var deliveries = require('./json/deliveries.json');


var iplStats={};

iplStats['matchesPerYear'] = appMethods.noOfMatchesPerYear(matches);
iplStats['matchesPerTeamPerSeason'] = appMethods.matchesWonOfAllTeams(matches);
iplStats['extraRunsConcededPerTeam'] =appMethods.extraRunConcidedPerTeam(deliveries,matches);
iplStats['topEconomicalBowlers'] = appMethods.topEconomicalBowlers(deliveries,matches);

iplStats=JSON.stringify(iplStats);
fs.writeFileSync('./public/js/iplStats.json',iplStats)

