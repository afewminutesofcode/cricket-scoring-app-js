const matchSettings = (overs) => {
  const overBalls = overs * 6;
  const roundUpOvers = Math.round(overs / 5);
  return {
    maxInningsBall: overBalls,
    maxBowlerBalls: overBalls / 5 > 6 ? roundUpOvers * 6 : 6
  };
};

export const inningsTemplate = {
  score: 0,
  wickets: 0,
  overBall: 0,
  innigsBall: 0,
  battingTeam: 0,
  bowlingTeam: 0,
  overNumber: 1,
  ...matchSettings(20),
  over: "0.0",
  currentOver: [],
  currentBatsmenIDs: [],
  batsmenFacingID: "",
  currentBowlerID: "",
  dismissedBatsmenIDs: [],
  runsByScore: {},
  runsByID: {},
  bowlerRunsByID: {},
  runsByOver: {},
  fallOfWickets: {},
  extras: {},
  actionLog: {}
};

export const tossResult = () => {
  //return Math.floor(Math.random() * 2) + 1;
  return 2;
};
