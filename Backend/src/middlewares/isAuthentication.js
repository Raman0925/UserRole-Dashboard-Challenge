const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const { ApiResponse } = require("../utils/apiResponse.js");

const isAuthenicated = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, token, "User is not logged in"));
    }

    const { userId } = jwt.verify(token, "UserRole");

    const user = await User.findById(userId);
    if (!user) {
      return res.json(new ApiResponse(404, null, "User not found"));
    }
    req.user = user;
    next();
  } catch (err) {
    res.json(new ApiResponse(401, err.message, "Error while Authenication"));
  }
};

module.exports = {
  isAuthenicated,
};
