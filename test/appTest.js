const assert = require('chai').assert;
const app = require('../appMethods');

// testcases for noOfMatchesPerYear

describe('count number of matches per season', function () {


  var input1 = [{
    season: 2017
  }, {
    season: 2012
  }, {
    season: 2012
  }, {
    season: 2017
  }]
  var op1 = {
    '2012': 2,
    '2017': 2
  }
  it('it should count matches per season', function () {
    assert.deepEqual(app.noOfMatchesPerYear(input1), op1);
  });

  var input2 = [{
    season: 2012
  }, {
    season: 2012
  }, {
    season: 2011
  }, {
    season: 2009
  }]
  var op2 = {
    '2012': 2,
    '2011': 1,
    '2009': 1
  }
  it('it should count matches per season', function () {
    assert.deepEqual(app.noOfMatchesPerYear(input2), op2);
  });

  var input3 = [{
    season: 2012
  }, {
    season: 2012
  }, {
    season: 2011
  }, {
    season: 2009
  }, {
    season: 2012
  }, {
    season: 2012
  }, {
    season: 2011
  }, {
    season: 2009
  }]
  var op3 = {
    '2012': 4,
    '2011': 2,
    '2009': 2
  }
  it('it should count matches per season', function () {
    assert.deepEqual(app.noOfMatchesPerYear(input3), op3);
  });


});


//testcases for matcheswon of all teams

describe('count matches win per season per team', function () {
  var input1 = [{
    season: 2010,
    winner: 'SRH'
  }, {
    season: 2010,
    winner: 'SRH'
  }, {
    season: 2011,
    winner: 'SRH'
  }, {
    season: 2010,
    winner: 'RR'
  }, {
    season: 2010,
    winner: 'RR'
  }, {
    season: 2009,
    winner: 'RR'
  }]
  var op1 = {
    '2009': {
      RR: 1
    },
    '2010': {
      SRH: 2,
      RR: 2
    },
    '2011': {
      SRH: 1
    }
  }
  it('it should count matches won by team per year', function () {
    assert.deepEqual(app.matchesWonOfAllTeams(input1), op1);
  });

  var input2 = [{
    season: 2009,
    winner: 'SRH'
  }, {
    season: 2010,
    winner: 'SRH'
  }, {
    season: 2011,
    winner: 'SRH'
  }, {
    season: 2010,
    winner: 'RR'
  }, {
    season: 2010,
    winner: 'RR'
  }, {
    season: 2009,
    winner: 'RR'
  }]
  var op2 = {
    '2009': {
      RR: 1,
      SRH: 1
    },
    '2010': {
      SRH: 1,
      RR: 2
    },
    '2011': {
      SRH: 1
    }
  }
  it('it should count matches won by team per year', function () {
    assert.deepEqual(app.matchesWonOfAllTeams(input1), op1);
  })



})


describe('Extra runs consided per team', function () {
  var input1 = [{
    'match_id': 577,
    'bowling_team': 'team1',
    'extra_runs': 5
  }, {
    'match_id': 597,
    'bowling_team': 'team2',
    'extra_runs': 4
  }, {
    'match_id': 577,
    'bowling_team': 'team1',
    'extra_runs': 3
  }]
  var input2 = [{
    "id": "577",
    "season": "2016"
  }, {
    "id": "597",
    "season": "2016"
  }];

  var op1 = {
    team1: 8,
    team2: 4
  };

  it('It should return extra runs consided per team', function () {
    assert.deepEqual(app.extraRunConcidedPerTeam(input1, input2), op1);
  });

  var input3 = [{
    'match_id': 579,
    'bowling_team': 'team1',
    'extra_runs': 5
  }, {
    'match_id': 597,
    'bowling_team': 'team2',
    'extra_runs': 4
  }, {
    'match_id': 577,
    'bowling_team': 'team1',
    'extra_runs': 3
  }, , {
    'match_id': 588,
    'bowling_team': 'team3',
    'extra_runs': 3
  }]
  var input4 = [{
    "id": "577",
    "season": "2016"
  }, {
    "id": "597",
    "season": "2016"
  }, {
    "id": "579",
    "season": "2015"
  }, {
    "id": "588",
    "season": "2016"
  }];

  var op2 = {
    team1: 3,
    team2: 4,
    team3: 3
  };


  it('It should return extra runs consided per team', function () {
    assert.deepEqual(app.extraRunConcidedPerTeam(input3, input4), op2);
  });

})

describe('Top Economical Bowlers of 2015', function () {
  var input1 = [{
    "match_id": "534",
    "bowler": "player1",
    "total_runs": "0"
  }, {
    "match_id": "534",
    "bowler": "player2",
    "total_runs": "1"
  }, {
    "match_id": "534",
    "bowler": "player1",
    "total_runs": "0"
  }, {
    "match_id": "534",
    "bowler": "player1",
    "total_runs": "1"
  }]

  var input2 = [{
    "id": "577",
    "season": "2015"
  }, {
    "id": "597",
    "season": "2015"
  }, {
    "id": "579",
    "season": "2015"
  }, {
    "id": "534",
    "season": "2015"
  }];

  var op1 = {
    player1: 2,
    player2: 6
  };


  it('It should return extra runs consided per team', function () {
    assert.deepEqual(app.topEconomicalBowlers(input1, input2), op1);
  });



  var input3 = [{
    "match_id": "400",
    "bowler": "player1",
    "total_runs": "3"
  }, {
    "match_id": "534",
    "bowler": "player2",
    "total_runs": "1"
  }, {
    "match_id": "534",
    "bowler": "player1",
    "total_runs": "0"
  }, {
    "match_id": "534",
    "bowler": "player1",
    "total_runs": "1"
  }]

  var input4 = [{
    "id": "577",
    "season": "2015"
  }, {
    "id": "597",
    "season": "2016"
  }, {
    "id": "579",
    "season": "2015"
  }, {
    "id": "534",
    "season": "2015"
  }];

  var op2 = { player1: 3, player2: 6 };


  it('It should return extra runs consided per team', function () {
    assert.deepEqual(app.topEconomicalBowlers(input3, input4), op2);
  });
})