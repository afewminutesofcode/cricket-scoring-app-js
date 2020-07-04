import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import { Home } from "./pages/home";
import { CurrentMatch } from "./pages/currentMatch";

import "./styles.css";
import { MUIAppBar } from "./components/mui/MUIAppBar";

const App = () => (
  <div className="app-wrap">
    <MUIAppBar title={"Cricket Scoing App"} />
    <Router>
      <Home path="/" />
      <CurrentMatch path="currentmatch" />
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
