

function add(a: number, b: number) {
  return a+b
}


const num1 = 12
const num2 = 24

const result = add(num1, num2)
console.log(result);



function Str(a: string, b: string, print: boolean) {
    if (print) {
        return a+b+ print
    } else {
        return a + b+ "hello"
    }
 
}


const srt1 = "Amar "
const str2 = 'kumar '

const result1 = Str(srt1,str2,false)
console.log(result1);
