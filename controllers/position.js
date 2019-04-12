const { Position, Person } = require("../models/index");

module.exports = {
  index: function(req, res) {
    // Position.find({}).then(positions => {
    //   res.render("position/index", { positions });
    // });
    Position.find({}).distinct("department", function(err, department) {
      res.render("position/index", { department });
    });
  },
  new: function(req, res) {
    res.render("position/new");
  },
  create: function(req, res) {
    Position.create({
      name: req.body.position,
      jobDescription: req.body.jobDescription,
      department: req.body.department,
      keywords: req.body.keywords.split(",")
    }).then(reports => {
      res.redirect("/position/");
    });
  },
  show: function(req, res) {
    Position.findOne({ _id: req.params.id }).exec(function(err, position) {
      Person.find({
        jobTitle: position.name
      }).then(function(persons) {
        console.log(persons);
        res.render("position/show", { position, persons });
      });
    });
  },
  edit: function(req, res) {},
  update: function(req, res) {},
  delete: function(req, res) {},
  department: function(req, res) {
    console.log(req.query);
    var query = Position.find({
      department: req.query.department
    }).select("name");
    query.exec(function(err, positions) {
      res.render("position/department", { positions });
    });
  }
};
