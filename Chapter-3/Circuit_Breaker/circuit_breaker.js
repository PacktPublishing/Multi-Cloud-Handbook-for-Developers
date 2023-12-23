const circuitBreaker = require('opossum');

function asyncFunctionThatCouldFail() {
  return new Promise((resolve, reject) => {
    // Simulated function logic
    setTimeout(() => {
      if (Math.random() > 0.5) resolve('Success!');
      else reject('Failed!');
    }, 1000); // Delay for simulation
  });
}

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000,
};
const breaker = new circuitBreaker(asyncFunctionThatCouldFail, options);

breaker.fallBack(() => 'Fallback response');
breaker.on('success', (result) => console.log(result));

// Call the function repeatedly to observe circuit breaker behavior
setInterval(() => {
  breaker.fire()
    .then((result) => console.log(result))
    .catch(console.error);
}, 2000);
