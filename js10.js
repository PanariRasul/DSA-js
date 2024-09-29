//* Objects*
//* Create an object representing a car with  properties like make, model, and year.Add a method to the car object to start the engine.
//* .add function

let car = {
    make: "Tata Motors",
    model: "Hariaer",
    year: 2024
};

car.startEngine = () => {
    console.log("Engine Started")
}

car.startEngine();
console.log(car)