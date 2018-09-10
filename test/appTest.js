const assert = require('chai').assert;
const app =require('../appMethods');

// testcases for noOfMatchesPerYear

describe('count no of matches per season',function(){

  
  var input1 = [{ season: 2017 }, { season: 2012 }, { season: 2012 },{ season: 2017 }]
  var op1 = { '2012': 2, '2017': 2 }
    it('it should count matches per season',function(){
        assert.deepEqual(app.noOfMatchesPerYear(input1),op1);
    });

    var input2 = [{ season: 2012 }, { season: 2012 }, { season: 2011 },{ season: 2009 }]
  var op2 = { '2012': 2, '2011': 1, '2009': 1 }
    it('it should count matches per season',function(){
        assert.deepEqual(app.noOfMatchesPerYear(input2),op2);
    });

    var input3 = [{ season: 2012 }, { season: 2012 }, { season: 2011 },{ season: 2009 },{ season: 2012 }, { season: 2012 }, { season: 2011 },{ season: 2009 }]
    var op3 = { '2012':4, '2011': 2, '2009': 2 }
      it('it should count matches per season',function(){
          assert.deepEqual(app.noOfMatchesPerYear(input3),op3);
      });
      
 
});


//testcases for matcheswon of all teams

describe('count matches win per season per team',function(){
  var input1 = [{ season: 2010, winner: 'SRH' }, { season: 2010, winner: 'SRH' }, { season: 2011, winner: 'SRH' }, { season: 2010, winner: 'RR' }, { season: 2010, winner: 'RR' }, { season: 2009, winner: 'RR' }]
  var op1 = [ { season: '2008' },{ season: '2009', RR: 1 },{ season: '2010', SRH: 2, RR: 2 },{ season: '2011', SRH: 1 },{ season: '2012' },{ season: '2013' },{ season: '2014' },{ season: '2015' },{ season: '2016' },{ season: '2017' } ]
  it('it should count matches won by team per year',function(){
    assert.deepEqual(app.matchesWonOfAllTeams(input1),op1);
  })


})