import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./view.css"; // Assuming the same view.css file is being used

const FacultyView = () => {
  const [faculties, setFaculties] = useState([]);

  const facultyHandler = async () => {
    try {
      const response = await fetch("http://localhost:9090/facultys/getAll");
      const data = await response.json();
      if (Array.isArray(data)) {
        setFaculties(data);
      } else {
        setFaculties([data]);
      }
    } catch (error) {
      console.error("Error fetching faculty data:", error);
      setFaculties([]);
    }
  };

  useEffect(() => {
    facultyHandler();
  }, []);

  const deleteFaculty = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:9090/facultys/delete/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        alert("Faculty deleted successfully");
        facultyHandler();
      } else {
        alert("Failed to delete faculty");
      }
    } catch (error) {
      console.error("Error deleting faculty:", error);
      alert("Failed to delete faculty");
    }
  };

  return (
    <div className="course-view">
      <h2>Faculty Details</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.faculty_id}>
              <td>{faculty.faculty_id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.contact}</td>
              <td>
                <button
                  onClick={() => deleteFaculty(faculty.faculty_id)}
                  className="delete-btn"
                >
                  Delete
                </button>
                <Link to="/admin/managefaculty/facultyform" state={{ faculty }}>
                  <button className="edit-btn">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyView;
