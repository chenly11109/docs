const express = require('express');
const app = express();
const port = 3000; // You can change this port number if needed

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, this is your local website!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});