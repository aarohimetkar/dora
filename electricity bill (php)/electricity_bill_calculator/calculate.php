<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $units = intval($_POST["units"]);
    $bill = 0;

    if ($units <= 50) {
        $bill = $units * 3.50;
    } else if ($units <= 150) {
        $bill = (50 * 3.50) + (($units - 50) * 4.00);
    } else if ($units <= 250) {
        $bill = (50 * 3.50) + (100 * 4.00) + (($units - 150) * 5.20);
    } else {
        $bill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + (($units - 250) * 6.50);
    }

    echo "The total electricity bill is: Rs. " . number_format($bill, 2);
}
?>
