// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate', (req, res) => {
  const { units } = req.body;
  let amount = 0;

  if (units <= 50) {
    amount = units * 3.5;
  } else if (units <= 150) {
    amount = 50 * 3.5 + (units - 50) * 4;
  } else if (units <= 250) {
    amount = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
  } else {
    amount = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
  }

  res.send({ amount });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});