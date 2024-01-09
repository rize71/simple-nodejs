import http from "http";
import express from "express";
// import path from "path";
// import debug from "console";

const app = express();
const port = 2024;

app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "express" });
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
