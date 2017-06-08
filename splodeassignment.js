function Stringsplosion(str) {
    this.str = str;
}

Stringsplosion.prototype.manipulate = function() {
    var a = '';
    var b = '';
    

    for (var i = 0; i < this.str.length; i++) {
        b = b + this.str[i];
        a = a + b;
    }
    return a;
};
