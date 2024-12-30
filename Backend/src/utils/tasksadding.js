const userId = "67724605c3e8cd8e7076dfc8"; // The User ID to assign tasks to
const Task = require('../models/Task')
const mongoose = require('mongoose');
async function createTasks() {
   
  try {
    const task1 = await  new Task({
      title: "Task 1",
      description: "Description for task 1",
      status: "pending",
      assignedTo: userId
    });

    const task2 = await new Task({
      title: "Task 2",
      description: "Description for task 2",
      status: "completed",
      assignedTo: userId
    });

    const task3 = await new Task({
      title: "Task 3",
      description: "Description for task 3",
      status: "pending",
      assignedTo: userId
    });

    await task1.save();
    await task2.save();
    await task3.save();

    console.log("Tasks created successfully!");

  } catch (error) {
    console.error("Error creating tasks:", error);
  }
}

createTasks();