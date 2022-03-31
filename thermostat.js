
class Thermostat {
  constructor() {
    this.currentTemperature = 20;
    this.minTemp = 10;
    this.powerSavingMode = true;
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

  setPowerSavingMode(bool) {
    if (typeof bool != "boolean") throw 'Wrong Argument only input true or false'
    this.powerSavingMode = bool
    return this.powerSavingMode
  }
}




module.exports = Thermostat;