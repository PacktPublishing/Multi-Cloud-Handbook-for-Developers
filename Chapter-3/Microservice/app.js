const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON parsing
app.use(express.json());  // Add this line to enable JSON parsing

app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id, name: 'paket' });
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});
