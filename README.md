<strong>Tuple:</strong>-A tuple in TypeScript is declared using square brackets [] and the types of elements inside the tuple are defined in a specific order

```ts
let tuple: [number, string, boolean] = [1, "hello", true];
```

In the example above:

The first element is a number.
<br>
The second element is a string.
<br>
The third element is a boolean.

<h2>
Key Features of Tuples:</h2>

Fixed Length: The number of elements in a tuple is fixed when you define the types.

Order Matters: The types of the elements are defined in a specific order and must match the order in the tuple.

Type Inference: TypeScript can automatically infer the types if you initialize a tuple without specifying types.

<hr/>
<h1>Enum</h1>:In TypeScript, an enum (short for "enumeration") is a way to define a set of named constants. It's a useful feature when you have a collection of related values that should be treated as a set of constants, and it provides both a readable and a maintainable approach for working with them.

<strong>Basic Syntax for Enum:</strong>

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

<strong>Accessing Enum Values:<strong>

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // Output: 0
console.log(Direction[0]); // Output: "Up"
console.log(Direction.Down); // Output: 1
console.log(Direction[1]); // Output: "Down"
```

<strong>Assigning Custom Values to Enum Members:<strong>

```ts
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

console.log(Direction.Up); // Output: 1
```

<strong>String Enum: In a string enum, each member must be assigned a string literal.<strong>

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // Output: "UP"
```

<strong>String Enum: In a string enum, each member must be assigned a string literal.<strong>

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // Output: "UP"
```

<strong>Heterogeneous Enum (Mix of String and Numeric Values):literal.<strong>You can mix both string and numeric values in an enum, although this is less common:

```ts
enum Direction {
  Up = "UP",
  Down = 2,
  Left = "LEFT",
  Right = 4,
}

console.log(Direction.Up); // Output: "UP"
console.log(Direction.Down); // Output: 2
```

<strong>Reverse Mapping in Numeric Enums:<strong>TypeScript provides reverse mapping for numeric enums, which allows you to get the name of an enum member from its value. This works only with numeric enums.

```ts
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

console.log(Direction[1]); // Output: "Up"
console.log(Direction[2]); // Output: "Down"
```

<strong>Note:<strong> Reverse mapping doesn't work with string enums because strings don't have a numeric index.

<b>
Enum as a Type:</b>
You can also use enum as a type to restrict variables to specific enum values:

```js
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let currentDirection: Direction;

currentDirection = Direction.Up;  // Valid
currentDirection = "UP";          // Error: Type '"UP"' is not assignable to type 'Direction'

```

<h6>
Enum as a Flag:</h6>
Enums are often used as bit flags, where each member represents a power of 2, allowing for the combination of multiple flags using bitwise operations.

```ts
enum Permission {
  Read = 1 << 0, // 1
  Write = 1 << 1, // 2
  Execute = 1 << 2, // 4
}

let userPermissions = Permission.Read | Permission.Write; // Combination using bitwise OR
console.log(userPermissions); // Output: 3 (Read + Write)
```

<strong>Summary of Enum Features:</strong>
Numeric Enum: The members are initialized with incremental numbers starting from 0 (or a custom starting value).

String Enum: The members are initialized with string values.

Heterogeneous Enum: Mixes both numeric and string values (less common).

Reverse Mapping: Available for numeric enums, allowing you to get the name of a member using its value.

Flags Enum: Useful for bitwise operations.
