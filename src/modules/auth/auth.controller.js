const { AuthMessage } = require("./Auth.message");
const authService = require("./auth.service");
const autoBind = require("auto-bind");

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      const sentOTP = this.#service.sendOTP(mobile);
      return {
        message: AuthMessage.OTPSend,
      };
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const user = await authService.checkOTP(mobile, code);

      if (!user)
        throw new createHttpError.Unauthorized(AuthMessage.otpNotAccepted);
      return res
        .status(200)
        .json({ success: true, message: AuthMessage.logedIn });
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  AuthController: new AuthController(),
};
