// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Shoe = require("../models/shoe.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific shoe (or all shoes) then provides JSON
  app.get("/api/:shoes?", function(req, res) {
    if (req.params.shoes) {
      // Display the JSON for ONLY that shoe.
      // (Note how we're using the ORM here to run our searches)
      Shoe.findOne({
        where: {
          routeName: req.params.shoes
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Shoe.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new shoe...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var shoe = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from shoe.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = shoe.name.replace(/\s+/g, "").toLowerCase();

    // Then add the shoe to the database using sequelize
    Shoe.create({
      routeName: routeName,
      brand: shoe.brand,
      name: shoe.name,
      size: shoe.size,
      color: shoe.color,
      condition: shoe.condition
    });

    res.status(204).end();
  });
};

