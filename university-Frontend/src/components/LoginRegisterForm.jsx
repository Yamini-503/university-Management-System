import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginRegisterForm.css";

const LoginRegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = isLogin
      ? "http://localhost:9090/api/auth/login"
      : "http://localhost:9090/api/auth/register";

    const requestData = {
      email,
      password,
      role: role.toLowerCase(),
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (isLogin) {
            setEmail("");
            setPassword("");
            navigate(`/${data.role.toLowerCase()}`);
            
          } else {
            setSuccessMessage("Registration successful!");
            setTimeout(() => setIsLogin(true), 1000);
          }
        } else {
          setErrorMessage(data.message || "Something went wrong.");
        }
      })
      .catch(() => setErrorMessage("Server error. Please try again later."));
  };

  return (
    <div className="hero-section">
      {/* Left Side: Heading and Quote */}
      <div className="hero-left">
        <h1>Welcome to University Portal</h1>
        <p>
          Your gateway to a better future. Simplified management for students,
          faculty, and admins.
        </p>
      </div>

      {/* Right Side: Login/Register Form */}
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>{isLogin ? "Welcome Back" : "Create an Account"}</h2>
            <p>
              {isLogin ? "Log in to your account" : "Register to get started"}
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="role-tabs">
            <button
              className={role === "Student" ? "active" : ""}
              onClick={() => setRole("Student")}
            >
              Student
            </button>
            <button
              className={role === "Faculty" ? "active" : ""}
              onClick={() => setRole("Faculty")}
            >
              Faculty
            </button>
            {isLogin && (
              <button
                className={role === "Admin" ? "active" : ""}
                onClick={() => setRole("Admin")}
              >
                Admin
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {isLogin && (
              <div className="forgot-password">
                <span>Forgot password?</span>
              </div>
            )}

            <button type="submit" className="form-submit">
              {isLogin ? "Login" : "Register"}
            </button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>

          <p className="switch-mode">
            {isLogin ? "New to the portal?" : "Already have an account?"}{" "}
            <span onClick={handleSwitchMode}>
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
