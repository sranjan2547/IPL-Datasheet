module.exports={
    noOfMatchesPerYear: function(matches){
        var noOfMatchesPerYear={};
        matches.forEach(n => {
            if(noOfMatchesPerYear.hasOwnProperty(n.season)){
            noOfMatchesPerYear[n.season]++;}
            else{
                noOfMatchesPerYear[n.season]=1;
            }
        });
        return noOfMatchesPerYear;
    }
    
}