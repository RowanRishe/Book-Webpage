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
