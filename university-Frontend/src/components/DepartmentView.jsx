import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./view.css";

const DepartmentView = ({ role }) => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await fetch("http://localhost:9090/departments/getAll");
      const data = await response.json();
      setDepartments(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching department data:", error);
      setDepartments([]);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const deleteDepartment = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:9090/departments/delete/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        alert("Department deleted successfully");
        fetchDepartments();
      } else {
        alert("Failed to delete department");
      }
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("Failed to delete department");
    }
  };

  return (
    <div className="course-view">
      <h2>Department Details</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Name</th>
            {role === "admin" && <th>Actions</th>}
        
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.department_id}>
              <td>{dept.department_id}</td>
              <td>{dept.name}</td>
              {role === "admin" && (
                <td>
                  <button
                    onClick={() => deleteDepartment(dept.department_id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/${role}/managedepartment/departmentform`}
                    state={{ department: dept }}
                  >
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

export default DepartmentView;
