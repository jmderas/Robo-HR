const Person = require("../models/Person");
const tesseract = require("node-tesseract-ocr");

module.exports = {
  new: function(req, res) {
    //take file from request and run tesseract.
    //let samplefile = req.files.evaluation;
    //console.log("sample file " + samplefile);
    // samplefile.mv(__dirname + '/images/test.jpg', function(err){
    //   tesseract.recognize(__dirname + '/images/test.jpg').then(function(result) {
    //     console.log(result);
    //   });
    // });

return;
    //create person object with name, jobTitle, keywords taken from tesseract
  },
  show: function(req, res) {},
  edit: function(req, res) {},
  delete: function(req, res) {}
};
