var express = require('express');
var router = express.Router();
const testController = require("../controllers/test.controller")


router.route("/create")
  .get(testController.show)
  .post(testController.test)

  module.exports = router;