import React from "react";
import { worldXI, asiaXI } from "../data/teams";
import { CricketMatchReducer } from "./CricketMatchReducer";
import { START_NEW_OVER, UPDATE_BATSMEN, UPDATE_BOWLER } from "./constants";
import { inningsTemplate, tossResult } from "../helpers/cricket";

const MatchContext = React.createContext();

const CricketMatchProvider = (props) => {
  const setToss = tossResult();
  const team1 = {
    name: "WXI",
    teamList: worldXI
  };
  const team2 = {
    name: "AXI",
    teamList: asiaXI
  };
  const teams = {
    team1,
    team2
  };
  const battingTeamID = setToss === 1 ? "team1" : "team2";
  const bowlingTeamID = setToss === 1 ? "team2" : "team1";

  const [state, dispatch] = React.useReducer(CricketMatchReducer, {
    teams,
    currentInnings: 1,
    battingTeamID,
    bowlingTeamID,
    tossResult: "",
    tossDecision: "",
    isMatchComplete: false,
    matchResultStr: "",
    innings: {
      1: {
        ...inningsTemplate,
        battingTeam: battingTeamID,
        bowlingTeam: bowlingTeamID
      },
      2: {
        ...inningsTemplate,
        bowlingTeam: battingTeamID,
        battingTeam: bowlingTeamID
      }
    }
  });

  const value = React.useMemo(() => [state, dispatch], [state]);

  console.log(state);
  return <MatchContext.Provider value={value} {...props} />;
};

const useCricketMatch = () => {
  const context = React.useContext(MatchContext);
  if (!context) {
    throw new Error(`useCricketMatch must be used within a CricketMatchProvider`);
  }
  const [state, dispatch] = context;
  const startNewOver = () =>
    dispatch({
      type: START_NEW_OVER
    });
  const updateBatsmen = (batsmenIDs, facingID) =>
    dispatch({
      type: UPDATE_BATSMEN,
      batsmenIDs,
      facingID
    });
  const updateBowler = (value) =>
    dispatch({
      type: UPDATE_BOWLER,
      value
    });
  return {
    state,
    startNewOver,
    updateBatsmen,
    updateBowler
  };
};

export { CricketMatchProvider, useCricketMatch };
