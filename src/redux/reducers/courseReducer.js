import React from "react";

const defaultState = [];

const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      // add the course that is paased in action
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default courseReducer;
