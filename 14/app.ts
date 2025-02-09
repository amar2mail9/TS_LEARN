// void type function
function printData() {
  console.log("Hello");

  // no return
}

// Unknown Type
let data1: unknown;
let data: any;

data = 20;
data = "apple";

data1 = 20;
data1 = "apple";

// never Type
// jab  koi bhi function Kuchh bhi return nhi karta hai to uska type never hota hai

function tryReturn(): never {
  //   return true;/
}
