function add(a, b) {
    return a + b;
}
var num1 = 12;
var num2 = 24;
var result = add(num1, num2);
console.log(result);
function Str(a, b, print) {
    if (print) {
        return a + b + print;
    }
    else {
        return a + b + "hello";
    }
}
var srt1 = "Amar ";
var str2 = 'kumar ';
var result1 = Str(srt1, str2, false);
console.log(result1);
