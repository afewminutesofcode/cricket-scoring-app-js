import React from "react";
import { MUIList } from "../mui/MUIList";
import { MUIListItem } from "../mui/MUIListItem";
import { MUIListLabel } from "../mui/MUIListLabel";
import { formatPlayerName } from "../../helpers/cricket";

export const CurrentBatsmen = ({ currentBatsmenIDs, batsmenFacingID, runsByID, teamData }) => (
  <React.Fragment>
    {currentBatsmenIDs.length ? (
      <MUIList dense={true}>
        <MUIListLabel label="Current Batsmen" />
        {currentBatsmenIDs.map((playerID) => {
          const isBatFacing = batsmenFacingID === playerID ? true : false;
          return (
            <MUIListItem
              selector={"noTBpad"}
              txtClassName={isBatFacing ? "bold" : ""}
              dense={true}
              id={playerID}
              key={playerID}
              primary={formatPlayerName(teamData[playerID])}
              secondary={runsByID[playerID] !== undefined ? runsByID[playerID].total : 0}
            />
          );
        })}
      </MUIList>
    ) : null}
  </React.Fragment>
);
