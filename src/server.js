import express, { application } from "express";

const app = express();

// our very first API endpoint!
app.get("/", (req, res) => {
  res.send("ggg Client!, I am your server!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
