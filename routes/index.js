const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});
router.use("/position", require("./position"));
router.use("/person", require("./person"));

module.exports = router;
