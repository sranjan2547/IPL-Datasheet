
 var matches=require('./json/matches.json')
 var deliveries=require('./json/deliveries.json')
// problem 1

var arr = matches.reduce(function (output, current) {
    if (output.hasOwnProperty(current.season)) {
        output[current.season]++;
    } else {
        output[current.season] = 1;
    }
 //   console.log(output);
    return output;

}, {})
//console.log(arr)

//problem 2




 var matchesWonOfAllTeams=matches.reduce(function(matchesWonOfAllTeams,match){
if(match.season in matchesWonOfAllTeams ){
    if(match.winner in matchesWonOfAllTeams[match.season]){
        matchesWonOfAllTeams[match.season][match.winner]++;
    }
    else{
        matchesWonOfAllTeams[match.season][match.winner]=1
    }

}
else{
    var winners={};
    winners[match.winner]=1; 
    matchesWonOfAllTeams[match.season]=winners;

}

    return matchesWonOfAllTeams;
 },{})
//console.log(matchesWonOfAllTeams)



//problem 3


var season2016Match_ids = matches.filter(match => match.season == 2016).reduce(function (season2016Match_ids, match) {
    season2016Match_ids.push(parseInt(match.id))
    return season2016Match_ids;
    }, [])

var result= deliveries.reduce(function(result,delivery){
    
    if(season2016Match_ids.includes(parseInt(delivery.match_id))){
        if(result.hasOwnProperty(delivery.bowling_team)){
            result[delivery.bowling_team]+=parseInt(delivery.extra_runs);
        }
        else{
            result[delivery.bowling_team]=parseInt(delivery.extra_runs);
        }
    }
return result;
},{})

//console.log(result)


// problem 4

var season2015MatchIds=matches.filter(match => match.season==2015).reduce(function(season2015MatchIds,match){
season2015MatchIds.push(match.id)
return season2015MatchIds
},[] )

var bowlers=deliveries.reduce(function(bowlers,delivery){
if(season2015MatchIds.includes(delivery.match_id)){
if(delivery.bowler in bowlers){
bowlers[delivery.bowler].runs+= parseInt(delivery.total_runs);
bowlers[delivery.bowler].balls++;
}
else{
    var obj={};
    obj.runs= parseInt(delivery.total_runs);
    obj.balls=1;
bowlers[delivery.bowler]=obj;
}

}
return bowlers;
},{})


topEconomicalBowlers= Object.keys(bowlers).reduce(function(topEconomicalBowlers,bowler){
var economy=bowlers[bowler].runs*6/bowlers[bowler].balls;

economy=Math.round(economy*100)/100;

topEconomicalBowlers.push([bowler,economy])
return topEconomicalBowlers;
},[])
topEconomicalBowlers.sort(function(a,b){
    return a[1]-b[1]
})
topEconomicalBowlers=topEconomicalBowlers.reduce(function(topEconomicalBowlers,bowler){
 if(bowler[1]<7){
topEconomicalBowlers.push(bowler)
 }   
 return topEconomicalBowlers
},[])



topEconomicalBowlers=topEconomicalBowlers.reduce(function(topEconomicalBowlers,bowler){
    
    topEconomicalBowlers[bowler[0]]=bowler[1];
    return topEconomicalBowlers;
},{});
console.log(topEconomicalBowlers)

