const express = require('express');
const cors = require('cors');

//Init app;
const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(cors());

app.get('/theme', (req, res) => {
  res.status(200).json({ theme: 'light' }); // dark or light
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
