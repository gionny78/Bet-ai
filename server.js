const express = require("express");
const fetch = require("node-fetch");

const app = express();

// TEST
app.get("/", (req, res) => {
  res.send("Server attivo 🚀");
});

// MATCHES
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      }
    );

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
