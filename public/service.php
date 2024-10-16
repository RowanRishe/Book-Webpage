<?php
header('Content-Type: application/json');

function getBooksData() {
    $json = file_get_contents(__DIR__ . '/../data/data.json');
    return json_decode($json);
}

echo json_encode(getBooksData());
