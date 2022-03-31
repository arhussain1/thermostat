const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  let thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('should have an initial temperature of 20 degrees', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('should be able to increase the temperature by 1 with the up method', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21)
  });

  it('should be able to decrease the temperature by 1 with the down method', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19)
  });
});