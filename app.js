var appMethods=require('/home/dev/sameer/ipl-sameer/appMethods.js');
const fs=require('fs');
var matches = require('/home/dev/sameer/ipl-sameer/json/matches.json');
/*
var noOfMatchesPerYear={};
matches.forEach(n => {
    if(noOfMatchesPerYear.hasOwnProperty(n.season)){
    noOfMatchesPerYear[n.season]++;}
    else{
        noOfMatchesPerYear[n.season]=1;
    }
}); */

 var noOfMatchesPerYear=appMethods.noOfMatchesPerYear(matches);

var resultJson=JSON.stringify(noOfMatchesPerYear);
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
var maxMatchId=636;
var teamsConcededExtraRuns={};
deliveries.forEach(n=>{
    if(parseInt(n.match_id)>=minMatchId&&parseInt(n.match_id)<=maxMatchId){
       if(teamsConcededExtraRuns.hasOwnProperty(n["bowling_team"])){
           teamsConcededExtraRuns[n["bowling_team"]]+=parseInt(n["extra_runs"]);
       }
       else{
        teamsConcededExtraRuns[n["bowling_team"]]=parseInt(n["extra_runs"])
       }
    }
})
//console.log(teamsConcededExtraRuns)
var problem3json=JSON.stringify(teamsConcededExtraRuns);
fs.writeFileSync('public/problem3.json',problem3json);

//forth problem
var bowlers={};
deliveries.forEach(n=>{
    if(parseInt(n.match_id)>=518&&parseInt(n.match_id)<=576){
        if( bowlers.hasOwnProperty(n["bowler"])){
           bowlers[n.bowler].runs+=parseInt(n.total_runs)
           bowlers[n.bowler].ball++;

                  }
        else{
            bowlers[n.bowler]={"ball":1,"runs":parseInt(n.total_runs)}
            
        }
    }
});
//console.log(bowlers);

for(key in bowlers){
var economyRate;

over=bowlers[key].ball/6;
economyRate=bowlers[key].runs/over;
bowlers[key]=parseInt((economyRate).toFixed(2));
//console.log(bowlers[key].runs) 

}
//console.log(bowlers);

var sortedEconomyList = [];
for (var element in bowlers) {
    sortedEconomyList.push([element, bowlers[element]]);
}

sortedEconomyList.sort(function(a, b) {
    return a[1] - b[1];
});

//

sortedEconomyList=sortedEconomyList.slice(1,10)
//console.log(sortedEconomyList)
var obj={};
sortedEconomyList.forEach(n=>{
    obj[n[0]]=n[1];
})
//console.log(obj)

 var problem4=JSON.stringify(obj);
 fs.writeFileSync('public/problem4.json',problem4);

//console.log(sortedEconomyList);
