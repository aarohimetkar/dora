import React, { useState } from "react";
import axios from "axios";

const Complaint = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/complaint", {
        username,
        title,
        description,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Complaint submission failed:", error);
    }
  };

  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
};

export default Complaint;