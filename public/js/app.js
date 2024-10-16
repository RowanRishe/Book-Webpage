$(document).ready(function() {
    console.log("app.js is loaded");
    fetchData();
});

function fetchData() {
    $.ajax({
        url: "service.php",
        method: "GET",
        success: function(data) {
            console.log("Fetched data:", data);
            renderBooks(data);
        },
        error: function(error) {
            console.error("Error fetching data:", error);
        }
    });
}

function renderBooks(booksData) {
    const template = $("#book-template").html();
    const renderedHTML = Mustache.render(template, { books: booksData });
    $("#book-container").html(renderedHTML);

    // Delay book container by 2 seconds
    setTimeout(function() {
        $("#loading").hide();
        $("#book-container").show();
    }, 2000);
}
