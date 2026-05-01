import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

// homepage
app.get("/", (req, res) => {
  res.send("Server attivo 🚀");
});

// endpoint partite
app.get("/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.scorebat.com/video-api/v3/feed/?token=demo"
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Errore API");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server avviato sulla porta " + PORT);
});
