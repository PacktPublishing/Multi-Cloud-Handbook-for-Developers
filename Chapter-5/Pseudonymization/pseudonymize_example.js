const crypto = require('crypto');

function pseudonymize(input) {
  const pseudonym = crypto.createHash('sha256').update(input).digest('hex');
  return pseudonym;
}

// Example usage:
const userId = 'packt123';
const pseudonym = pseudonymize(userId);
console.log("Original ID:", userId);
console.log("Pseudonym:", pseudonym);
