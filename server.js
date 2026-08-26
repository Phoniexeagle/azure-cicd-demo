const express = require('express');
const app = express();

// App Service sets the PORT environment variable dynamically
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from automated Azure CI/CD Pipeline!', status: 'Running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});