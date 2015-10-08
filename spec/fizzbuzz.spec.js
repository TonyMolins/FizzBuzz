/*globals require, describe, it, expect*/

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;
 
describe('fizz buzz', function (){
    
    it('should return 0 given 0', function () {
        expect(fizzbuzz.getResult(0)).toEqual(0);
    });
    
    it('should return 1 given 1', function () {
        expect(fizzbuzz.getResult(1)).toEqual(0);
    });
    
    it('should return 2 given 2', function () {
        expect(fizzbuzz.getResult(2)).toEqual(0);
    });
        
    it('should return fizz given 3', function () {
        expect(fizzbuzz.getResult(3)).toEqual(0);
    });

});