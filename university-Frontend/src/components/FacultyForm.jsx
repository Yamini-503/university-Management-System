import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./form.css";

const FacultyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const faculty = location.state?.faculty || null;

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (faculty) {
      setName(faculty.name);
      setContact(faculty.contact);
    }
  }, [faculty]);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only alphabets";
    }

    if (!contact) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Contact should be a 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFaculty = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newFaculty = {
      name: name,
      contact: contact,
    };

    if (faculty) {
      const response = await fetch(
        `http://localhost:9090/facultys/update/${faculty.faculty_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFaculty),
        }
      );
      if (response.ok) {
        alert("Faculty updated successfully");
        navigate("/admin/managefaculty/facultyview");
      } else {
        alert("Failed to update faculty");
      }
    } else {
      const response = await fetch("http://localhost:9090/facultys/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFaculty),
      });
      if (response.ok) {
        alert("Faculty added successfully");
        setName("");
        setContact("");
      } else {
        alert("Failed to add faculty");
      }
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-form-card">
        <h1 className="course-form-title">
          {faculty ? "Update Faculty" : "Add New Faculty"}
        </h1>
        <form onSubmit={handleFaculty}>
          <div className="course-form-group">
            <label className="course-form-label">Faculty Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Faculty Name"
              className="course-form-input"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="course-form-group">
            <label className="course-form-label">Contact Number</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Contact Number"
              className="course-form-input"
            />
            {errors.contact && <p className="error-text">{errors.contact}</p>}
          </div>

          <button type="submit" className="course-form-submit">
            {faculty ? "Update Faculty" : "Add Faculty"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyForm;
