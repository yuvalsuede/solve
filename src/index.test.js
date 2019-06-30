var expect = require('chai').expect;
var starwars = require('./index');

describe('starwars-names', function() {
    it('should work!', function() {
        expect(true).to.be.true;
    })
});

describe('all', function() {
    it('should be an array of strings', function() {
        expect(starwars.all).to.satisfy(isArrayOfStrings);
    });

    function isArrayOfStrings(arr) {
        return arr.every(item => {
            return typeof item === 'string';
        });
    }
});

describe('random', function () {
    it('should return random item from names', function () {
        var randomItem = starwars.random();
        !expect(starwars.all).to.include(randomItem);
    });
});

