import React from "react";
import { useCricketMatch } from "../providers/CricketMatchProvider";
import { CurrentBatsmen } from "../components/currentMatch/CurrentBatsmen";
import { CurrentBowler } from "../components/currentMatch/CurrentBowler";
import { SelectBatsmen } from "../components/currentMatch/SelectBatsmen";
import { SelectBowler } from "../components/currentMatch/SelectBowler";

export const CurrentMatch = () => {
  const { state, updateBatsmen, updateBowler } = useCricketMatch();
  const { battingTeamID, bowlingTeamID, currentInnings, innings, teams } = state;
  const inningState = innings[currentInnings];
  const {
    batsmenFacingID,
    bowlerRunsByID,
    currentBatsmenIDs,
    currentBowlerID,
    dismissedBatsmenIDs
  } = inningState;
  const needNewBatsmen =
    currentBatsmenIDs.length !== 2 && dismissedBatsmenIDs.length !== 10 ? true : false;
  const battingTeamData = teams[battingTeamID].teamList;
  const bowlingTeamData = teams[bowlingTeamID].teamList;
  const overInProgress = currentBowlerID !== "" && currentBowlerID !== 0;
  return (
    <div className="pad10">
      <CurrentBatsmen
        currentBatsmenIDs={currentBatsmenIDs}
        batsmenFacingID={batsmenFacingID}
        runsByID={inningState.runsByID}
        teamData={battingTeamData}
      />
      {currentBowlerID !== "" && (
        <CurrentBowler
          bowlerRunsByID={bowlerRunsByID}
          currentBowlerID={currentBowlerID}
          teamData={bowlingTeamData}
        />
      )}
      {needNewBatsmen ? (
        <SelectBatsmen
          currentBatsmenIDs={currentBatsmenIDs}
          dismissedBatsmenIDs={dismissedBatsmenIDs}
          teamData={battingTeamData}
          updateBatsmen={updateBatsmen}
        />
      ) : null}
      {overInProgress ? null : (
        <SelectBowler teamData={bowlingTeamData} updateBowler={updateBowler} />
      )}
      <p>Batting Team - {teams[battingTeamID].name}</p>
      <p>Bowling Team - {teams[bowlingTeamID].name}</p>
    </div>
  );
};
