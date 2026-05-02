const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

// ⚠️ IMPORTANTE: path corretto
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();
    res.json(data.response);
  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
});

app.listen(3000, () => {
  console.log("Server attivo 🚀");
});
