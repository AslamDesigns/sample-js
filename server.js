const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// API Endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
