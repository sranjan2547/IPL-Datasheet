var matches = require('/home/dev/sameer/ipl-sameer/json/matches.json');


var noOfMatchesPerYear={};
matches.forEach(n => {
    if(noOfMatchesPerYear.hasOwnProperty(n.season)){
    noOfMatchesPerYear[n.season]++;}
    else{
        noOfMatchesPerYear[n.season]=1;
    }
});
 console.log(noOfMatchesPerYear);

var resultJson=JSON.stringify(noOfMatchesPerYear);
console.log(resultJson);
var fs = require('fs');
fs.writeFileSync('public/result.json',resultJson);
