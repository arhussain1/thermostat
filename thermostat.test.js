const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('should have an initial temperature of 20 degrees', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  });

});