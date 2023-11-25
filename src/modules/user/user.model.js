const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
  code: { type: String, required: false, default: null },
  expireIn: { type: Number, required: false, default: 0 },
});
const UserSchema = new Schema(
  {
    fullName: { type: String, required: false },
    mobile: { type: String, unique: true, required: true },
    otp: { type: OTPSchema },
    verifiedMobile: { type: Number, default: false },
  },
  { timestamps: true }
);

const UserModel = model("UserModel", UserSchema);

module.exports = {
  UserModel,
};
