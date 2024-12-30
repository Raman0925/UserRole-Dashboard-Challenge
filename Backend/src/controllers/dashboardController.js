const { ApiResponse } = require("../utils/apiResponse");
const Task = require('../models/Task')
const User = require("../models/User"); 
const adminDashboard = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(new ApiResponse(200, tasks, "Successfully fetched"));
  } catch (error) {
    res.status(404).json(new ApiResponse(404, error, error.message));
  }
};
const userDashboard = async (req, res) => {
  try {
    const id = req.user._id;
    
    let tasks = await Task.find({ assignedTo: id });
    if (!tasks) {
      tasks = [];
    }
    res.status(200).json(new ApiResponse(200, tasks, "Successfully fetched"));
  } catch (error) {
    res.status(404).json(new ApiResponse(404, error, error.message));
  }
};

module.exports = { adminDashboard, userDashboard };
