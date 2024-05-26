<?php
// Define a sample string
$string = "hello world! this is a php string manipulation example.";

// A) Convert the string to all uppercase letters
$uppercaseString = strtoupper($string);

// B) Convert the string to all lowercase letters
$lowercaseString = strtolower($string);

// C) Make the string's first character uppercase
$ucfirstString = ucfirst($string);

// D) Make the first character of all the words uppercase
$ucwordsString = ucwords($string);

// Display the results
echo "Original String: " . $string . "<br>";
echo "A) Uppercase: " . $uppercaseString . "<br>";
echo "B) Lowercase: " . $lowercaseString . "<br>";
echo "C) First character uppercase: " . $ucfirstString . "<br>";
echo "D) First character of all words uppercase: " . $ucwordsString . "<br>";
?>
