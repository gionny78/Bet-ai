const express = require("express");
const axios = require("axios");

const app = express();

// Porta (Render usa process.env.PORT)
const PORT = process.env.PORT || 3000;

// API KEY da Render
const API_KEY = process.env.API_KEY;

// Test base
app.get("/", (req, res) => {
  res.send("Bet AI attivo");
});

// Endpoint partite live
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

    const matches = response.data.response.map((m) => ({
      home: m.teams.home.name,
      away: m.teams.away.name,
      score: `${m.goals.home} - ${m.goals.away}`,
    }));

    res.json(matches);

  } catch (err) {
    console.log("ERRORE:", err.response?.data || err.message);
    res.send("Errore API");
  }
});

// Avvio server
app.listen(PORT, () => {
  console.log("Server avviato su porta " + PORT);
});
