//Rank Teams by Votes

/*
In a special ranking system, each voter gives a rank from highest to lowest to all teams participating in the competition.
The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, 
we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. 
If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.
You are given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.
Return a string of all teams sorted by the ranking system.

Example 1:

Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
Output: "ACB"
*/

var rankTeams = function (votes) {
  if (votes.length === 1) return votes[0];

  const teamsList = [...votes[0]];
  const teamsScore = teamsList.reduce(
    //{a:[0,0,0],b:[0,0,0],c[0,0,0]}
    (a, v) => ({ ...a, [v]: teamsList.map(() => 0) }),
    {}
  );
  votes.forEach((vote) => {
    [...vote].forEach((team, i) => {
      // i represent the team rank
      teamsScore[team][i] += 1;
    });
  });

  let sortable = [];
  for (var team in teamsScore) {
    // convert teams obj to arr
    sortable.push([team, teamsScore[team]]);
  }
  sortable.sort(function (a, b) {
    for (i = 0; i < teamsList.length; ++i) {
      if (a[1][i] !== b[1][i]) {
        return b[1][i] - a[1][i];
      }
    }
    return a[0] < b[0] ? -1 : 1;
  });
  return sortable.map((team) => team[0]).join('');
};

//  const votes = [
//     'FVSHJIEMNGYPTQOURLWCZKAX',
//     'AITFQORCEHPVJMXGKSLNZWUY',
//     'OTERVXFZUMHNIYSCQAWGPKJL',
//     'VMSERIJYLZNWCPQTOKFUHAXG',
//     'VNHOZWKQCEFYPSGLAMXJIUTR',
//     'ANPHQIJMXCWOSKTYGULFVERZ',
//     'RFYUXJEWCKQOMGATHZVILNSP',
//     'SCPYUMQJTVEXKRNLIOWGHAFZ',
//     'VIKTSJCEYQGLOMPZWAHFXURN',
//     'SVJICLXKHQZTFWNPYRGMEUAO',
//     'JRCTHYKIGSXPOZLUQAVNEWFM',
//     'NGMSWJITREHFZVQCUKXYAPOL',
//     'WUXJOQKGNSYLHEZAFIPMRCVT',
//     'PKYQIOLXFCRGHZNAMJVUTWES',
//     'FERSGNMJVZXWAYLIKCPUQHTO',
//     'HPLRIUQMTSGYJVAXWNOCZEKF',
//     'JUVWPTEGCOFYSKXNRMHQALIZ',
//     'MWPIAZCNSLEYRTHFKQXUOVGJ',
//     'EZXLUNFVCMORSIWKTYHJAQPG',
//     'HRQNLTKJFIEGMCSXAZPYOVUW',
//     'LOHXVYGWRIJMCPSQENUAKTZF',
//     'XKUTWPRGHOAQFLVYMJSNEIZC',
//     'WTCRQMVKPHOSLGAXZUEFYNJI',
//  ];
