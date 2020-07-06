import React from "react";
import { MUIButton } from "../../components/mui/MUIButton";
import { MUIDialog } from "../../components/mui/MUIDialog";
import { MUIRadioGroup } from "../../components/mui/MUIRadioGroup";
import { formatPlayerName } from "../../helpers/cricket";
import { objKeyExists } from "../../helpers/utils";

export const SelectBowler = ({ teamData, updateBowler, extraContent, label = "Select Bowler" }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    updateBowler(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const filteredBowlingList = Object.keys(teamData).map((playerID) => ({
    id: playerID
  }));
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
            {extraContent}
            <MUIRadioGroup
              ariaLabel="select-bowler"
              name="select-bowler"
              value={value}
              onChange={handleChange}
              data={filteredBowlingList.map((player) => ({
                value: player.id,
                label: formatPlayerName(teamData[player.id])
              }))}
            />
          </React.Fragment>
        }
        buttons={
          <MUIButton disabled={value === 0} label={"ok"} onClick={handleClose} variant={"text"} />
        }
      />
    </React.Fragment>
  );
};
