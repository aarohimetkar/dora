import React, { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register/admin",
        { username, password }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(
        "Admin registration failed:",
        error.response ? error.response.data.error : error.message
      );
    }
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default AdminRegister;
