// Public methods can be called any where and any time
// Protected methods can be called by other methods in this class or by other methos in child classes
// Private methos can only be called by other methods in this class

class Vehicle {
  constructor(private color: string) {}

  public getColor(): string {
    return this.color;
  }

  protected honk(): void {
    console.log('Beep beep!');
  }
}

const vehicle = new Vehicle('blue');
console.log('vehicle color: ', vehicle.getColor());

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vrooom!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
console.log('car color: ', car.getColor());
console.log('car wheels: ', car.wheels);
car.startDrivingProcess();
