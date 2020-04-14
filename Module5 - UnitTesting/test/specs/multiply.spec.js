const Calculator = require('../../app/Calculator');
const {expect} = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);


describe('multiply - positive scenarios for multiplication', function(){
    let validator;
    beforeEach(function(){
        validator = new Calculator();
    });
    afterEach(function(){
        validator = null;
    });
    it(`should return multiplication of two numbers`, function(){
        expect(validator.multiply(7,2)).to.be.equal(14);
    })
    it(`should return multiplication of five numbers`, function(){
        expect(validator.multiply(3,5,1,1,6)).to.be.equal(90);
    });
 
    it(`should return multiplication of zeros`, function(){
        expect(validator.multiply(0,0,0)).to.be.equal(0);
    })
});;

describe('multiply - negative scenarios for multiplication', function(){
    let validator, spy;
    beforeEach(function(){
        validator = new Calculator();
        spy = chai.spy.on(validator, 'add');
    });
    afterEach(function(){
        validator = null;
    });
    it(`should return Error if provided with 'undefined' value`, function(){
        let callWithError = () => validator.multiply(undefined);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });

    it(`should return Error if provided with 'null' value`, function(){
        let callWithError = () => validator.multiply(null);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });
 
    it(`should return Error if provided with boolean value`, function(){
        let callWithError = () => validator.multiply(false);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });
});