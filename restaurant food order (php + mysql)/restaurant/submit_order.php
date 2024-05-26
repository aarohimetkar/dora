<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "restaurant";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $customer_name = $_POST['customer_name'];
    $order_items = json_decode($_POST['order_items'], true);

    $stmt = $conn->prepare("INSERT INTO orders (customer_name) VALUES (?)");
    $stmt->bind_param("s", $customer_name);
    $stmt->execute();

    $order_id = $stmt->insert_id;

    $stmt = $conn->prepare("INSERT INTO order_items (order_id, food_item, quantity) VALUES (?, ?, ?)");

    foreach ($order_items as $item) {
        $food_item = $item['food_item'];
        $quantity = $item['quantity'];
        $stmt->bind_param("iss", $order_id, $food_item, $quantity);
        $stmt->execute();
    }

    $stmt->close();
    $conn->close();
    echo "Order placed successfully!";
}
?>
