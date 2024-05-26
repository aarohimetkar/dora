<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "airline_reservation";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$flight_id = $_POST['flight'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$sql = "INSERT INTO reservations (flight_id, name, email, phone) VALUES ('$flight_id', '$name', '$email', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "Reservation successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
