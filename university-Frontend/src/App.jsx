import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Faculty from "./pages/Faculty";
import Student from "./pages/Student";
import LoginRegisterForm from "./components/LoginRegisterForm";
import DepartmentForm from "./components/DepartmentForm";
import DepartmentView from "./components/DepartmentView";
import CourseForm from "./components/CourseForm";
import CourseView from "./components/CourseView";
import FacultyForm from "./components/FacultyForm";
import FacultyView from "./components/FacultyView";
import StudentForm from "./components/StudentForm";
import StudentView from "./components/StudentView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginRegisterForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<Admin />}>
          {/* Department Management */}
          <Route
            path="managedepartment/departmentform"
            element={<DepartmentForm role="admin" />}
          />
          <Route
            path="managedepartment/departmentview"
            element={<DepartmentView role="admin" />}
          />
          {/* Course Management */}
          <Route
            path="managecourse/courseform"
            element={<CourseForm role="admin" />}
          />
          <Route
            path="managecourse/courseview"
            element={<CourseView role="admin" />}
          />
          {/* Faculty Management */}
          <Route
            path="managefaculty/facultyform"
            element={<FacultyForm role="admin" />}
          />
          <Route
            path="managefaculty/facultyview"
            element={<FacultyView role="admin" />}
          />
          {/* Student Management */}
          <Route
            path="managestudent/studentform"
            element={<StudentForm role="admin" />}
          />
          <Route
            path="managestudent/studentview"
            element={<StudentView role="admin" />}
          />
        </Route>

        {/* Student Routes */}
        <Route path="/student/*" element={<Student />}>
          {/* Department Management */}
          <Route
            path="managedepartment/departmentform"
            element={<DepartmentForm role="student" />}
          />
          <Route
            path="managedepartment/departmentview"
            element={<DepartmentView role="student" />}
          />
          {/* Course Management */}
          <Route
            path="managecourse/courseform"
            element={<CourseForm role="student" />}
          />
          <Route
            path="managecourse/courseview"
            element={<CourseView role="student" />}
          />
        </Route>

        {/* Faculty Routes */}
        <Route path="/faculty/*" element={<Faculty />}>
          {/* Department Management */}
          <Route
            path="managedepartment/departmentform"
            element={<DepartmentForm role="faculty" />}
          />
          <Route
            path="managedepartment/departmentview"
            element={<DepartmentView role="faculty" />}
          />
          {/* Course Management */}
          <Route
            path="managecourse/courseform"
            element={<CourseForm role="faculty" />}
          />
          <Route
            path="managecourse/courseview"
            element={<CourseView role="faculty" />}
          />
          {/* student Management */}
          <Route
            path="managestudent/studentform"
            element={<StudentForm role="faculty" />}
          />
          <Route
            path="managestudent/studentview"
            element={<StudentView role="faculty" />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
