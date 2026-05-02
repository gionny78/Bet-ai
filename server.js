const express = require("express");
const fetch = require("node-fetch");

const app = express();

// TEST
app.get("/", (req, res) => {
  res.send("Server attivo 🚀");
});

// MATCHES (API che funziona subito)
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.send("Errore API: " + error.message);
  }
});

// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server avviato 🚀");
});
