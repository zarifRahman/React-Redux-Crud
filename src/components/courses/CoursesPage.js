import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    // event.preventDefault();
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // debugger;
    // automatically adds dispatch
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {/* This component has courses array from state */}
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

// connect connects our components with redux
// ownProps refers to component ownProps
function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

// a dispatch props is injected automatically when we remove the mapDispatchToProps
export default connect(mapStateToProps)(CoursesPage);
