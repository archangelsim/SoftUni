class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.fuel = fuel;
    this.parts.engine = this.parts.quality = parts.engine * parts.power;
  }

  drive(fuelloss) {
    this.fuel -= fuelloss;
  }
}

