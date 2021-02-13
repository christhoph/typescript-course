const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias to reuse it
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

type CarStats = { horsepower: number; weight: number };

const carStats: CarStats = {
  horsepower: 400,
  weight: 3354,
};
