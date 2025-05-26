import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Student = () => {
  const [isDepartmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);

  const toggleDepartmentDropdown = () => {
    setDepartmentDropdownOpen(!isDepartmentDropdownOpen);
  };

  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!isCourseDropdownOpen);
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
                    to="/student/managedepartment/departmentform"
                    style={linkStyles}
                  >
                    Add Department
                  </Link>
                </li>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/student/managedepartment/departmentview"
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
                    to="/student/managecourse/courseform"
                    style={linkStyles}
                  >
                    Add Course
                  </Link>
                </li>
                <li style={dropdownLiStyles}>
                  <Link
                    to="/student/managecourse/courseview"
                    style={linkStyles}
                  >
                    View Courses
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={mainContentStyles}>
        {/* Content will be rendered based on the routes */}
        <Outlet />
      </div>
    </div>
  );
};

// Styles
const sidebarStyles = {
  width: "350px",
  backgroundColor: "#1b1b1b", // Darker background
  paddingTop: "100px",
  paddingLeft: "20px",
  paddingRight: "20px",
  color: "#ffffff", // White text
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow effect for depth
  transition: "background 0.3s ease",
  
};

const ulStyles = {
  listStyleType: "none",
  padding: 0,
};

const dropdownButtonStyles = {
  background: "none",
  border: "none",
  color: "#FF6F00", // Orange for the button text
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
  boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.1)", // Subtle inner shadow for depth
  borderRadius: "8px", // Rounded corners for a smoother look
};



export default Student;
