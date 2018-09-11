module.exports = {
    noOfMatchesPerYear: function(matches) {
    //     var noOfMatchesPerYear = {};
    //     matches.forEach(n => {
    //         if (noOfMatchesPerYear.hasOwnProperty(n.season)) {
    //             noOfMatchesPerYear[n.season]++;
    //         } else {
    //             noOfMatchesPerYear[n.season] = 1;
    //         }
    //     });
    //   //  console.log(noOfMatchesPerYear);
    //     return noOfMatchesPerYear;
    var arr = matches.reduce(function (output, current) {
        if (output.hasOwnProperty(current.season)) {
            output[current.season]++;
        } else {
            output[current.season] = 1;
        }
     //   console.log(output);
        return output;
    
    }, {})
    return arr;
    },
    matchesWonOfAllTeams: function (matches) {
       
        // var result=[];
        // for(var i=2008;i<=2017;i++){
        //     obj={};
        //     obj["season"]=JSON.stringify(i);
        //     result.push(obj);
        // }
        // matches.forEach(n => {
        //     var winr = n.winner;
        //     for (var i = 0; i < result.length; i++) {
        //         var yearNotavailable = true;
        //         if (result[i].season == n.season) {
        //             if (result[i].hasOwnProperty(n.winner)) {
        //                 result[i][winr]++;
        //             } else {
        //                 result[i][winr] = 1;

        //             }
        //         }

        //     }
        // })
        // console.log(result)
        // return result;


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
     return matchesWonOfAllTeams
    },

    extraRunConcidedPerTeam: function (deliveries,matches) {
        // var minMatchId = 577;
        // var maxMatchId = 636;
        // var teamsConcededExtraRuns = {};
        // deliveries.forEach(n => {
        //     if (parseInt(n.match_id) >= minMatchId && parseInt(n.match_id) <= maxMatchId) {
        //         if (teamsConcededExtraRuns.hasOwnProperty(n["bowling_team"])) {
        //             teamsConcededExtraRuns[n["bowling_team"]] += parseInt(n["extra_runs"]);
        //         } else {
        //             teamsConcededExtraRuns[n["bowling_team"]] = parseInt(n["extra_runs"])
        //         }
        //     }
        // })
        // console.log(teamsConcededExtraRuns);
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
     // console.log(result)
        return result;
    },
    topEconomicalBowlers: function (deliveries,matches) {
        // var bowlers = {};
        // deliveries.forEach(n => {
        //     if (parseInt(n.match_id) >= 518 && parseInt(n.match_id) <= 576) {
        //         if (bowlers.hasOwnProperty(n["bowler"])) {
        //             bowlers[n.bowler].runs += parseInt(n.total_runs)
        //             bowlers[n.bowler].ball++;

        //         } else {
        //             bowlers[n.bowler] = {
        //                 "ball": 1,
        //                 "runs": parseInt(n.total_runs)
        //             }

        //         }
        //     }
        // });


        // for (key in bowlers) {
        //     var economyRate;

        //     over = bowlers[key].ball / 6;
        //     economyRate = bowlers[key].runs / over;
        //     bowlers[key] = parseInt((economyRate).toFixed(2));


        // }


        // var sortedEconomyList = [];
        // for (var element in bowlers) {
        //     sortedEconomyList.push([element, bowlers[element]]);
        // }

        // sortedEconomyList.sort(function (a, b) {
        //     return a[1] - b[1];
        // });
        // sortedEconomyList = sortedEconomyList.slice(1, 10)

        // var obj = {};
        // sortedEconomyList.forEach(n => {
        //     obj[n[0]] = n[1];
        // })
        // console.log(obj)
        //return obj;

        var season2015MatchIds=matches.filter(match => match.season==2015).reduce(function(season2015MatchIds,match){
            season2015MatchIds.push(match.id)
            return season2015MatchIds
            },[] )
           // console.log(season2015MatchIds)
            
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
            
            //console.log(bowlers)
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
          //  console.log(topEconomicalBowlers)
            console.log(topEconomicalBowlers)            
            return topEconomicalBowlers
    }



}