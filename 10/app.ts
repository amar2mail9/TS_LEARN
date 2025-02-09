// union
let data: number | string | boolean;
function combine(a: string | number, b: number|string) {
 if (typeof a ==="number" && typeof b === "number") {
    return  a +  b
 } else {
    return false
 }
}

console.log(combine(1, 'amae')); // false
console.log(combine(1, 8)); // 9

