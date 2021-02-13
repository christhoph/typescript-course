// primitive values
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

// null values
const nothingNull: null = null;
const nothing: undefined = undefined;

// built in object
const now: Date = new Date();

// array
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false];

// classes

class Car {}

const car: Car = new Car();

// object literal
interface Point {
  x: number;
  y: number;
}
const point: Point = {
  x: 10,
  y: 20,
};

// Function
const log: (i: number) => void = (i: number) => console.log(i);

// When to use annotations

// 1) Function that returns the 'any' type
const json: string = '{"x": 10, "y": 20}';
const coordinates: Point = JSON.parse(json);
console.log('coordinates: ', coordinates); // { x: 10, y: 20 };

// 2) When we declare a variable on one line and initializate it later
const words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
const numbersList: number[] = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersList.length; i++) {
  const currentNumber: number = numbersList[i];
  if (currentNumber > 0) numberAboveZero = currentNumber;
}
