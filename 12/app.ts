type alias = string | number | boolean;

const func = (
  a: alias,
  b: alias,
  c: alias,
  d: alias,
  e: alias,
  f: alias,
  type: "as-string" | "as-number" | "as-boolean"
) => {
  if (type === "as-number") {
    return +a + +b + +c + +d + +e + +e;
  } else {
    return a.toString() + b.toString();
  }
};

// console.log(func("Amar ","Kumar","as-string"));
