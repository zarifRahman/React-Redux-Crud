import React from "react";
import * as courseApi from "../../api/courseApi";

// Action Creators
export function createCourse(course) {
  // debugger;
  return { type: "CREATE_COURSE", course: course };
}
export function loadCourseSuccess(courses) {
  return { type: "LOAD_COURSES_SUCCESS", courses: courses };
}

// down func is a thunk func
// every thunk returns an action that have a dispatch as an argument
// loadCourse func returns a promise
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        // or like this --- dispatch({ type: "LOAD_COURSES_SUCCESS", courses: courses })
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
