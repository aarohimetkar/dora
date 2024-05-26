<?php
session_start();

// Check if the user is logged in
if(isset($_SESSION['user_id'])) {
    // Decrease the active sessions count
    $_SESSION['active_sessions'] -= 1;

    // Remove user session
    unset($_SESSION['user_id']);

    echo "Logout successful.";
} else {
    echo "You are not logged in.";
}

// Redirect the user back to the home page or login page
header("Location: index.php");
exit;
?>
