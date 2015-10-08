/*globals exports*/

var fizzbuzz = {
    getResult: function(number) {
        if (number === 3) {
            return 'Fizz';
        }
                if (number === 5) {
            return 'Buzz';
        }
        return number;
    }
};

exports.fizzbuzz = fizzbuzz;