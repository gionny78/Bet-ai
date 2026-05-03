const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// 👇 QUESTO È FONDAMENTALE
app.use(express.static("public"));

// API partite
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();
    res.json(data.response);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero dati" });
  }
});

// Avvio server
app.listen(PORT, () => {
  console.log("Server avviato su porta " + PORT);
});
