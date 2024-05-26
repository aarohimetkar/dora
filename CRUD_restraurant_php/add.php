<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['item_name'];
    $price = $_POST['price'];

    $sql = "INSERT INTO menu (item_name, price) VALUES ('$itemName', $price)";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Item</title>
</head>

<body>
    <h2>Add Item</h2>

    <form method="post">
        <label for="item_name">Item Name:</label>
        <input type="text" name="item_name" required>
        <br>
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" required>
        <br>
        <button type="submit">Add Item</button>
    </form>

    <a href="index.php">Back to Menu</a>
</body>

</html>
