const autoBind = require("auto-bind");
const { UserModel } = require("../user/user.model");
const { randomInt } = require("crypto");
const { AuthMessage } = require("./Auth.message");
const createHttpError = require("http-errors");

class AuthService {
  constructor() {
    autoBind(this);
  }
  async sendOTP(mobile) {
    const user = await UserModel.findOne({ mobile });
    const now = new Date.getTime();
    const otp = {
      code: randomInt(10000, 99999),
      expireIn: now + 1000 * 60 * 2,
    };

    if (!user) {
      const newUser = await UserModel.create({
        mobile,
        otp,
      });
      return newUser;
    } else {
      if (user.otp && user.otp.expireIn > now) {
        throw new createHttpError.BadRequest(AuthMessage.OTPExist);
      }
      user.otp = otp;
      await user.save();
      return user();
    }
  }
  async checkOTP() {}
}

module.exports = new AuthService();
