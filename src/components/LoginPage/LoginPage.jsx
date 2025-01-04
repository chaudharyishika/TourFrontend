import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import cross_icon from "../../assets/cross_icon.png";

function LoginPage() {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Form data being sent:", formData);
  
    try {
      const endpoint =
        currState === "Sign Up"
          ? "https://backsampl-3.onrender.com/api/auth/signup"
          : "https://backsampl-3.onrender.com/api/auth/login";
  
      const response = await axios.post(endpoint, formData);
  
      console.log("API Response:", response.data);
  
      if (response.data.success) {
        alert(`${currState} successful!`);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role || "user");
        navigate("/"); // Redirect after successful login
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };
  

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={handleClose} // Call handleClose on click
            src={cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="submit-button bg-green-600">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <a href="#">terms of use</a> &{" "}
            <a href="#">privacy policy</a>.
          </p>
        </div>
        <div className="login-click-button">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrState("Sign Up");
                }}
                className="toggle-link"
              >
                Click here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrState("Login");
                }}
                className="toggle-link "
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
