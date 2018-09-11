const appMethods=require('./appMethods');
const fs=require('fs');
var matches = require('./json/matches.json');
var deliveries = require('./json/deliveries.json');

 /*   
    //first problem
 var noOfMatchesPerYear=appMethods.noOfMatchesPerYear(matches);
var resultJson=JSON.stringify(noOfMatchesPerYear);
fs.writeFileSync('public/result.json',resultJson);

// second problem



result=appMethods.matchesWonOfAllTeams(matches);

var noOfMatchesWon=JSON.stringify(result);
fs.writeFileSync('public/noOfMatchesWon.json',noOfMatchesWon);

//third problem




teamsConcededExtraRuns=appMethods.extraRunConcidedPerTeam(deliveries,matches);
var problem3json=JSON.stringify(teamsConcededExtraRuns);
fs.writeFileSync('public/problem3.json',problem3json);

//forth problem

var obj=appMethods.topEconomicalBowlers(deliveries,matches);
 var problem4=JSON.stringify(obj);
 fs.writeFileSync('public/problem4.json',problem4);
*/
var iplStats={};

iplStats['matchesPerYear'] = appMethods.noOfMatchesPerYear(matches);
iplStats['matchesPerTeamPerSeason'] = appMethods.matchesWonOfAllTeams(matches);
iplStats['extraRunsConcededPerTeam'] =appMethods.extraRunConcidedPerTeam(deliveries,matches);
iplStats['topEconomicalBowlers'] = appMethods.topEconomicalBowlers(deliveries,matches);

iplStats=JSON.stringify(iplStats);
fs.writeFileSync('./public/js/iplStats.json',iplStats)
console.log(iplStats)
