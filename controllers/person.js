const Person = require("../models/Person");
const tesseract = require("tesseract.js");

module.exports = {
  new: function(req, res) {
    //take file from request and run tesseract.

    tesseract.recognize(req.files.evaluation).then(function(result) {
      console.log(result);
    });

    //create person object with name, jobTitle, keywords taken from tesseract
  },
  show: function(req, res) {},
  edit: function(req, res) {},
  delete: function(req, res) {}
};
