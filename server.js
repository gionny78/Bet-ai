const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/matches", async (req, res) => {
  const response = await fetch("https://www.scorebat.com/video-api/v3/");
  const data = await response.json();
  res.json(data.response);
});

app.listen(3000, () => console.log("Server attivo 🚀"));
