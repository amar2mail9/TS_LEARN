var func = function (a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
};
console.log(func("Amar", "Kumar", "as-string"));
