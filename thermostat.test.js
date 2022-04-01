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
    for (let step = 0; step<=9; step++) {
      thermostat.down();
    }
    expect(thermostat.down()).toEqual('Lowest Temperature Reached')
  });

  it('should not decrease the temperature lower than the minTemp of 10 degrees', () => {
    for (let step = 0; step<=9; step++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10)
  });

  it('should have the powerSavingMode on by default', () => {
    expect(thermostat.powerSavingMode).toBe(true)
  });

  it('should return false when the powerSavingMode is turned off', () => {
    expect(thermostat.setPowerSavingMode(false)).toBe(false)
  });

  it('should throw an error when a non bool input is given to setPowerSavingMode()', () => {
    expect(() => {
      thermostat.setPowerSavingMode('hello')
    }).toThrow('Wrong Argument only input true or false')
  });

  it('should throw an error if up() is called when mmaxTemp has been reached', () => {
    // The code below runs the up() method 6 times should raise an error
    for (let step = 0; step<=4; step++) {
      thermostat.up();
    }
    expect(thermostat.up()).toEqual('Maximum Temperature has been reached')
  });

  it('should NOT throw an error if up() is called when minTemp has NOT been reached', () => {
    // The code below run the up() method 5 times should NOT raise an error
    expect(() => {
      for (let step = 0; step<=4; step++) {
        thermostat.up();
      }
    }).not.toThrow();
  });

  it('should raise error when powerSavingMode set to false should change maxTemp to 32 and we call up() 13 times', () => {
    // The code below run the up() method 13 times should raise an error
    thermostat.setPowerSavingMode(false);

    for (let step = 0; step<=11; step++) {
      thermostat.up();
    }

    expect((thermostat.up())).toEqual('Maximum Temperature has been reached')
    expect((thermostat.getTemperature())).toEqual(32)
  });

  it('should NOT raise error when powerSavingMode set to false and we call up() 12 times', () => {
    // The code below run the up() method 12 times should raise an error
    thermostat.setPowerSavingMode(false);
    expect(() => {
      for (let step = 0; step<=11; step++) {
        thermostat.up();
      }
    }).not.toThrow('Maximum Temperature has been reached')
    expect((thermostat.getTemperature())).toEqual(32)
  });

  it('When powerSavingMode set to false then to true should raise error when we call up() 6 times', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);

    for (let step = 0; step<=4; step++) {
      thermostat.up();
    }

    expect((thermostat.up())).toEqual('Maximum Temperature has been reached')
    expect((thermostat.getTemperature())).toEqual(25)
  });

  it('reset method should reset currentTemperature back to 20 degrees', () => {
    thermostat.setPowerSavingMode(false);
    // lets raise the temp to 28 degrees
    for (let step = 0; step<=7; step++) {
      thermostat.up();
    }
    thermostat.reset();

    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('reset method should reset the powerSavingMode to true', () => {
    thermostat.setPowerSavingMode(false);
    // lets raise the temp to 28 degrees
    for (let step = 0; step<=7; step++) {
      thermostat.up();
    }
    thermostat.reset();

    //now lets raise the temp to 25 degrees
    for (let step = 0; step<=4; step++) {
      thermostat.up();
    }

    expect((thermostat.up())).toEqual('Maximum Temperature has been reached')
    expect((thermostat.getTemperature())).toEqual(25)
  });

  it('should return "Low usage" when currentTemperature is 17 and getEnergyUsage is called', () => {
    for (let step = 0; step<=2; step++) {
      thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toEqual('Low usage')
  });

  it('should return "High usage" when currentTemperature is 26 and getEnergyUsage is called', () => {
    thermostat.setPowerSavingMode(false)
    for (let step = 0; step<=5; step++) {
      thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toEqual('High usage')
  });
  
  it('should return "Med usage" when currentTemperature is 25 and getEnergyUsage is called', () => {
    for (let step = 0; step<=4; step++) {
      thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toEqual('Med usage')
  });

  it('should return "Med usage" when currentTemperature is 18 and getEnergyUsage is called', () => {
    for (let step = 0; step<=1; step++) {
      thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toEqual('Med usage')
  });

});