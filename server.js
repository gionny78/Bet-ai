const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server attivo ⚽");
});

app.get("/matches", async (req, res) => {
  try {
    const response = await axios.get("https://www.scorebat.com/video-api/v3/");

    const matches = response.data.response.map(m => ({
      title: m.title,
      competition: m.competition,
      date: m.date
    }));

    res.json(matches);
  } catch (err) {
    console.log(err.message);
    res.send("Errore API");
  }
});

app
