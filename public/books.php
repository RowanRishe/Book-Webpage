<?php
require __DIR__ . '/../vendor/autoload.php';

// Load the Mustache engine
$m = new Mustache_Engine([
    'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . '/templates')
]);

// Load the book data
$bookData = json_decode(file_get_contents(__DIR__ . '/../data/data.json'), true);

// Pass data to the template
echo $m->render('page', ['books' => $bookData]);
?>
