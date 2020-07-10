// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "shoe" model that matches up with DB
var Shoe = sequelize.define("shoe", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the brand of the shoe (a string)
  brand: Sequelize.STRING,
  // the name of the shoe (a string)
  name: Sequelize.STRING,
  // the shoe's size (an int)
  size: Sequelize.INTEGER,
  // the shoe's age (a string)
  color: Sequelize.STRING,
  // and the shoe's condition (a string)
  condition: Sequelize.STRING
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Shoe.sync();

// Makes the shoe Model available for other files (will also create a table)
module.exports = Shoe;

