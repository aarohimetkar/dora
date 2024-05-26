// Register.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Inside your component


function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, password }),
      });

      if (!response.ok) {
        // Handle non-successful responses
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error during registration:", error.message);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <button type="button" onClick={() => navigate('/login')}>
          Login
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
