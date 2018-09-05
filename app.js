const fs=require('fs');
var matches = require('/home/dev/sameer/ipl-sameer/json/matches.json');
var noOfMatchesPerYear={};
matches.forEach(n => {
    if(noOfMatchesPerYear.hasOwnProperty(n.season)){
    noOfMatchesPerYear[n.season]++;}
    else{
        noOfMatchesPerYear[n.season]=1;
    }
});
// console.log(noOfMatchesPerYear);

var resultJson=JSON.stringify(noOfMatchesPerYear);
//var fs = require('fs');
fs.writeFileSync('public/result.json',resultJson);

// second problem


var result=[{"season":"2008"},{"season":"2009"},{"season":"2010"},{"season":"2011"},{"season":"2012"},{"season":"2013"},{"season":"2014"},{"season":"2015"},{"season":"2016"},{"season":"2017"}];
matches.forEach(n=>{
    var winr=n.winner;
    for(var i=0;i<result.length;i++){
        var yearNotavailable=true;
        if(result[i].season==n.season){
        if(result[i].hasOwnProperty(n.winner)){
        result[i][winr]++;
       }
        else{
           result[i][winr]=1; 
           
        }
    }
    
    }
})
// for(var i=0;i<result.length;i++){
//     count=0;
//     for(var key in result[i]){
//         count++;
//     }
//     //console.log(count);
// }

var noOfMatchesWon=JSON.stringify(result);
fs.writeFileSync('public/noOfMatchesWon.json',noOfMatchesWon);

//third problem
var deliveries = require('/home/dev/sameer/ipl-sameer/json/deliveries.json');
var minMatchId=577;
var maxMatchId=676;
/*
for(i=0;i<matches.length;i++){
    if(matches[i].season==2016)
    if(minMatchId==0){
        minMatchId=matches[i].id;
    }
    maxMatchId=matches[i].id;
}*/
var teamsConcededExtraRuns={};
deliveries.forEach(n=>{
    if(parseInt(n.match_id)>=minMatchId&&parseInt(n.match_id)<=maxMatchId){
       if(teamsConcededExtraRuns.hasOwnProperty(n["batting_team"])){
           teamsConcededExtraRuns[n["batting_team"]]+=parseInt(n["extra_runs"]);
       }
       else{
        teamsConcededExtraRuns[n["batting_team"]]=parseInt(n["extra_runs"])
       }
    }
})
console.log(teamsConcededExtraRuns)
