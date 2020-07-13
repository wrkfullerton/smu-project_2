// Code here handles what how the page displays all of the shoes
// It pings the server. The server then pings the database and displays all of the shoes.

// make a get request to our api to grab every shoe
$.get("/api", function(data) {

    // for each shoe that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // create a parent div for the oncoming elements
      var wellSection = $("<div>");
      // add a class to this div: 'well'
      wellSection.addClass("well");
      // add an id to the well to mark which well it is
      wellSection.attr("id", "shoe-well-" + i);
      // append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now add all of our shoe data to the well we just placed on the page
  
      // make the brand an h2,
      $("#shoe-well-" + i).append("<h2>Brand: " + data[i].brand + "</h2>");
      // the name an h3,
      $("#shoe-well-" + i).append("<h3>Name: " + data[i].name + "</h3>");
      // the size an h3,
      $("#shoe-well-" + i).append("<h4>Size: " + data[i].size + "</h4>");
      // and the color an h3.
      $("#shoe-well-" + i).append("<h4>Color: " + data[i].color + "</h4>");
      // and the condition an h3.
      $("#shoe-well-" + i).append("<h4>Condition: " + data[i].condition + "</h4>");
      $("#shoe-well-" + i).append("<hr>");
      
    }
  });