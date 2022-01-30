import React from "react";

const defaultState = [];

/// !!! remember whatever you return from your reducer becomes the new state
const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      // debugger;
      // add the course that is paased in action
      return [...state, { ...action.course }];
    case "LOAD_COURSES_SUCCESS":
      return action.courses;
    default:
      return state;
  }
};

export default courseReducer;
