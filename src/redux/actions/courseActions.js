import React from "react";

// find by id
// const course = [
//   { id: 1, title: "Course 1" },
//   { id: 2, title: "Course 2" },
// ];
// course.find((c) => c.id === 2); // output {id: 2, title: "Course 2"}

export function createCourse(course) {
  // debugger;
  return { type: "CREATE_COURSE", course: course };
}
