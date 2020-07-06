import React from "react";
import { useCricketMatch } from "../providers/CricketMatchProvider";
import { MUIButton } from "../components/mui/MUIButton";
export const CurrentMatch = () => {
  const { state, startNewOver } = useCricketMatch();
  const { battingTeamID, bowlingTeamID, teams } = state;

  return (
    <div className="pad10">
      <p>Batting Team - {teams[battingTeamID].name}</p>
      <p>Bowling Team - {teams[bowlingTeamID].name}</p>
      <p>{state.overBall}</p>
      <MUIButton onClick={startNewOver} label={"start New Over"} />
    </div>
  );
};
