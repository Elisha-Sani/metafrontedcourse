var car = {};
car.mileage = 78990;
car.color = "yellow";
console.log(car);

car.turnTheKey = function () {
    console.log("The car is running");
}

car.lightsOn = function () {
    console.log("The lights are on");
}

console.log(car);
car.turnTheKey();
car.lightsOn();