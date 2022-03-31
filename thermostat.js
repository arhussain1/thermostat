
class Thermostat {
  constructor() {
    this.currentTemperature = 20;
  }

  getTemperature() {
    return this.currentTemperature;
  }

  up() {
    this.currentTemperature += 1;
  }

  down() {
    this.currentTemperature -= 1;
  }
}

module.exports = Thermostat;