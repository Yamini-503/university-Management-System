import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./form.css";

const CourseForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course || null;

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (course) {
      setName(course.name);
      setSpecialization(course.specialization);
      setContact(course.contact);
    }
  }, [course]);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Course Name is required";
    }

    if (!specialization.trim()) {
      newErrors.specialization = "Specialization is required";
    }

    if (!contact) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Contact should be a 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCourse = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newCourse = {
      name: name,
      specialization: specialization,
      contact: contact,
    };

    if (course) {
      const response = await fetch(
        `http://localhost:9090/Courses/update/${course.course_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourse),
        }
      );
      if (response.ok) {
        alert("Course updated successfully");
        navigate("/admin/managecourse/courseview");
      } else {
        alert("Failed to update course");
      }
    } else {
      const response = await fetch("http://localhost:9090/Courses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
      if (response.ok) {
        alert("Course added successfully");
        setName("");
        setSpecialization("");
        setContact("");
      } else {
        alert("Failed to add course");
      }
    }
  };

  return (
    <div className="course-form-container">
      <div className="course-form-card">
        <h1 className="course-form-title">
          {course ? "Update Course" : "Add New Course"}
        </h1>
        <form onSubmit={handleCourse}>
          <div className="course-form-group">
            <label className="course-form-label">Course Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Course Name"
              className="course-form-input"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="course-form-group">
            <label className="course-form-label">Specialization</label>
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              placeholder="Enter Specialization"
              className="course-form-input"
            />
            {errors.specialization && (
              <p className="error-text">{errors.specialization}</p>
            )}
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
            {course ? "Update Course" : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
