function maskEmail(email) {
    const maskedEmail = email.replace(/^(.)(.*)(.@.*)$/,
      (_, firstChar, middleChars, lastPart) =>
        firstChar + middleChars.replace(/./g, '*') + lastPart
    );
    return maskedEmail;
  }
  
  // Example usage:
  const email = 'packt_user1@example.com';
  const masked = maskEmail(email);
  console.log("Original Email:", email);
  console.log("Masked Email:", masked);
  