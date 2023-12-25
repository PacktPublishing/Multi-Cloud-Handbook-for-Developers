const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Store this key securely for later decryption
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };
}

function decrypt(encryptedData) {
  let iv = Buffer.from(encryptedData.iv, 'hex');
  let encryptedText = Buffer.from(encryptedData.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage:
const originalText = "This is a secret message.";

const encryptedData = encrypt(originalText);
console.log("Encrypted Data:", encryptedData);

const decryptedText = decrypt(encryptedData);
console.log("Decrypted Text:", decryptedText);
