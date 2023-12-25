function anonymizeData(data) {
    return data.map(item => {
      return {
        ...item,
        name: 'Anonymous',
        email: 'anonymized@example.com',
      };
    });
  }
  
  // Example usage:
  const originalData = [
    { name: "paket user1", email: "paket_user1@example.com", age: 30 },
    { name: "paket user2", email: "paket_user2@example.com", phone: "1234567890" },
  ];
  
  const anonymizedData = anonymizeData(originalData);
  console.log("Original Data:", originalData);
  console.log("Anonymized Data:", anonymizedData);
  