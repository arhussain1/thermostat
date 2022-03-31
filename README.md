For this project I aim to build a simple program to manage a thermostat

I hope to demonstrate my ability to test-drive a simple program in JavaScript using Jest.

Below is a specification which describes the MVP (Minimum Viable Product) for this thermostat program:

- The Thermostat starts with an initial temperature of 20 degrees
- You can increase the temperature with an up method
- You can decrease the temperature with a down method
- The minimum possible temperature is 10 degrees
- The Power saving mode is on by default but it can also be turned off
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- You can reset the temperature to 20 with a reset method
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is
  medium-usage, anything else is high-usage.

To begin, I want to turn all the above points into user stories:

#### User Stories
```
As a user
So that my thermostat is ready to go as soon as I turn it on
I would like the thermostat to have an initial temperature of 20 degrees

As a user
So that I don't get cold
I would like to increase the temperature of my thermostat

As a user
So that I don't get too warm
I would like to decrease the temperature of my thermostat

As a user 
So that i don't accidently set the temperature too low
I would the lowest possible temperature to be 10 degrees

As a user
So that I can save money on Energy bills after inflation 
I would like my thermostat to have power saving mode on by default

As a user
So that I can save money on Energy bills after inflation 
If power saving mode is on, I would like the maximum possible temperature to be 25 degrees

As a user
So that I don't accidently set the temperature too high
I would like the maximum possible temperature to be 32 degrees

As a user
So that I can save time
I would like to be able to reset my thermostat back to 20 degrees

As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see low usage if my thermostat is < 18 

As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see medium usage if my thermostat is < 25 

As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see high usage if my thermostat is above 25
```

Now that all the user stories have been created, I can begin modelling my Domain. To do this I will use the following basic mockup which details how I expect a user to use my program:

```
const thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
```

Using this I created the domain model below:

![Domain Model](https://github.com/arhussain1/thermostat/blob/main/Images/Thermostat%20Domain%20Model.drawio.png?raw=true)
In my Domain Model I went with only one class called Thermostat which should handle increasing and decreasing temperature, setting the power saving mode on and off and finally it should know what the temperature is set to at any given time.


