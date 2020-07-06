import React from "react";
import { MUISmallLabel } from "./MUISmallLabel";

export const MUIListLabel = ({ label }) => (
  <li className="MuiListItem-gutters">
    <MUISmallLabel label={label} />
  </li>
);
