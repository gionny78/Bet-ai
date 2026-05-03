const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// ROUTE PARTITE
app.get("/matches", async (req, res) => {
  try {
    const response = await fetch("https://www.scorebat.com/video-api/v3/");

    if (!response.ok) {
      throw new Error("Errore API");
    }

    const data = await response.json();

    if (!data.response) {
      throw new Error("Formato dati non valido");
    }

    res.json(data.response);

  } catch (error) {
    console.log("ERRORE:", error.message);
    res.status(500).json({ error: "Errore nel server" });
  }
});

app.listen(PORT, () => {
  console.log("Server attivo sulla porta " + PORT);
});
