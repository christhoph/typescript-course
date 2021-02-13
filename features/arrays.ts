// string[]
const carMakers = ['ford', 'toyota', 'audi'];
// Date[]
const dates = [new Date(), new Date()];
// string[][]
const carsByMake = [['f150'], ['corolla'], ['r8']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);   // error

// Array methods
carMakers.map((car: string): string => car.toUpperCase());

// Multiple types in Array (Flexible types)
// (string | Date)[]
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
importantDates.push(new Date());
// importantDates.push(100);    // error
