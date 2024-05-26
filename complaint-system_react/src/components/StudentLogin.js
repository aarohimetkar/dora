import React, { useState } from "react";
import axios from "axios";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login/student", {
        username,
        password,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(
        "Student login failed:",
        error.response ? error.response.data.error : error.message
      );
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default StudentLogin;
