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
    return this[0].toUpperCase() + this.substring(1);
};

module.exports = String;
