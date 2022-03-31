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

  it('should NOT throw an error if down() is called when currentTemperature >= MinTemp', () => {
    // The code below run the down() method 10 times should not raise an error
    expect(() => {
      for (let step = 0; step<=9; step++) {
        thermostat.down();
      }
      console.log(`Here it is!!! ${thermostat.getTemperature()}`)
    }).not.toThrow();
  });

  it('should throw an error if down() is called when minimum temperature of 10 has been reached', () => {
    // The code below run the down() method 11 times should raise an error
    expect(() => {
      for (let step = 0; step<=10; step++) {
        thermostat.down();
      }
    }).toThrow('Lowest Temperature Reached')
  });

  it('should not decrease the temperature lower than the minTemp of 10 degrees', () => {
    for (let step = 0; step<=9; step++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  });
});