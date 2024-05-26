<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];

$sql = "SELECT * FROM menu WHERE id=$id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['item_name'];
    $price = $_POST['price'];

    $sql = "UPDATE menu SET item_name='$itemName', price=$price WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error updating record: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Item</title>
</head>

<body>
    <h2>Edit Item</h2>

    <form method="post">
        
        
// (Previous code...)

        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
        <label for="item_name">Item Name:</label>
        <input type="text" name="item_name" value="<?php echo $row['item_name']; ?>" required>
        <br>
        <label for="price">Price:</label>
        <input type="number" name="price" step="0.01" value="<?php echo $row['price']; ?>" required>
        <br>
        <button type="submit">Update Item</button>
    </form>

    <a href="index.php">Back to Menu</a>
</body>

</html>
