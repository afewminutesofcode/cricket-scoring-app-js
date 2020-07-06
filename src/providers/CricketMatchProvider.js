import React from "react";
import { CricketMatchReducer } from "./CricketMatchReducer";
import { START_NEW_OVER } from "./constants";

const MatchContext = React.createContext();

const CricketMatchProvider = (props) => {
  const [state, dispatch] = React.useReducer(CricketMatchReducer, {
    overBall: 1,
    currentOver: ["1"]
  });

  const value = React.useMemo(() => [state, dispatch], [state]);

  console.log(state);
  return <MatchContext.Provider value={value} {...props} />;
};

const useCricketMatch = () => {
  const context = React.useContext(MatchContext);
  if (!context) {
    throw new Error(`useCricketMatch must be used within a CricketMatchProvider`);
  }
  const [state, dispatch] = context;
  const startNewOver = () =>
    dispatch({
      type: START_NEW_OVER
    });
  return {
    state,
    startNewOver
  };
};

export { CricketMatchProvider, useCricketMatch };
