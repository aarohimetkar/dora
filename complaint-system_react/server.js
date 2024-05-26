const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "complaints_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

// Student registration
app.post("/register/student", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO students (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Student registration failed" });
    } else {
      res.json({ message: "Student registration successful" });
    }
  });
});

// Admin registration
app.post("/register/admin", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Admin registration failed" });
    } else {
      res.json({ message: "Admin registration successful" });
    }
  });
});

// Student login
app.post("/login/student", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM students WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Student login failed" });
    } else if (results.length > 0 && results[0].password === password) {
      res.json({ message: "Student login successful" });
    } else {
      res.status(401).json({ error: "Invalid student credentials" });
    }
  });
});

// Admin login
app.post("/login/admin", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM admin WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Admin login failed" });
    } else if (results.length > 0 && results[0].password === password) {
      res.json({ message: "Admin login successful" });
    } else {
      res.status(401).json({ error: "Invalid admin credentials" });
    }
  });
});
// Complaint submission
app.post("/complaint", (req, res) => {
  const { username, title, description } = req.body;
  const sql = "INSERT INTO complaints (username, title, description) VALUES (?, ?, ?)";
  db.query(sql, [username, title, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Complaint submission failed" });
    } else {
      res.json({ message: "Complaint submission successful" });
    }
  });
});

// Add more routes for complaint submission, fetching complaints, etc.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
