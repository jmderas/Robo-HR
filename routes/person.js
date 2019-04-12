const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

//router.post("/upload", personController.new);
router.get("/", personController.show);
router.put("/:id", personController.edit);
router.delete("./:id", personController.delete);

module.exports = router;
