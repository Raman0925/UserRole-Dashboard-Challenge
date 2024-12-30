const User = require("../models/User");
const { validateSignUpData } = require("../utils/validation.js");
const { ApiResponse } = require("../utils/apiResponse");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    validateSignUpData(req);

    const { fullName, emailId, password } = req.body;
    const newUser = new User({
      fullName,
      emailId,
      password,
    });

    const savedUser = await newUser.save();
    const token = await savedUser.getJWT();
    const tokenBearer = "Bearer " + token;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
      httpOnly: true,
      secure: false,
      sameSite: "None"
    });
    res.json(new ApiResponse(201, savedUser, "User Created Successfully"));
  } catch (error) {
    res.status(400).json(new ApiResponse(400, error, error.message));
  }
};

const login = async (req, res) => {
  try {
    const { emailId, password, userType } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (user.userType != userType) {
      throw new Error("Invalid credentials");
    }
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = await user.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
        secure: false,
        sameSite: "None",
      });
      user.token = token;

      res
        .status(201)
        .json(new ApiResponse(200, { user, token }, "Login Successfully"));
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.json(new ApiResponse(404, err, err.message));
  }
};

module.exports = {
  login,
  register,
};
