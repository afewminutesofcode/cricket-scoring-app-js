import React from "react";
import { MUIButton } from "../components/mui/MUIButton";

export const Home = () => (
  <div className={"flex flex-column"}>
    <MUIButton disabled linkPath="newmatch" label="New" />
    <MUIButton linkPath="currentmatch" label="Current" />
    <MUIButton disabled linkPath="allmatches" label="All" />
  </div>
);
