import React from "react";
import { MUIButton } from "../../components/mui/MUIButton";
import { MUIDialog } from "../../components/mui/MUIDialog";
import { MUINativeSelect } from "../../components/mui/MUINativeSelect";
import { formatPlayerName, getAvailableBatsmenIDs } from "../../helpers/cricket";
import { emptyLabelValue, removeEmptyStr } from "../../helpers/utils";

export const SelectBatsmen = ({
  currentBatsmenIDs,
  dismissedBatsmenIDs,
  teamData,
  label = "Select Batsmen",
  updateBatsmen
}) => {
  const [open, setOpen] = React.useState(false);
  const [batsmenIDs, setBatsmenIDs] = React.useState(currentBatsmenIDs);
  const [facingID, setFacingID] = React.useState(
    currentBatsmenIDs.length ? currentBatsmenIDs[0] : ""
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    updateBatsmen(batsmenIDs, facingID);
  };

  const handleChange = (value, index) => {
    const batsmen1 = batsmenIDs[0] !== undefined ? batsmenIDs[0] : "";
    const batsmen2 = batsmenIDs[1] !== undefined ? batsmenIDs[1] : "";
    if (index === 0) {
      setBatsmenIDs(removeEmptyStr([value, batsmen2]));
    } else {
      setBatsmenIDs(removeEmptyStr([batsmen1, value]));
    }
  };

  const availableBatsmenIDs = getAvailableBatsmenIDs(Object.keys(teamData), dismissedBatsmenIDs);
  const availableBatsmenList = [
    emptyLabelValue(),
    ...availableBatsmenIDs.map((playerID) => ({
      label: formatPlayerName(teamData[playerID]),
      value: playerID
    }))
  ];
  const availableBatsmenList1 =
    batsmenIDs[1] !== undefined
      ? availableBatsmenList.filter((player) => player.value !== batsmenIDs[1])
      : availableBatsmenList;
  const availableBatsmenList2 =
    batsmenIDs[0] !== undefined
      ? availableBatsmenList.filter((player) => player.value !== batsmenIDs[0])
      : availableBatsmenList;

  return (
    <React.Fragment>
      <MUIButton
        style={{
          margin: "0 5px 5px"
        }}
        label={label}
        onClick={handleClickOpen}
      />
      <MUIDialog
        open={open}
        onClose={handleClose}
        ariaLabel={label}
        ariaDescribe={label}
        title={label}
        content={
          <React.Fragment>
            <MUINativeSelect
              disabled={currentBatsmenIDs.includes(batsmenIDs[0])}
              fullWidth
              id={"batsmen1"}
              label={"Batsmen1"}
              name={"batsmen1"}
              options={availableBatsmenList1}
              handleChange={(e) => handleChange(e.target.value, 0)}
              value={batsmenIDs[0] !== undefined ? batsmenIDs[0] : ""}
            />
            <MUINativeSelect
              disabled={currentBatsmenIDs.includes(batsmenIDs[1])}
              fullWidth
              id={"batsmen2"}
              label={"Batsmen2"}
              name={"batsmen2"}
              options={availableBatsmenList2}
              handleChange={(e) => handleChange(e.target.value, 1)}
              value={batsmenIDs[1] !== undefined ? batsmenIDs[1] : ""}
            />
            {batsmenIDs.length ? (
              <MUINativeSelect
                fullWidth
                id={"facing"}
                label={"facing"}
                name={"facing"}
                options={batsmenIDs.map((playerID) => ({
                  label: formatPlayerName(teamData[playerID]),
                  value: playerID
                }))}
                handleChange={(e) => setFacingID(e.target.value, 1)}
                value={facingID}
              />
            ) : null}
          </React.Fragment>
        }
        buttons={
          <MUIButton
            disabled={batsmenIDs.length !== 2}
            label={"ok"}
            onClick={handleClose}
            variant={"text"}
          />
        }
      />
    </React.Fragment>
  );
};
