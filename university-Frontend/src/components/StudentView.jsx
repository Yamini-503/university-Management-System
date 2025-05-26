import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./view.css";

const StudentView = ({ role }) => {
  const [studentRecords, setStudentRecords] = useState([]);

  const fetchStudentRecords = async () => {
    try {
      const response = await fetch("http://localhost:9090/students/getAll");
      const data = await response.json();
      if (Array.isArray(data)) {
        setStudentRecords(data);
      } else {
        setStudentRecords([data]);
      }
    } catch {
      setStudentRecords([]);
    }
  };

  useEffect(() => {
    fetchStudentRecords();
  }, []);

  const deleteStudentRecord = async (id) => {
    const response = await fetch(
      `http://localhost:9090/students/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Student record deleted successfully");

      fetchStudentRecords();
    } else {
      alert("Failed to delete student record");
    }
  };

  return (
    <div className="course-view">
      <h2>Student Records</h2>
      <table className="course-table">
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Course ID</th>
            <th>Student ID</th>
            <th>Date</th>
            <th>Time</th>
            {(role === "admin" || role === "faculty") && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {studentRecords.map((record) => (
            <tr key={record.student_id}>
              <td>{record.department_id}</td>
              <td>{record.course_id}</td>
              <td>{record.student_id}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
              {(role === "admin" || role === "faculty") && (
                <td>
                  <button
                    onClick={() =>
                      deleteStudentRecord(record.student_id)
                    }
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <Link
                    to={
                      role === "admin"
                        ? "/admin/managestudent/studentform"
                        : "/faculty/managestudent/studentform"
                    }
                    state={{ studentRecord: record }}
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

export default StudentView;
