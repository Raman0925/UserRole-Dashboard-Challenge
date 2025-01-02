process.env.NODE_ENV ='test';
const chai = require("chai");
const chaiHTTp = require('chai-http');
chai.use(chaiHTTp);
const expect = chai.expect;
const server = require('../../src/index')
const sinon = require("sinon");
const { sign } = require("jsonwebtoken");

describe("verifies the signup flow woith actual calls to mongodb", () => {
  let signUpbody = {
    fullName: "testName",
    emailId: "test123@gmail.com",
    password: "Test@0923",
  };
  it("successfull signUp ", (done) => {
    chai.request(server).post('/register').send(signUpbody).end((err,res)=>{
        expect(res.status).equal(404);
    }).timeout(100000)
        
  });
  it("successfull signUp failing email vaLIDATION", (done) => {});
  it("successfull signUp because of password validation", (done) => {});
  it("successfull signUp because of full Name", (done) => {});

});
