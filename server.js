const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();

    res.json(data.response);
  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server attivo 🚀"));
