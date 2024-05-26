<?php
session_start();

// Set the maximum number of concurrent sessions
$maxConcurrentSessions = 3;

// Check if the user is already logged in
if(isset($_SESSION['user_id'])) {
    echo "You are already logged in. Logout to create a new session.";
    exit;
}

// Check the number of active sessions
if (isset($_SESSION['active_sessions'])) {
    $_SESSION['active_sessions'] += 1;

    // Check if the user has exceeded the maximum allowed sessions
    if ($_SESSION['active_sessions'] > $maxConcurrentSessions) {
        echo "Maximum concurrent sessions reached. Please logout from one of your sessions.";
        exit;
    }
} else {
    // Initialize the active sessions count for the user
    $_SESSION['active_sessions'] = 1;
}

// Simulate user login (you may replace this with your authentication logic)
$_SESSION['user_id'] = uniqid();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concurrent Sessions Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
    </style>
</head>
<body>
    <h1>Concurrent Sessions Example</h1>
    
    <?php
    echo "Login successful. Active Sessions: {$_SESSION['active_sessions']}";
    ?>

    <!-- Add your content here -->

    <p><a href="logout.php">Logout</a></p>

</body>
</html>
