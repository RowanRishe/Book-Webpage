/*
    Project: 100 Books of All Time
    File: app.js
    Author: Rowan Rishe
    Contributors:
        Xavier Lora
        Kyle Matthews
        Matthew Griffith
        Vincent Cifone
    Date: 10/17/2024

    Purpose: Implementations for dynamic loading of books to the page
        fetchData(): queries the service.php to capture (book)data for template rendering
        renderBooks(): renders the templates for books with the passed data
 */

$(document).ready(function() {
    console.log("app.js is loaded");

    $.get("templates/books.mustache", function(template) {

        fetchData(template);
    });
});

function fetchData(template) {
    $.ajax({
        url: "service.php",
        method: "GET",
        success: function(data) {
            console.log("Fetched data:", data);
            renderBooks(data, template);
        },
        error: function(error) {
            console.error("Error fetching data:", error);
        }
    });
}

function renderBooks(booksData, template) {
    const renderedHTML = Mustache.render(template, { books: booksData });
    $("#book-container").html(renderedHTML);

    // Delay showing the book container for 2 seconds
    setTimeout(function() {
        $("#loading").hide();
        $("#book-container").show();
    }, 2000);
}
