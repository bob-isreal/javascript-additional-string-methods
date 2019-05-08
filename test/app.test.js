const String = require('../main/app');

describe('Test For The hasVowel Method', function() {
    test('Should return True', function() {
        expect('Adedayo'.hasVowel()).toBe(true);
    });
    test('Should return False', function() {
        expect('rythm'.hasVowel()).toBe(false);
    });
});

describe('Test For The toUpper Method', function() {
    test('Should return uppercase characters', function() {
        expect('Adedayo'.hasVowel()).toBe('ADEDAYO');
    });
});

describe('Test For The toLower Method', function() {
    test('Should return uppercase characters', function() {
        expect('ADEDAYO'.hasVowel()).toBe('adedayo');
    });
});
