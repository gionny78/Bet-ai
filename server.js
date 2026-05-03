const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

// 👉 IMPORTANTE: serve i file statici (index.html)
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

// 👉 API
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();

    res.json(data.response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore nel server" });
  }
});

// 👉 fallback per evitare che mostri codice
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server attivo sulla porta " + PORT);
});
