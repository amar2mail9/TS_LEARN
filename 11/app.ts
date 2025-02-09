const func = (a:string| number| boolean, b:string| number| boolean, type :"as-string"| "as-number"|"as-boolean") => {
    
    if (type === "as-number")
    {

        return (+a) + (+b)
        
    }
    else

    {

        return a.toString() + b.toString()

    }





}

console.log(func("Amar ","Kumar","as-string"));
