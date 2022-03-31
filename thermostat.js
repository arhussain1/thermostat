
class Thermostat {
  constructor() {
    this.currentTemperature = 20;
    this.minTemp = 10;
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }

  getTemperature() {
    return this.currentTemperature;
  }

  up() {
    if(this.currentTemperature == this.maxTemp) throw 'Maximum Temperature of 25 degrees has been reached'
    this.currentTemperature += 1;
  }

  down() {
    if(this.currentTemperature == this.minTemp) throw 'Lowest Temperature Reached';
    this.currentTemperature -= 1;
  }

  setPowerSavingMode(bool) {
    if (typeof bool != "boolean") throw 'Wrong Argument only input true or false'
    this.powerSavingMode = bool
    return this.powerSavingMode
  }
}




module.exports = Thermostat;