const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD pipeline!');
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
