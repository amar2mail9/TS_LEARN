// union
var data;
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return false;
    }
}
console.log(combine(1, 'amae'));
