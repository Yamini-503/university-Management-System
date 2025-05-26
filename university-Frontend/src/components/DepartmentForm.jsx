import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./form.css";

const DepartmentForm = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const department = location.state?.department || null;

  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (department) {
      setName(department.name);
    }
  }, [department]);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Department Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Department Name should contain only alphabets";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDepartment = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newDepartment = {
      name: name,
    };

    if (department) {
      const response = await fetch(
        `http://localhost:9090/departments/update/${department.department_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDepartment),
        }
      );
      if (response.ok) {
        alert("Department updated successfully");
        navigate(
          role === "admin"
            ? "/admin/managedepartment/departmentview"
            : "/staff/managedepartment/departmentview"
        );
      } else {
        alert("Failed to update department");
      }
    } else {
      const response = await fetch("http://localhost:9090/departments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDepartment),
      });
      if (response.ok) {
        alert("Department added successfully");
        setName("");
      } else {
        alert("Failed to add department");
      }
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-form-card">
        <h1 className="course-form-title">
          {department ? "Update Department" : "Add New Department"}
        </h1>
        <form onSubmit={handleDepartment}>
          <div className="course-form-group">
            <label className="course-form-label">Department Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Department Name"
              className="course-form-input"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <button type="submit" className="course-form-submit">
            {department ? "Update Department" : "Add Department"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
