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
    { name: "packt user1", email: "packt_user1@example.com", age: 30 },
    { name: "packt  user2", email: "packt_user2@example.com", phone: "1234567890" },
  ];
  
  const anonymizedData = anonymizeData(originalData);
  console.log("Original Data:", originalData);
  console.log("Anonymized Data:", anonymizedData);
  