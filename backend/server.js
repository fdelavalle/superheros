const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.get('/getHeros', cors(corsOptions), async (req, res) => {
  const heroName = req.query.heroName;
  try {
    const response = await axios.get(
      `https://superheroapi.com/api/4311045615613550/search/${heroName}`
    );
    res.send(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
