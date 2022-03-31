const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('should have an initial temperature of 20 degrees', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('should be able to increase the temperature by 1 with the up method', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21)
  });

});