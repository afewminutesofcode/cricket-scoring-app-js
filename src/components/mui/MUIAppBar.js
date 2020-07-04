import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Home from "@material-ui/icons/Home";
import { Link } from "@reach/router";

export const MUIAppBar = ({ title }) => (
  <div>
    <AppBar position="static">
      <Toolbar className="flex flex-between">
        <Typography variant="h6">{title}</Typography>
        <Link className="icon-link" to="/">
          <Home />
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);
