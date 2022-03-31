
class Thermostat {
  constructor() {
    this.currentTemperature = 20;
    this.minTemp = 10;
  }

  getTemperature() {
    return this.currentTemperature;
  }

  up() {
    this.currentTemperature += 1;
  }

  down() {
    if(this.currentTemperature == this.minTemp) throw 'Lowest Temperature Reached';
    this.currentTemperature -= 1;
  }
}




module.exports = Thermostat;