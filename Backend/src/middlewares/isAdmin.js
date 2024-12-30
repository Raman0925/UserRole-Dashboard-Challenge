const User = require("../models/User.js");
const { ApiResponse } = require("../utils/apiResponse");

const isAdmin = async (req, res, next) => {
  const user = req.user;
  if (user.userType === "admin") {
    return next();
  }
  return res.json(new ApiResponse(401, user, "Access denied."));
};
module.exports = {
  isAdmin,
};
