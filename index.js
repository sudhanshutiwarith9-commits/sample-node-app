const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD pipeline!');
});

// Start server
app.listen(3000, "0.0.0.0", () => {
    console.log("App running at http://0.0.0.0:3000");
});

