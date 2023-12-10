// index.js

const express = require('express');
const app = express();
const PORT = 3000; // You can change this port

// Sample tool data
const tools = [
  { id: 1, name: 'ChatGPT-4', rating: 0 },
  { id: 2, name: 'DataRobot', rating: 0 },
  { id: 3, name: 'Gemini', rating: 0 },
  // Add more tools as needed
];

// Middleware to parse JSON requests
app.use(express.json());

// Get all tools
app.get('/tools', (req, res) => {
  res.json(tools);
});

// Update tool rating
app.put('/tools/:id/rate', (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;

  const tool = tools.find(tool => tool.id === parseInt(id));

  if (!tool) {
    return res.status(404).json({ message: 'Tool not found' });
  }

  tool.rating = rating;
  res.json(tool);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
