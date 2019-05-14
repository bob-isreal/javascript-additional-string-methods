String.prototype.hasVowels = function() {
    /*  This Matches Thats The Input contains any of the vowels which has been specified
 in the character set
 */
    return /[aeiou]/.test(this);
};
String.prototype.toUpper = function() {
    //  Create a variable to hold your final result
    var converted = '';

    /* Loop through and use the bitwise AND(&) operator to compare your current value against number 223. Number 223 because bitwise operator compare the binary value of any given parameter and 223 happens to be 11011111 so comparing it using a bitwise and operator with another binary value that has it's sixth digit to be 0 (The sixth digit of all lowercase letter is always 0) will result in that same answer but with the sixth digit set to 1 which happens to be the corresponding uppercase for that lowercase character*/
    for (var index = 0; index < this.length; index++) {
        let bitwiseAnd = this.charCodeAt(index) & 223;
        let currentValue = String.fromCharCode(bitwiseAnd);
        converted += currentValue;
    }
    return converted;
};

String.prototype.toLower = function() {
    //  Create a variable to hold your final result
    var converted = '';

    //  Implementation Details are similar to that of String.prototype.toUpper
    for (var index = 0; index < this.length; index++) {
        let bitwiseOr = this.charCodeAt(index) | 32;
        let currentValue = String.fromCharCode(bitwiseOr);
        converted += currentValue;
    }
    return converted;
};
String.prototype.ucFirst = function() {
    //  Filter first alphabet with regex since exec method only returns first match at first usage and convert to upper case
    let firstLetterToUpper = /[a-zA-Z]/.exec(this)[0].toUpper();
    //  Grab remaining letters and convert to lower case
    let remainderLetters = this.substring(1).toLower();
    return firstLetterToUpper + remainderLetters;
};

String.prototype.isQuestion = function() {
    //  Regex pattern makes sure that whatever this method is called upon ends with a question mark with the escaped question mark and the dollar flag
    return /\?$/.test(this);
};
String.prototype.words = function() {
    /* Regex pattern searches for occurences of alphabet ranging from a to z multiple occurence search is made possible with the g flag and case insensitivity is allowed with the i flag */
    var pattern = /[a-z]/gi;
    return this.match(pattern);
};
String.prototype.wordCount = function() {
    return this.words().length;
};
String.prototype.toCurrency = function() {
    //  Use patter below to make sure that input is a digit containing numbers followed by an optional dot which is followed by minimum of 1 number and max of 3
    var digitPattern = /^[0-9]+[.]?[0-9]{1,2}$/;
    if (digitPattern.test(this)) {
        //  Conver first to number so you could use decimal converting method on it
        let toNumber = Number(this);
        toNumber = toNumber.toFixed(2);
        //  Search for a digit that has three or multiple digit in front of it accompanied by a dot and replace that digit with itself and a comma
        return toNumber.replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        return 'Invalid Entry';
    }
};
String.prototype.fromCurrency = function() {
    //  Use Regular Expression to verify that the number passed is having digits accompanied by comma
    var digit = /(\d+,)+/;
    //  replace any comma that is accompanied by a digit with an empty string
    return digit.test(this) ? this.replace(/,(?=\d)/g, '') : 'Invalid Entry';
};
String.prototype.invertCase = function() {
    var invertedString = '';
    for (var index = 0; index < this.length; index++) {
        /[a-z]/.test(this[index])
            ? (invertedString += this[index].toUpper())
            : (invertedString += this[index].toLower());
    }
    return invertedString;
};
String.prototype.alternatingCase = function() {
    var alternatedCase = this[0].toLower() + this[1].toUpper();
    for (var index = 2; index < this.length; index++) {
        index % 2 == 0
            ? (alternatedCase += this[index].toLower())
            : (alternatedCase += this[index].toUpper());
    }
    return alternatedCase;
    //    This is a comment
};
String.prototype.numberWords = function() {
    return (pattern = /\d/g.test(this) ? this.match(/\d/g).length : 0);
};

String.prototype.isDigit = function() {
    return /^\d$/.test(this);
};
module.exports = String;
