const express = require('express');
const app = express();
const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

// Add middleware for parsing JSON (if needed)
app.use(express.json());

app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
