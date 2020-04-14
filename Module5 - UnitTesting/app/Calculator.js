// A simple class containing methods for calculating numbers
// @class Calculator

class Calculator {
    constructor() {

    };
/**
 *
 *
 * @param {numbers} Array of numbers which should be summarized
 * @returns {sum} Number - sum of numbers in array 'numbers'
 * @memberof Calculator
 */
add(...numbers) {
        if (Array.isArray(numbers) &&
            numbers.every((item) => typeof item === 'number')) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i]
            }
            return sum
        } else {
            throw new Error("Some of entered values are not of type 'Number'");
        }
    }

/**
 *
 *
* @param {numbers} Array of numbers which should be myltiplied
 * @returns {multiplication} Number - multiplication of numbers in array 'numbers'
 * @memberof Calculator
 */
multiply(...numbers) {
        if (Array.isArray(numbers) &&
            numbers.every((item) => typeof item === 'number')) {
            let multiplication = 1;
            for (let i = 0; i < numbers.length; i++) {
                multiplication = multiplication * numbers[i]
            }
            return multiplication
        } else {
            throw new Error("Some of entered values are not of type 'Number'");
        };
    }
};


module.exports = Calculator;