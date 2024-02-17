function Car(make, speed) {
    this.make = make;
    this._speed = speed; // Use an underscore to indicate it's a private property

    // Getter for speed in mi/h
    this.speedUS = function () {
        return this._speed / 1.6;
    };

    // Setter for speed in mi/h
    this.setSpeedUS = function (speedUS) {
        this._speed = speedUS * 1.6;
    };

    // Method to accelerate
    this.accelerate = function (acceleration) {
        this._speed += acceleration;
        console.log(`Accelerating to ${this._speed} km/h`);
    };

    // Method to brake
    this.brake = function (deceleration) {
        this._speed -= deceleration;
        console.log(`Braking to ${this._speed} km/h`);
    };
}

// Creating a new car instance
const myCar = new Car('Toyota', 60);

// Displaying initial information
console.log(`Initial Speed: ${myCar._speed} km/h`);
console.log(`Speed in mi/h: ${myCar.speedUS()} mi/h`);

// Accelerating and braking
myCar.accelerate(20);
myCar.brake(10);

// Displaying updated information
console.log(`Current Speed: ${myCar._speed} km/h`);
console.log(`Updated Speed in mi/h: ${myCar.speedUS()} mi/h`);

// Using the setter to update speed in mi/h
myCar.setSpeedUS(50);

// Displaying information after using the setter
console.log(`Updated Speed: ${myCar._speed} km/h`);
console.log(`Updated Speed in mi/h: ${myCar.speedUS()} mi/h`);