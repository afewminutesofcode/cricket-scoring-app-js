import { START_NEW_OVER } from "./constants";

export const CricketMatchReducer = (state, action) => {
  switch (action.type) {
    case START_NEW_OVER: {
      return {
        ...state,
        overBall: 0,
        currentOver: []
      };
    }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};
