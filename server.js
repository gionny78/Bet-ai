const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 📌 SERVE SOLO FILE STATICI (index.html)
app.use(express.static(path.join(__dirname)));

// 📌 HOMEPAGE FORZATA (QUESTO RISOLVE IL TUO BUG)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 📌 API PARTITE
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();

    res.json(data.response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Errore nel server" });
  }
});

// 📌 START SERVER
app.listen(PORT, () => {
  console.log("Server attivo sulla porta " + PORT);
});
