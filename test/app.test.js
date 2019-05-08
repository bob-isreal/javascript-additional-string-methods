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
    test('Should return all upper case characters', function() {
        expect('Adedayo'.toUpper()).toBe('ADEDAYO');
    });
    test('Should return all upper case characters', function() {
        expect('ADEDAYO'.toUpper()).toBe('ADEDAYO');
    });
});

describe('Test For The toLower Method', function() {
    test('Should return all lower case characters', function() {
        expect('ADEDAYO'.toLower()).toBe('adedayo');
    });
    test('Should return all lower case characters', function() {
        expect('adedeayo'.toLower()).toBe('adedayo');
    });
});

describe('Test For The ucFirst Method', function() {
    test('Should return title case characters', function() {
        expect('ADEDAYO'.ucFirst()).toBe('Adedayo');
    });
});

describe('Test For The isQuestion Method', function() {
    test('Should return true', function() {
        expect('Are you a boy?'.isQuestion()).toBe(true);
    });
    test('Should return false,', function() {
        expect('I am a boy.'.isQuestion()).toBe(false);
    });
});

describe('Test For The words Method', function() {
    test('Should return array of words', function() {
        expect('This is the day'.words()).toContain([
            'T',
            'h',
            'i',
            's',
            'i',
            's',
            't',
            'h',
            'e',
            'd',
            'a',
            'y'
        ]);
    });
    test('Should return array of words', function() {
        expect('Arikeade'.words()).toContain([
            'A',
            'r',
            'i',
            'k',
            'e',
            'a',
            'd',
            'e'
        ]);
    });
});

describe('Test For The wordCount Method', function() {
    test('Should return number of words', function() {
        expect('This is the day'.wordCount()).toBe(12);
    });
    test('Should return number of words', function() {
        expect('Arikeade'.wordCount()).toBe(8);
    });
});

describe('Test For The toCurrency Method', function() {
    test('Should return currency representation of words', function() {
        expect('samfeolu'.toCurrency()).toBe('sa,mfe,olu');
    });
    test('Should return currency representation of words', function() {
        expect('120000.90'.toCurrency()).toBe('120,000.90');
    });
    test('Should return currency representation of words', function() {
        expect('12879674899.97'.toCurrency()).toBe('12,879,674,899.97');
    });
});

describe('Test For The fromCurrency Method', function() {
    test('Should return words representation of currency', function() {
        expect('sa,mfe,olu'.fromCurrency()).toBe('samfeolu');
    });
    test('Should return words representation of currency', function() {
        expect('120,000.90'.fromCurrency()).toBe('120000.90');
    });
    test('Should return words representation of currency', function() {
        expect('12,879,674,899.97'.fromCurrency()).toBe('12879674899.97');
    });
});

describe('Test For The invertCase Method', function() {
    test('Should return words in Inverted case form', function() {
        expect('InveRtCasE'.invertCase()).toBe('iNVErTcASe');
    });
    test('Should return words in Inverted case form', function() {
        expect('120,000.90'.invertCase()).toBe('120,000.90');
    });
});

describe('Test For The alternatingCase Method', function() {
    test('Should return words in alternating Case form', function() {
        expect('InveRtCasE'.alternatingCase()).toBe('iNvErTcAsE');
    });
    test('Should return words in alternating Case form', function() {
        expect('Adedunye'.alternatingCase()).toBe('aDeDuNyE');
    });
});

describe('Test For The numberWords Method', function() {
    test('Should return amount of numbers in a word', function() {
        expect('numberwords'.numberWords()).toBe(0);
    });
    test('Should return amount of numbers in a word', function() {
        expect('There Are 7 boys in the 3 classes'.numberWords()).toBe(2);
    });
});

describe('Test For isDigit Method', function() {
    test('Should return true', function() {
        expect('1'.isDigit()).toBe(true);
    });
    test('Should return false', function() {
        expect('45'.isDigit()).toBe(false);
    });
});
