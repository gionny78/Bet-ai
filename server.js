const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", (req, res) => {
  res.send("Server attivo 🚀");
});

app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2d49119c09be960e0c903e9a4683741e"
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    });

    const text = await response.text(); // 👈 importante
    res.send(text);

  } catch (error) {
    res.send("Errore API: " + error.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server avviato");
});
