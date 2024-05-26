<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputString = $_POST['inputString'];
    $transformation = $_POST['transformation'];

    function transformString($input, $transformation)
    {
        switch ($transformation) {
            case 'UC':
                return strtoupper($input);
            case 'LC':
                return strtolower($input);
            case 'FCUC':
                return ucfirst(strtolower($input));
            default:
                return $input;
        }
    }

    $transformedString = transformString($inputString, $transformation);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transformed String</title>
</head>
<body>
    <h2>Transformed String</h2>

    <?php if (isset($transformedString)): ?>
        <p>Original String: <?php echo $inputString; ?></p>
        <p>Transformed String (<?php echo $transformation; ?>): <?php echo $transformedString; ?></p>
    <?php endif; ?>

    <p><a href="index.php">Back to Form</a></p>
</body>
</html>
