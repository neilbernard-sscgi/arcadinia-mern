"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    // Simulate login process
    setIsLoading(true);

    // This is a mock authentication - in a real app, you would call an API
    setTimeout(() => {
      // For demo purposes, let's say admin/admin123 is the valid credential
      if (username === "admin" && password === "admin123") {
        // Success - in a real app, you would store the auth token
        localStorage.setItem("isAuthenticated", "true");
        navigate("/"); // Redirect to home page after login
      } else {
        // Failed login
        setError("Invalid username or password");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Administrator Login</h1>
            <p className="login-subtitle">Access the admin dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="login-footer">
            <p>This login is restricted to authorized administrators only.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
