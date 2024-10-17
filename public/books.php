<?php
/*
    Project: 100 Books of All Time
    File: books.php
    Author: Rowan Rishe
    Contributors:
        Xavier Lora
        Kyle Matthews
        Matthew Griffith
        Vincent Cifone
    Date: 10/17/2024

    Purpose: Acts as main file for running and rendering 100 Book of All Time page
 */


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
