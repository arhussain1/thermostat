
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
    if(this.currentTemperature == this.maxTemp) return 'Maximum Temperature has been reached'
    this.currentTemperature += 1;
  }

  down() {
    if(this.currentTemperature == this.minTemp) return 'Lowest Temperature Reached';
    this.currentTemperature -= 1;
  }

  setPowerSavingMode(bool) {
    this.checkBool(bool)
    bool ? (this.maxTemp = 25) : (this.maxTemp=32);
    this.powerSavingMode = bool
    return this.powerSavingMode
  }

  checkBool(argument) {
    if (typeof argument != "boolean") throw 'Wrong Argument only input true or false'
  }

  reset() {
    this.currentTemperature = 20
    this.setPowerSavingMode(true)
  }

  getEnergyUsage() {
    if (this.currentTemperature < 18) {return 'Low usage'} 
    else if (this.currentTemperature > 25) { return 'High usage'}
    else {return 'Med usage'}
  }
}




module.exports = Thermostat;