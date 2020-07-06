import { START_NEW_OVER, UPDATE_BATSMEN } from "./constants";

export const updateCurrentBatsmen = (state, batsmenIDs, facingID) => {
  const { currentInnings } = state;
  const setFacingID = facingID !== "" ? facingID : batsmenIDs.length ? batsmenIDs[0] : "";

  return {
    innings: {
      ...state.innings,
      [currentInnings]: {
        ...state.innings[currentInnings],
        currentBatsmenIDs: batsmenIDs,
        batsmenFacingID: setFacingID
      }
    }
  };
};

export const CricketMatchReducer = (state, action) => {
  switch (action.type) {
    case START_NEW_OVER: {
      return {
        ...state,
        overBall: 0,
        currentOver: []
      };
    }
    case UPDATE_BATSMEN: {
      return {
        ...state,
        ...updateCurrentBatsmen(state, action.batsmenIDs, action.facingID)
      };
    }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};
