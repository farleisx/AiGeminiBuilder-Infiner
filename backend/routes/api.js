const express = require('express');
const router = express.Router();
const axios = require('axios');

// AI agent endpoint
router.post('/ai', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate',
      {
        prompt: { text: prompt },
        temperature: 0.7,
        maxOutputTokens: 500
      },
      { headers: { 'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}` } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
