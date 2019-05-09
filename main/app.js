String.prototype.hasVowels = function() {
    return /[aeiou]/.test(this);
};
String.prototype.toUpper = function() {
    var converted = '';
    for (var index = 0; index < this.length; index++) {
        converted += String.fromCharCode(this.charCodeAt(index) & 223);
    }
    return converted;
};
String.prototype.toLower = function() {
    var converted = '';
    for (var index = 0; index < this.length; index++) {
        converted += String.fromCharCode(this.charCodeAt(index) | 32);
    }
    return converted;
};
String.prototype.ucFirst = function() {
    return /[a-zA-Z]/.exec(this)[0] + this.substring(1).toLower();
};

String.prototype.isQuestion = function() {
    return /\?$/.test(this);
};
String.prototype.words = function() {
    var pattern = /[a-zA-Z]/g;
    return this.match(pattern);
};
String.prototype.wordCount = function() {
    return this.words().length;
};
String.prototype.toCurrency = function() {
    var digitPattern = /^[0-9]+[.]?[0-9]{1,2}$/;
    return digitPattern.test(this)
        ? Number(this)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : 'Invalid Entry';
};
String.prototype.fromCurrency = function() {
    var digit = /(\d+,)+/;
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
};
String.prototype.numberWords = function() {
    return (pattern = /\d/g.test(this) ? this.match(/\d/g).length : 0);
};

String.prototype.isDigit = function() {
    return /^\d$/.test(this);
};
module.exports = String;
