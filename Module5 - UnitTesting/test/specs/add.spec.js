const Calculator = require('../../app/Calculator');
const {expect} = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);


describe('add - positive scenarios for summarize', function(){
    let validator;
    beforeEach(function(){
        validator = new Calculator();
    });
    afterEach(function(){
        validator = null;
    });
    it(`should return sum of two numbers`, function(){
        expect(validator.add(7,10)).to.be.equal(17);
    })
    it(`should return sum of five numbers`, function(){
        expect(validator.add(3,5,1,1,6)).to.be.equal(16);
    });
 
    it(`should return sum of zeros`, function(){
        expect(validator.add(0,0,0)).to.be.equal(0);
    })
});;

describe('add - negative scenarios', function(){
    let validator, spy;
    beforeEach(function(){
        validator = new Calculator();
        spy = chai.spy.on(validator, 'add');
    });
    afterEach(function(){
        validator = null;
    });
    it(`should return Error if provided with 'undefined' value`, function(){
        let callWithError = () => validator.add(undefined);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });

    it(`should return Error if provided with 'null' value`, function(){
        let callWithError = () => validator.add(null);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });
 
    it(`should return Error if provided with boolean value`, function(){
        let callWithError = () => validator.add(false);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`Some of entered values are not of type 'Number'`);
    });
});