<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM menu";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Food Order Management</title>
</head>

<body>
    <h2>Menu</h2>

    <table border="1">
        <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>{$row['id']}</td>";
            echo "<td>{$row['item_name']}</td>";
            echo "<td>{$row['price']}</td>";
            echo "<td>
                    <a href='edit.php?id={$row['id']}'>Edit</a> |
                    <a href='delete.php?id={$row['id']}'>Delete</a>
                  </td>";
            echo "</tr>";
        }
        ?>
    </table>

    <a href="add.php">Add Item</a>
</body>

</html>
