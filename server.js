const express = require("ex
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.send("Bet AI attivo");
});

app.get("/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      }
    );

    const matches = response.data.response.map(m => ({
      home: m.teams.home.name,
      away: m.teams.away.name,
      score: `${m.goals.home} - ${m.goals.away}`
    }));

    res.json(matches);
  } catch (err) {
    res.send("Errore API");
  }
});

app.listen(PORT, () => console.log("Server avviato"));
