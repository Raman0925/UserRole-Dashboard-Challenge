const chai = require('chai');
const {validateSignUpData} = require('../../src/utils/validation.js')
let req = {
    body: {
        fullName: "Raman", 
        emailId: "raman.k6306@gmail.com", 
        password: "Raman@0925"
    }
};

const testingValidator = ()=>{
    it('should pass validation with valid data', () => {
        // No errors should be thrown if the data is valid
        try {
            validateSignUpData(req);
        } catch (error) {
            console.log(error)
            chai.expect.fail('Validation failed with valid data');
        }
    })
    it('should throw an error if password is missing', () => {
        req.body.password = '';
        try {
            validateSignUpData(req);
        } catch (error) {
            chai.expect(error.message).to.equal('Please enter a strong Password!');
        }
    });
    it('should throw an error if email is missing', () => {
        req.body.email = '';
        req.body.password = 'Raman@0925';
        try {
            validateSignUpData(req);
        } catch (error) {
            chai.expect(error.message).to.equal('Email is not valid!');
        }
    });


}

describe('Testing the validator function',testingValidator)