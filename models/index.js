const mongoose = require("../db/connection");

module.exports = {
  Position: mongoose.model("Position", require("./Position")),
  Person: mongoose.model("Person", require("./Person"))
};
