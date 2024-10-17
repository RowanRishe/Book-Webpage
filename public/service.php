<?php
/*
    Project: 100 Books of All Time
    File: service.php
    Author: Rowan Rishe
    Contributors:
        Xavier Lora
        Kyle Matthews
        Matthew Griffith
        Vincent Cifone
    Date: 10/17/2024

    Purpose: Contains methods for capturing book data from .json file
 */

header('Content-Type: application/json');

function getBooksData() {
    $json = file_get_contents(__DIR__ . '/../data/data.json');
    return json_decode($json);
}

echo json_encode(getBooksData());
?>
