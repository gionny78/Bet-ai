const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public")); // 🔥 QUESTA È LA CHIAVE

app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await response.json();
    res.json(data.response);
  } catch (err) {
    res.status(500).json({ error: "Errore server" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server avviato sulla porta " + PORT);
});
