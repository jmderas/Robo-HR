const Position = require("../models/Position");

module.exports = {
  index: function(req, res) {
    Position.find({}).then(positions => {
      res.render("index", { positions });
    });
  },
  new: function(req, res) {},
  create: function(req, res) {},
  show: function(req, res) {},
  edit: function(req, res) {},
  update: function(req, res) {},
  delete: function(req, res) {}
};
