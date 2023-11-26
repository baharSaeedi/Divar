const { Router } = require("express");
const { AuthController } = require("./auth.controller");

const router = Router();

router.post("/sendOTP", AuthController.sendOTP);
router.post("/checkOTP", AuthController.checkOTP);

module.exports = {
  authRoutes: router,
};
