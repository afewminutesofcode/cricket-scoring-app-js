import React from "react";
import { useCricketMatch } from "../providers/CricketMatchProvider";
import { CurrentBatsmen } from "../components/currentMatch/CurrentBatsmen";
import { SelectBatsmen } from "../components/currentMatch/SelectBatsmen";

export const CurrentMatch = () => {
  const { state, updateBatsmen } = useCricketMatch();
  const { battingTeamID, bowlingTeamID, currentInnings, innings, teams } = state;
  const inningState = innings[currentInnings];
  const { batsmenFacingID, currentBatsmenIDs, dismissedBatsmenIDs } = inningState;
  const needNewBatsmen =
    currentBatsmenIDs.length !== 2 && dismissedBatsmenIDs.length !== 10 ? true : false;
  const battingTeamData = teams[battingTeamID].teamList;
  return (
    <div className="pad10">
      <CurrentBatsmen
        currentBatsmenIDs={currentBatsmenIDs}
        batsmenFacingID={batsmenFacingID}
        runsByID={inningState.runsByID}
        teamData={battingTeamData}
      />
      {needNewBatsmen ? (
        <SelectBatsmen
          currentBatsmenIDs={currentBatsmenIDs}
          dismissedBatsmenIDs={dismissedBatsmenIDs}
          teamData={battingTeamData}
          updateBatsmen={updateBatsmen}
        />
      ) : null}
      <p>Batting Team - {teams[battingTeamID].name}</p>
      <p>Bowling Team - {teams[bowlingTeamID].name}</p>
    </div>
  );
};
