import React from "react";
import { useCricketMatch } from "../providers/CricketMatchProvider";
import { MUIButton } from "../components/mui/MUIButton";
export const CurrentMatch = () => {
  const { state, startNewOver } = useCricketMatch();
  return (
    <div className="pad10">
      <p>{state.overBall}</p>
      <MUIButton onClick={startNewOver} label={"start New Over"} />
    </div>
  );
};
