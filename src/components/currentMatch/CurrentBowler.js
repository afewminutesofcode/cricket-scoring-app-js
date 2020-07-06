import React from "react";
import { MUIList } from "../mui/MUIList";
import { MUIListItem } from "../mui/MUIListItem";
import { MUIListLabel } from "../mui/MUIListLabel";
import { formatPlayerName } from "../../helpers/cricket";
import { objKeyExists } from "../../helpers/utils";

export const CurrentBowler = ({ bowlerRunsByID, currentBowlerID, teamData }) => {
  const currentBowlerWickets = objKeyExists(bowlerRunsByID, currentBowlerID, "wickets")
    ? bowlerRunsByID[currentBowlerID].wickets
    : 0;
  const currentBowlerRuns = objKeyExists(bowlerRunsByID, currentBowlerID, "total")
    ? bowlerRunsByID[currentBowlerID].total
    : 0;

  return (
    <React.Fragment>
      <MUIList dense={true}>
        <MUIListLabel label="Current Bowler" />
        <MUIListItem
          selector={"noTBpad"}
          dense={true}
          id={"currentBowler"}
          primary={formatPlayerName(teamData[currentBowlerID])}
          secondary={`${currentBowlerWickets} / ${currentBowlerRuns}`}
        />
      </MUIList>
    </React.Fragment>
  );
};
