// Code here handles queries for specific shoes in the database
// In this case, the user submits a shoe's name... we then pass that shoe's name as a
// URL parameter. Our server then performs the search to grab that shoe from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function () {
  // save the shoe they typed into the shoe-search input
  var searchedShoe = $("#shoe-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedShoe
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedShoe = searchedShoe.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's shoe in the url
  $.get("/api/" + searchedShoe, function (data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> We are sorry. Your shoe was not found. </h2>");
    }
    else {
      // otherwise
      // append the shoe brand
      $("#well-section").append("<h2>Brand: " + data.brand + "</h2>");
      // the name
      $("#well-section").append("<h3>Name: " + data.name + "</h3>");
      // the size
      $("#well-section").append("<h3>Size: " + data.size + "</h3>");
      // and the color
      $("#well-section").append("<h3>Condition: " + data.color + "</h3>");
      // and the condition
      $("#well-section").append("<h3>Condition: " + data.condition + "</h3>");
      $("#well-section").append("<hr>");
    }
  });
});
