import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Faculty = () => {
  const [isDepartmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);

  const toggleDepartmentDropdown = () => {
    setDepartmentDropdownOpen(!isDepartmentDropdownOpen);
  };

  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!isCourseDropdownOpen);
  };

  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!isStudentDropdownOpen);
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#1e1e1e" }}
    >
      {/* Sidebar */}
      <nav style={sidebarStyles}>
        <ul style={ulStyles}>
          {/* Department Management */}
          <li>
            <button
              onClick={toggleDepartmentDropdown}
              style={dropdownButtonStyles}
            >
              Department Management
            </button>
            {isDepartmentDropdownOpen && (
              <ul style={dropdownUlStyles}>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managedepartment/departmentform"
                    style={linkStyles}
                  >
                    Add Department
                  </Link>
                </li>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managedepartment/departmentview"
                    style={linkStyles}
                  >
                    View Departments
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Course Management */}
          <li>
            <button onClick={toggleCourseDropdown} style={dropdownButtonStyles}>
              Course Management
            </button>
            {isCourseDropdownOpen && (
              <ul style={dropdownUlStyles}>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managecourse/courseform"
                    style={linkStyles}
                  >
                    Add Course
                  </Link>
                </li>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managecourse/courseview"
                    style={linkStyles}
                  >
                    View Courses
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Student Management */}
          <li>
            <button
              onClick={toggleStudentDropdown}
              style={dropdownButtonStyles}
            >
              Student Management
            </button>
            {isStudentDropdownOpen && (
              <ul style={dropdownUlStyles}>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managestudent/studentform"
                    style={linkStyles}
                  >
                    Add Student
                  </Link>
                </li>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/faculty/managestudent/studentview"
                    style={linkStyles}
                  >
                    View Students
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={mainContentStyles}>
        <Outlet />
      </div>
    </div>
  );
};

// Styles
const sidebarStyles = {
  width: "350px",
  backgroundColor: "#1b1b1b", // Dark background
  paddingTop: "100px",
  paddingLeft: "20px",
  paddingRight: "20px",
  color: "#ffffff", // White text
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
};

const ulStyles = {
  listStyleType: "none",
  padding: 0,
};

const dropdownButtonStyles = {
  background: "none",
  border: "none",
  color: "#FF6F00", // Orange text
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  padding: "15px 20px",
  transition: "background 0.3s ease",
  borderBottom: "2px solid #FF6F00", // Orange underline
};

const dropdownUlStyles = {
  listStyleType: "none",
  paddingLeft: "20px",
  marginTop: "10px",
};

const dropdownLiStyles = {
  marginBottom: "10px",
};

const linkStyles = {
  textDecoration: "none",
  color: "#fff", // White text
  fontSize: "16px",
  transition: "color 0.3s ease",
};

const mainContentStyles = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#F1F1F1", // Light gray background
  color: "#333", // Dark text for readability
  boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
  borderRadius: "8px", // Rounded corners
};

export default Faculty;
