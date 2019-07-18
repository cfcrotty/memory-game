const router = require("express").Router();
const controller = require("../../controllers/controller");

// Book routes
router.route("/characters")
  .get(controller.findAll);

router.route("/save")
  .get(controller.create);

module.exports = router;
