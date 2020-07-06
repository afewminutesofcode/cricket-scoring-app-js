import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

export const MUIList = ({ children, subheader = null, dense = false }) => (
  <List
    dense={dense}
    subheader={subheader !== null ? <ListSubheader>{subheader}</ListSubheader> : null}
  >
    {children}
  </List>
);
