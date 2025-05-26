import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./form.css";

const StudentForm = ({ role }) => {
  const [departmentId, setDepartmentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const studentRecord = location.state?.studentRecord || null;

  useEffect(() => {
    if (studentRecord) {
      setDepartmentId(studentRecord.department_id);
      setCourseId(studentRecord.course_id);
      setDate(studentRecord.date);
      setTime(studentRecord.time);
    }
  }, [studentRecord]);

  const validateForm = () => {
    const newErrors = {};
    const currentDate = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

    if (!String(departmentId).trim()) {
      newErrors.departmentId = "Department ID is required";
    } else if (!/^\d+$/.test(departmentId)) {
      newErrors.departmentId = "Department ID should be a numeric value";
    }

    if (!String(courseId).trim()) {
      newErrors.courseId = "Course ID is required";
    } else if (!/^\d+$/.test(courseId)) {
      newErrors.courseId = "Course ID should be a numeric value";
    }

    if (!date) {
      newErrors.date = "Date is required";
    } else if (date < currentDate) {
      newErrors.date = "Date cannot be in the past";
    }

    if (!time) {
      newErrors.time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStudentRecord = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newStudentRecord = {
      department_id: departmentId,
      course_id: courseId,
      date: date,
      time: time,
    };

    if (studentRecord) {
      const response = await fetch(
        `http://localhost:9090/students/update/${studentRecord.student_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudentRecord),
        }
      );

      if (response.ok) {
        alert("Student record updated successfully");
        navigate(
          role === "admin"
            ? "/admin/managestudent/studentview"
            : "/faculty/managestudent/studentview"
        );
      } else {
        alert(
          "Failed to update student record. Either department ID or course ID does not exist"
        );
      }
    } else {
      const response = await fetch("http://localhost:9090/students/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudentRecord),
      });

      if (response.ok) {
        alert("Student record added successfully");
        setDepartmentId("");
        setCourseId("");
        setDate("");
        setTime("");
      } else {
        alert(
          "Failed to add student record. Either department ID or course ID does not exist"
        );
      }
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-form-card">
        <h1 className="course-form-title">
          {studentRecord ? "Update Student Record" : "Add New Student Record"}
        </h1>
        <form onSubmit={handleStudentRecord}>
          <div className="course-form-group">
            <label className="course-form-label" htmlFor="department_id">
              Department ID
            </label>
            <input
              type="text"
              id="department_id"
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              placeholder="Enter Department ID"
              className="course-form-input"
            />
            {errors.departmentId && (
              <p className="error-text">{errors.departmentId}</p>
            )}
          </div>

          <div className="course-form-group">
            <label className="course-form-label" htmlFor="course_id">
              Course ID
            </label>
            <input
              type="text"
              id="course_id"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              placeholder="Enter Course ID"
              className="course-form-input"
            />
            {errors.courseId && <p className="error-text">{errors.courseId}</p>}
          </div>

          <div className="course-form-group">
            <label className="course-form-label" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="course-form-input"
            />
            {errors.date && <p className="error-text">{errors.date}</p>}
          </div>

          <div className="course-form-group">
            <label className="course-form-label" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="course-form-input"
            />
            {errors.time && <p className="error-text">{errors.time}</p>}
          </div>

          <button type="submit" className="course-form-submit">
            {studentRecord ? "Update Record" : "Add Record"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
