const express = require("express");
const fetch = require("node-fetch");

const app = express();

// Serve i file statici (index.html)
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API per le partite
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();

    // ⚠️ IMPORTANTE: mandiamo SOLO response
    res.json(data.response);

  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
});

// Avvio server
app.listen(3000, () => {
  console.log("Server attivo 🚀");
});
