<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "airline_reservation";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT r.id, r.name, r.email, r.phone, f.flight_number, f.departure, f.destination, f.date, f.time 
        FROM reservations r 
        JOIN flights f ON r.flight_id = f.id";
$result = $conn->query($sql);

$reservations = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $reservations[] = $row;
    }
}

echo json_encode($reservations);

$conn->close();
?>
