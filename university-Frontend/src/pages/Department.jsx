import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Department = () => {
  const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);

  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!isCourseDropdownOpen);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <nav style={sidebarStyles}>
        <ul style={ulStyles}>
          {/* Course Management */}
          <li>
            <button onClick={toggleCourseDropdown} style={dropdownButtonStyles}>
              Course Management
            </button>
            {isCourseDropdownOpen && (
              <ul style={dropdownUlStyles}>
                <li style={dropdownLiStyles}>
                  <Link to="/course/managecourse/courseview" style={linkStyles}>
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
        <Outlet />
      </div>
    </div>
  );
};

// Styles
const sidebarStyles = {
  width: "250px",
  backgroundColor: "#235391", // Solid blue background
  padding: "20px",
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
  color: "#ffffff", // White text
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  padding: "10px 0",
  transition: "background 0.3s ease",
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
  color: "#ffffff", // White text
  fontSize: "16px",
  transition: "color 0.3s",
};

const mainContentStyles = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#f1f1f1", // Light background color for the content area
  color: "#333", // Dark text for readability
  boxShadow: "inset 0px 0px 15px rgba(0, 0, 0, 0.1)", // Subtle inner shadow for depth
};

// Hover effect for links
linkStyles[":hover"] = {
  color: "#57cc02", // Change to green on hover
};



export default Department;
