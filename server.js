const express = require('express');
const app = express();

// Define routes
app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

