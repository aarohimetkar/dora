<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee_records";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];
$sql = "SELECT * FROM employees WHERE id=$id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Employee</title>
</head>

<body>
    <h2>Edit Employee</h2>

    <form method="post" action="index.php">
        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
        <label for="name">Name:</label>
        <input type="text" name="name" value="<?php echo $row['name']; ?>" required>
        <label for="email">Email:</label>
        <input type="email" name="email" value="<?php echo $row['email']; ?>" required>
        <label for="salary">Salary:</label>
        <input type="number" name="salary" value="<?php echo $row['salary']; ?>" step="0.01" required>
        <button type="submit" name="update">Update</button>
    </form>
</body>

</html>
