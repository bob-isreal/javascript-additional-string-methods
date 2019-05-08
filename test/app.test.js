require('../main/app');
describe('Test For The hasVowel Method', function() {
    test('Should return True', function() {
        expect('Adedayo'.hasVowels()).toBe(true);
    });
    test('Should return False', function() {
        expect('rythm'.hasVowels()).toBe(false);
    });
});

describe('Test For The toUpper Method', function() {
    test('Should return uppercase characters', function() {
        expect('Adedayo'.toUpper()).toBe('ADEDAYO');
    });
});

describe('Test For The toLower Method', function() {
    test('Should return uppercase characters', function() {
        expect('ADEDAYO'.toLower()).toBe('adedayo');
    });
});
