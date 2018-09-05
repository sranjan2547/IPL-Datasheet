var obj=[];
var year=[];
var teams={};
var dataArray=[];
$.get('noOfMatchesWon.json',function(data){
  obj=Object.entries(data);
  for(var i=0;i<obj.length;i++){
    year[i]=obj[i][1]["season"];
  }
//console.log(year);
for(var i=0;i<obj.length;i++){
 for (index in obj[i][1]){
 if(index!=""&&index!="season")
   teams[index]=0;
 } 
}
console.log(teams);

for(var key in teams){
  var arr=[];
  for(var i=0;i<obj.length;i++){
    if(obj[i][1][key]==undefined)
    arr.push(0);
    else
    arr.push(obj[i][1][key]);
  }
  teams[key]=arr;
}
//
for(var key in teams){
  var tmp={};
  tmp.name=key;
  tmp.data=teams[key];
  dataArray.push(tmp);
}


console.log(dataArray);
//
//console.log(teams);


Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: year
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
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
    series:dataArray
  });});