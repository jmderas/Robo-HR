const { Position } = require("../models/Position");

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
  show: function(req, res) {},
  edit: function(req, res) {},
  update: function(req, res) {},
  delete: function(req, res) {},
  department: function(req, res) {
    console.log(req.query);
    Position.find({
      department: req.query.department
    }).then(positions => {
      console.log(positions);
      res.render("position/department", { positions });
    });
  }
};
