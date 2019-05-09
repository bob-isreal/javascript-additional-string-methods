String.prototype.hasVowels = function() {
    return /[aeiou]/.test(this);
};
String.prototype.toUpper = function() {
    let converted = '';
    for (let index = 0; index < this.length; index++) {
        converted += String.fromCharCode(this.charCodeAt(index) & 223);
    }
    return converted;
};
String.prototype.toLower = function() {
    let converted = '';
    for (let index = 0; index < this.length; index++) {
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
    let pattern = /[a-zA-Z]/g;
    return this.match(pattern);
};
String.prototype.wordCount = function() {
    return this.words().length;
};
String.prototype.toCurrency = function() {
    let digitPattern = /^[0-9]+[.]?[0-9]{1,2}$/;
    return digitPattern.test(this)
        ? Number(this)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : 'Invalid Entry';
};
String.prototype.fromCurrency = function() {
    let digit = /(\d+,)+/;
    return digit.test(this) ? this.replace(/,(?=\d)/g, '') : 'Invalid Entry';
};
String.prototype.invertCase = function() {
    let invertedString = '';
    for (let index = 0; index < this.length; index++) {
        /[a-z]/.test(this[index])
            ? (invertedString += this[index].toUpper())
            : (invertedString += this[index].toLower());
    }
    return invertedString;
};
String.prototype.alternatingCase = function() {
    let alternatedCase = this[0].toLower() + this[1].toUpper();
    for (let index = 2; index < this.length; index++) {
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
