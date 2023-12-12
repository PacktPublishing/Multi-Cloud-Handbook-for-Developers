const express = require('express');
const request = require('request');

const app = express();
const port = process.env.ADMIN_PORT || 3001;

// Add an admin route to restart the application
app.get('/restart', (req, res) => {
  // Send a request to the main application to restart the application
  const request = require('request');
  request.post(`http://localhost:${process.env.PORT || 3000}/restart`, (err, res) => {
    if (err) {
      console.error(`Failed to restart application: ${err}`);
      res.status(500);
      res.send('Failed to restart application');
      return;
    }

    console.log('Application restarted successfully');
    res.status(200);
    res.send('Application restarted successfully');
  });
});

// Start the admin process on port 3001
app.listen(port, () => {
  console.log(`Admin process listening on port ${port}`);
});
