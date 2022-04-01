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

Lets complete each user story now:

#### User Story 1
```
As a user
So that my thermostat is ready to go as soon as I turn it on
I would like the thermostat to have an initial temperature of 20 degrees
```

To begin, I need to set up my repo with the following:
  - [x] I need to run ``npm init -y`` to create a package.json file
  - [x] Now lets install the Jest package by running ``npm install -g jest``
  - [x] Lets create two files ``thermostat.js`` and ``thermostat.test.js``

Now we can begin, in order to test-drive our program we need to make tests first then write out code to pass those tests:

- [x] create a test to check if a new instance of Thermostat has a temperature of 20
- [x] make this test pass by creating the Thermostat class with a currentTemperature property and also create the getTemperature method


#### User Story 2
```
As a user
So that I don't get cold
I would like to increase the temperature of my thermostat
```

- [x] We need to create a test that called the up method on a new thermostat and expects the temperature to rise by 1 degree, so getTemperature() should return ``21``
- [x] To make this test pass we need to create the up() method which adds 1 to the current temperature


#### User Story 3
```
As a user
So that I don't get too warm
I would like to decrease the temperature of my thermostat
```

- [x] We need to create a test that calls the down() method on a new thermostat and expects the temperature to low by 1 degree, so getTemperature() should return 19
- [x] To make this test pass we need to create a down() method which will minus 1 from the current temperature


#### User Story 4
```
As a user 
So that i don't accidently set the temperature too low
I would the lowest possible temperature to be 10 degrees
```

_Tests_
- [x] We need to create a test that attempts to call the down() method 11 times and expect to be thrown an error stating 'Lowest Temperature Reached'
- [x] We also need another test which calls the down() method 11 times and we should expect getTemperature to return 10 rather than 9
- [x] design a test to make sure that calling down() 10 times does NOT throw an error

_Steps_
- [x] We need to create a constant which describes the minimum temperature (We could just use the number 10 in our code but this is an example of using magic numbers and will be less readable)
- [x] modify the down() method with an if statement or a guard clause to throw an error if the temperature has already reached 10 degrees and the down() method is called
- [x] modify the down() method so that it does not decrease the currentTemperature if the minimumTemp has been reached


#### User Story 5
```
As a user
So that I can save money on Energy bills after inflation 
I would like my thermostat to have power saving mode on by default
```

_Tests_
- [x] Create a test that expects the powerSavingMode to be true when a new thermostat instance is created
- [x] Create a test that runs the setPowerSavingMode() method with an argument of false and expects it to return the value of the powerSavingMode as false
- [x] As a bonus we should include another test which expects a non bool argument to throw an error saying 'Wrong Argument only input true or false'

_Steps_
- [x] To do this we need to add the powerSavingMode attribute to the thermostat constructor class
- [x] Create a setPowerSavingMode(bool) which takes an argument and saves it to the powerSavingMode attribute of this thermostat instance
- [x] Add a guard clause to the setPowerSavingMode(bool) method that throws an error if the input is not a boolean


#### User Story 6
```
As a user
So that I can save money on Energy bills after inflation 
If power saving mode is on, I would like the maximum possible temperature to be 25 degrees
```

- [x] Create a test that attempts to raise the temperature using the up() method 6 times and expects and error to be throws stating 'Maximum Temperature of 25 degrees has been reached'
- [x] Create a test that call up() 5 times and expect this to not raise an error 

- [x] First we need to add another attribute called maxTemp by default it is set to 25 because powerSavingMode is true by default
- [x] Then we to modify the up method similarly to the way we did in the previous user story for the down method, We want to add a guard clause to throw an error if currentTemperature has reach maxTemp


#### User Story 7
```
As a user
So that I don't accidently set the temperature too high
I would like the maximum possible temperature to be 32 degrees
```

So here we are going to need to think about how we can make our maxTemp dynamic and change depending on whether powerSavingMode is true or false.

If we think about when our Thermostat class is first instantiated it will have powerSavingMode set to true as default, so we can also set the maxTemp as 25 here aswell, this is what we did in our previous user story and I am making the decision to leave that unchanged as I don't think it will affect our work that we intend to do in this section.

Since any time we want to change the powerSavingMode attribute this goes through the setPowerSavingMode() method, we can add another conditional statement, so if your changing the powerSavingMode to false it set the new maxTemp to 32 and likewise if your setting back to true again it will set the maxTemp back to 25. 

_Tests_
- [x] Create a test that sets the powerSavingMode to false and expects to be thrown an error after the up method is called 13 times
- [x] Create another test that sets powerSavingMode to false and expect no error to be thrown when the up method is called 12 times and also add an extra expect statement to check if getTemperature returns 32
- [x] Create another test that sets powerSavingMode to false and then back to true and expect to be thrown an error if the up method is called 6 times

_Steps_
- [x] add a condition such that if the argument given to setPowerSavingMode is true it sets the maxTemp = 25 and if false it sets maxTemp = 32


#### User Story 7
```
As a user
So that I can save time
I would like to be able to reset my thermostat back to 20 degrees
```

Before the test below we should change a bunch of settings such as powerSavingMode should be set to false and the temperature should be raised to 28 degrees
- [x] Create a test that expects the reset() method to bring the currentTemperature back to 20 and the powerSavingMode to be true
- [x] Create a test that expects the reset() method to set the powerSavingMode to be true

- [x] create a reset method that simply sets the currentTemperature back to 20 and calls setPowerSavingMode with an argument of true

#### User Story 7, 8 and 9
```
As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see low usage if my thermostat is < 18 

As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see medium usage if my thermostat is <= 25 

As a user
So that I can keep track of my impact on the UKs net zero by 2050 initiative
I would like to be able to see high usage if my thermostat is above 25
```

The above 3 User stories will be done at the same time. Commit after each one though.

_7th User Story_
- [x] Create a test that reduces temp to 17 degrees and calls getEnergyUsage and expects it to return 'Low Usage'
- [x] Pass this test by creating getEnergyUsage() which has a conditional returning 'Low Usage' when currentTemperature is less than 18 degrees

_9th User Story_
- [ ] Create a test expects when the currentTemperature is 26 getEnergyUsage returns 'High Usage'
- [ ] Add an else if statement that returns 'High Usage' if the temperature is above 25

_8th User Story_
- [ ] Create two tests that expects when the current temp is 18 and 25 it should return 'Med Usage'
- [ ] Create an else statement that return 'Med Usage'