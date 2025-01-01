const { connect } = require("../../src/config/dbconfig");
const { expect } = require("chai");
const mongoose = require("mongoose");


before(async (done)=>{
    const connect =  await mongoose.connect("mongodb://localhost:27017/TestDB");
     console.log("connected to mongodb");
     done();
    
}

)
beforeEach((done)=>{
    console.log('Running before each unit test')
    done();
})