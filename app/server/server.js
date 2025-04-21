require('dotenv').config({ path: './server/.env' });
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/api/matches", async (req, res) => {
  try {
    const { league } = req.query;

    const response = await fetch(
      `https://api.football-data.org/v4/matches?competitions=${league}&dateFrom=2025-02-10&dateTo=2025-02-16`,
      {
        headers: { "X-Auth-Token": process.env.API_TOKEN },
        'Accept': 'application/json',
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка API");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
