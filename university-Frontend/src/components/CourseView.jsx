import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./view.css";

const CourseView = ({ role }) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:9090/Courses/getAll");
      const data = await response.json();
      if (Array.isArray(data)) {
        setCourses(data);
      } else {
        console.error("Expected an array but got", data);
        setCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses data", error);
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    const response = await fetch(`http://localhost:9090/Courses/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Course deleted successfully");
      fetchCourses();
    } else {
      alert("Failed to delete course");
    }
  };

  return (
    <div className="course-view">
      <h2>Course Details</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.course_id}>
              <td>{course.course_id}</td>
              <td>{course.name}</td>
              <td>{course.specialization}</td>
              <td>{course.contact}</td>
              {role === "admin" && (
                <td>
                  <button
                    onClick={() => deleteCourse(course.course_id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <Link to="/admin/managecourse/courseform" state={{ course }}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseView;
