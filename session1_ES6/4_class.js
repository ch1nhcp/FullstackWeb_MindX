class Car {
  name;
  speed;
  seats;
  brand;
  constructor(name, speed, seats, brand) {
    this.name = name;
    this.seats = seats;
    this.speed = speed;
    this.brand = brand;
  }

  honk() {
    console.log(this.brand + " sound");
  }
  start() {}
  stop() {}
}

class SuperCar extends Car {
  topSpeed;

  static getLimitedSpeed(){
      return 300;
  }
  constructor(name, speed, seats, brand, topSpeed) {
    super(name, speed, seats, brand);
    this.topSpeed = topSpeed;
  }

  turboBoost() {
    console.log(this.name + " is boosting to " + this.topSpeed);
  }

  honk() {
    super.honk();
    console.log("New " + this.brand + " sound");
  }
}

const myCar = new Car("Vinfast Lux", 100, 5, "VIN");
const aliceCar = new SuperCar("vios", 200, 7, "Honda");
myCar.honk();
aliceCar.honk();
console.log(SuperCar.getLimitedSpeed());
const bobCar = new SuperCar("W", 200, 2, "Ferrari", 500);
bobCar.turboBoost();
// bobCar.honk();
