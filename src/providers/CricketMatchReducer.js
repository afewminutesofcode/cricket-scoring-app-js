import { START_NEW_OVER, UPDATE_BATSMEN, UPDATE_BOWLER } from "./constants";

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

const updateCurrentBowler = (state, value) => {
  const { currentInnings } = state;
  return {
    innings: {
      ...state.innings,
      [currentInnings]: {
        ...state.innings[currentInnings],
        currentBowlerID: value
      }
    }
  };
};

const updateCurrentInnings = (state, newObject) => {
  return {
    innings: {
      ...state.innings,
      [state.currentInnings]: {
        ...state.innings[state.currentInnings],
        ...newObject
      }
    }
  };
};

export const CricketMatchReducer = (state, action) => {
  switch (action.type) {
    case START_NEW_OVER: {
      return {
        ...state,
        ...updateCurrentInnings(state, {
          overBall: 0,
          currentOver: []
        })
      };
    }
    case UPDATE_BATSMEN: {
      return {
        ...state,
        ...updateCurrentBatsmen(state, action.batsmenIDs, action.facingID)
      };
    }
    case UPDATE_BOWLER: {
      return {
        ...state,
        ...updateCurrentBowler(state, action.value)
      };
    }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};
