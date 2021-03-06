/*globals require, describe, it, expect*/

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;

describe('fizz buzz', function () {

    it('should return 0 given 0', function () {
        expect(fizzbuzz.getResult(0)).toEqual(0);
    });

    it('should return 1 given 1', function () {
        expect(fizzbuzz.getResult(1)).toEqual(1);
    });

    it('should return 2 given 2', function () {
        expect(fizzbuzz.getResult(2)).toEqual(2);
    });

    it('should return fizz given 3', function () {
        expect(fizzbuzz.getResult(3)).toEqual('Fizz');
    });

    it('should return buzz given 5', function () {
        expect(fizzbuzz.getResult(5)).toEqual('Buzz');
    });

    it('should return fizz given 6', function () {
        expect(fizzbuzz.getResult(6)).toEqual('Fizz');
    });

    it('should return fizz given 9', function () {
        expect(fizzbuzz.getResult(9)).toEqual('Fizz');
    });

    it('should return buzz given 10', function () {
        expect(fizzbuzz.getResult(10)).toEqual('Buzz');
    });

    it('should return fizz given 12', function () {
        expect(fizzbuzz.getResult(12)).toEqual('Fizz');
    });

    it('should return fizzbuzz given 15', function () {
        expect(fizzbuzz.getResult(15)).toEqual('FizzBuzz');
    });


});