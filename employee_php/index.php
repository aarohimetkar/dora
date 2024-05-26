<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee_records";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// CREATE
if (isset($_POST['create'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $salary = $_POST['salary'];

    $sql = "INSERT INTO employees (name, email, salary) VALUES ('$name', '$email', $salary)";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// READ
$sql = "SELECT * FROM employees";
$result = $conn->query($sql);

// UPDATE
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $salary = $_POST['salary'];

    $sql = "UPDATE employees SET name='$name', email='$email', salary=$salary WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

// DELETE
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];

    $sql = "DELETE FROM employees WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Records CRUD</title>
</head>

<body>
    <h2>Employee Records</h2>

    <!-- Create Form -->
    <form method="post">
        <h3>Create Employee</h3>
        <label for="name">Name:</label>
        <input type="text" name="name" required>
        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <label for="salary">Salary:</label>
        <input type="number" name="salary" step="0.01" required>
        <button type="submit" name="create">Create</button>
    </form>

    <!-- Display Employees -->
    <h3>Employee List</h3>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>{$row['id']}</td>";
            echo "<td>{$row['name']}</td>";
            echo "<td>{$row['email']}</td>";
            echo "<td>{$row['salary']}</td>";
            echo "<td>
                    <a href='edit.php?id={$row['id']}'>Edit</a> |
                    <a href='index.php?delete={$row['id']}'>Delete</a>
                  </td>";
            echo "</tr>";
        }
        ?>
    </table>
</body>

</html>
