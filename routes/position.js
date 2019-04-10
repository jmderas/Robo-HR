const express = require("express");
const router = express.Router();
const positionController = require("../controllers/position");

router.get("/", positionController.index);
router.get("/new", positionController.new);
router.post("/", positionController.create);
router.get("/:id", positionController.show);
router.get("/:id/edit", positionController.edit);
router.put("/:id", positionController.update);
router.delete("/:id", positionController.delete);

module.exports = router;
