const User = require("../../src/models/User");
const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

describe("Creating document in MongoDB", () => {
  it("Creates a new user successfully", async () => {
    try {
      const user = new User({
        fullName: "Raman",
        emailId: "raman.k6@gmail.com",
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

describe("Stubbing the tests for creating the documents in mongodb", () => {
  let saveStub;
  const user = new User({
    fullName: "Raman",
    emailId: "raman.k12306@gmail.com",
    password: "Raman0925@",
  });
  beforeEach(() => {
    saveStub = sinon.stub(User.prototype, "save");
  });
  afterEach(()=>{
    saveStub.restore();
  })
  it('should save the user',async()=>{
    const mockUser = {
        fullName: "Raman",
        emailId: "raman.k12306@gmail.com",
        password: "Raman0925@",
      }
      saveStub.resolves(mockUser)
      const result = await user.save();
      expect(result).to.deep.equal(mockUser)
  })
});
