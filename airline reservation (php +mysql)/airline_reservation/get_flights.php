<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "airline_reservation";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, flight_number, departure, destination FROM flights";
$result = $conn->query($sql);

$flights = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $flights[] = $row;
    }
}

echo json_encode($flights);

$conn->close();
?>
