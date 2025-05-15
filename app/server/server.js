import { getWeekRange } from "../src/utils/dateUtils.js";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/api/matches", async (req, res) => {
  try {
    const { league } = req.query;
    const { firstDay, lastDay } = getWeekRange();

    const response = await fetch(
      `https://api.football-data.org/v4/matches?competitions=${league}&dateFrom=${firstDay}&dateTo=${lastDay}`,
      {
        headers: { "X-Auth-Token": process.env.API_TOKEN },
        Accept: "application/json",
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

app.get("/api/matches/stats", async (req, res) => {
  try {
    const { id } = req.query;

    const response = await fetch(
      `https://api.football-data.org/v4/matches/${id}`,
      {
        headers: { "X-Auth-Token": process.env.API_TOKEN },
        Accept: "application/json",
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
