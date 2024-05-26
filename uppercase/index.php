<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Transformation</title>
</head>
<body>
    <h2>String Transformation</h2>

    <form method="post" action="transform.php">
        <label for="inputString">Enter a String:</label>
        <input type="text" name="inputString" required>
        <br>

        <label for="transformation">Select Transformation:</label>
        <select name="transformation" required>
            <option value="UC">Uppercase (UC)</option>
            <option value="LC">Lowercase (LC)</option>
            <option value="FCUC">First Character Uppercase (FCUC)</option>
        </select>
        <br>

        <button type="submit">Transform</button>
    </form>
</body>
</html>
