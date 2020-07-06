import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export const MUIListItem = ({
  id,
  primary,
  secondary,
  selector,
  dense = false,
  txtClassName = ""
}) => (
  <ListItem dense={dense} className={selector}>
    <ListItemText className={txtClassName} id={id} primary={primary} />
    <ListItemSecondaryAction>{secondary}</ListItemSecondaryAction>
  </ListItem>
);
