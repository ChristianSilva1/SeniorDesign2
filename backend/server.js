const express = require("express");
const res = require("express/lib/response");
const { userRows, productRows } = require("./data/dummyData");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/dummyData", (req, res) => {
  res.json(userRows);
});

app.get("/api/dummyData/:id", (req, res) => {
  const dummyID = productRows.find(
    (n) => n.id === (req.params.id = parseInt(req.params.id))
  );

  res.send(dummyID);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}...`));
