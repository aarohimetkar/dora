<?php
// Sample array for student records (replace this with database integration)
$students = array(
    array("id" => 1, "name" => "John Doe", "age" => 20, "grade" => "A"),
    array("id" => 2, "name" => "Jane Doe", "age" => 21, "grade" => "B"),
    array("id" => 3, "name" => "Alice Smith", "age" => 22, "grade" => "C"),
);

// Function to generate a unique ID for a new student
function generateUniqueId($students)
{
    $maxId = 0;
    foreach ($students as $student) {
        $maxId = max($maxId, $student["id"]);
    }
    return $maxId + 1;
}

// CRUD operations
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST["add"])) {
        // Add new student
        $newId = generateUniqueId($students);
        $newStudent = array(
            "id" => $newId,
            "name" => $_POST["name"],
            "age" => $_POST["age"],
            "grade" => $_POST["grade"]
        );
        $students[] = $newStudent;
    } elseif (isset($_POST["edit"])) {
        // Edit existing student
        $editId = $_POST["edit"];
        foreach ($students as &$student) {
            if ($student["id"] == $editId) {
                $student["name"] = $_POST["name"];
                $student["age"] = $_POST["age"];
                $student["grade"] = $_POST["grade"];
                break;
            }
        }
    } elseif (isset($_POST["delete"])) {
        // Delete existing student
        $deleteId = $_POST["delete"];
        $students = array_filter($students, function ($student) use ($deleteId) {
            return $student["id"] != $deleteId;
        });
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Records</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Student Records</h2>

        <!-- Add Student Form -->
        <div class="form-container">
            <h3>Add Student</h3>
            <form action="" method="post">
                <label for="name">Name:</label>
                <input type="text" name="name" required>
                <label for="age">Age:</label>
                <input type="number" name="age" required>
                <label for="grade">Grade:</label>
                <input type="text" name="grade" required>
                <button type="submit" name="add">Add</button>
            </form>
        </div>

        <!-- Student Records Table -->
        <div class="table-container">
            <h3>Student Records</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($students as $student): ?>
                        <tr>
                            <td><?php echo $student["id"]; ?></td>
                            <td><?php echo $student["name"]; ?></td>
                            <td><?php echo $student["age"]; ?></td>
                            <td><?php echo $student["grade"]; ?></td>
                            <td>
                                <button class="edit-button" onclick="editStudent(<?php echo $student['id']; ?>)">Edit</button>
                                <button class="delete-button" onclick="deleteStudent(<?php echo $student['id']; ?>)">Delete</button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
