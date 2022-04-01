const Thermostat = require("./thermostat");
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let thermostat = new Thermostat

const checkUserAnswer = (answer) => {
  if (answer == 'exit') {return rl.close()}
  else if (answer == 'up') {thermostat.up()}
  else if (answer == 'down') {thermostat.down()}
  else {
    console.log('Please enter a correct command');
  }
};

const readlineLoop = () => {
  rl.question('Enter command ', (answer) => {
    checkUserAnswer(answer);
    console.log(`Temperature is ${thermostat.getTemperature()}`);
    readlineLoop();
  });
};

console.log(`Temperature is ${thermostat.getTemperature()}`);
readlineLoop();


