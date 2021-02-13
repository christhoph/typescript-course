// Arrow functions
const add = (a: number, b: number): number => a + b;
const substract = (a: number, b: number): number => {
  return a - b;
};

// Vanilla functions
function divide(a: number, b: number): number {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void/Never
const logger = (msg: string): void => console.log(msg);
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// Destructuring params
interface Weather {
  date: Date;
  weather: string;
}

const todaysWeather: Weather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: Weather): void =>
  console.log(`
    date: ${date};
    weather: ${weather};
  `);

logWeather(todaysWeather);
