import React from "react";

export function createCourse(course) {
  // debugger;
  return { type: "CREATE_COURSE", course: course };
}
