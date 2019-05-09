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
    let solution = this[0].toUpper();
    for (let index = 1; index < this.length; index++) {
        solution += this[index].toLower();
    }
    return solution;
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
    console.log(digitPattern.test(this));

    return digitPattern.test(this)
        ? Number(this)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        : 'Invalid Entry';
};
String.prototype.fromCurrency = function() {
    let digit = /(\d+,)+/;
    console.log(digit.test(this));
    return digit.test(this) ? this.replace(/,(?=\d)/g, '') : 'Invalid Entry';
};
module.exports = String;
