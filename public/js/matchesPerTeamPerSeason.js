$.get('js/iplStats.json',function(data){
    obj=Object.entries(data);
   obj=obj[1][1];

   
    years=Object.keys(obj).reduce(function(years,year){
     years.push(year);
      return years;
    },[])
    var teams
    teamStats=Object.keys(obj).reduce(function(teamStats,yearStat){
      var stat={};
    teamsInAllSeasons= Object.keys(obj[yearStat]).reduce(function(teamsInAllSeasons,team){
      teamStats[team]=[];
      return teamsInAllSeasons;
     },{})
    
     return teamStats;
    },{})

   finalResult= Object.keys(teamStats).reduce(function(finalResult,team){
      Object.keys(obj).reduce(function(noOfmatchesPerYear,year){
        var flag=false;
      Object.keys( obj[year]).reduce(function(a,teamInYear){
        if(team==teamInYear){
          teamStats[team].push(obj[year][teamInYear])
          flag=true;

        }
        
      },{})
      if(flag==false){
        teamStats[team].push(0);
      }
       },{})
       return finalResult;
    },{})

finalStats= Object.keys(teamStats).reduce(function(finalStats,team){
var teamStat={};
teamStat.name=team;
teamStat.data=teamStats[team];
finalStats.push(teamStat);
  return finalStats;
},[])
console.log(finalStats)

Highcharts.chart('matches-per-team-per-season', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'matches won of all teams over all the years'
    },
    xAxis: {
      categories:years
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Teams'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: finalStats
  })});