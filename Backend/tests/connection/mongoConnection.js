const { connect } = require("../../src/config/dbconfig");
const { expect } = require("chai");
const mongoose = require("mongoose");

before(async function() {
    try {
      await mongoose.connect('mongodb://localhost:27017/testdC');
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      throw err; // Fail the test if connection fails
    }
  });
  
beforeEach((done)=>{
    console.log('Running before each unit test')
    done();
})
after(async () => {
  await mongoose.disconnect(); // Ensures disconnect after tests
});