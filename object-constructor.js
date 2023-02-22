class Vehicle {
constructor (make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
}
getName(){
    return this.make + " " + this.model;
}
}

let car = new Vehicle("toyota", "corolla", "black");
console.log(car);