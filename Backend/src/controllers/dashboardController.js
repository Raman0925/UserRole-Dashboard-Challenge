const { ApiResponse } = require("../utils/apiResponse");
const Task = require("../models/Task");
const User = require("../models/User");
const mongoose = require("mongoose");

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
    let {_id} = req.user;
    
    console.log(_id)
    let tasks = await Task.find({});
    let  newTasks =tasks.filter((task)=>task.assignedTo.toString() === _id.toString())
     console.log(newTasks);
    if (newTasks.length===0) {
      newTasks = [];
    }
    
    return res
      .status(200)
      .json(
        new ApiResponse(200,newTasks, "Successfully fetched"),
      );
  } catch (error) {
    res.status(404).json(new ApiResponse(404, error, error.message));
  }
};

module.exports = { adminDashboard, userDashboard };
