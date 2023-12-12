require('dotenv').config();
const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;
const adminPort = process.env.ADMIN_PORT || 3001;

const handleAdminRestart = async () => {
  // Send a request to the admin process to restart the application
  const request = require('request');
  try {
    const response = await request.post(`http://localhost:${adminPort}/restart`);
    if (response.statusCode === 200) {
      console.log('Application restarted successfully');
      return true;
    } else {
      console.error(`Failed to restart application: ${response.statusCode}`);
      return false;
    }
  } catch (error) {
    console.error(`Failed to restart application: ${error}`);
    return false;
  }
};

// Add middleware to parse JSON requests
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// GET route to retrieve data
app.get('/data', (req, res) => {
  res.json({ message: 'Fetching data' });
});

// POST route to create data
app.post('/data', (req, res) => {
  console.log(req.body); // Log the request body
  res.json({ message: 'Data created', data: req.body });
});

// PUT route to update data
app.put('/data/:id', (req, res) => {
  res.json({ message: 'Data updated', id: req.params.id, data: req.body });
});

// DELETE route to delete data
app.delete('/data/:id', (req, res) => {
  res.json({ message: 'Data deleted', id: req.params.id });
});

// Admin route to restart the application
app.get('/restart', async (req, res) => {
  const restartSuccess = await handleAdminRestart();
  if (restartSuccess) {
    res.status(200);
    res.send('Application restarted successfully');
  } else {
    res.status(500);
    res.send('Failed to restart application');
  }
});

// Start the application on port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  // Start the admin process on port 3001
  if (process.env.ADMIN_PORT) {
    const adminProcess = require('child_process').spawn('node', ['admin.js']);
    adminProcess.on('exit', () => {
      console.log('Admin process exited');
    });
  }
});
