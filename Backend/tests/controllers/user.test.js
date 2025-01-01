const User = require("../../src/models/User");
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

describe("Creating document in MongoDB", () => {
  it("Creates a new user successfully", async () => {
    try {
      const user = new User({
        fullName: "Raman",
        emailId: "raman.k126306@gmail.com",
        password: "Raman0925@",
      });
      
      expect(user.isNew).to.equal(true);

      await user.save();

      const savedUser = await User.findById(user._id);
      expect(savedUser).to.not.be.null;
      
      
    } catch (error) {
      console.error("Test failed with error:", error);
      expect.fail(error.message);
    }
  }).timeout(10000);  
});