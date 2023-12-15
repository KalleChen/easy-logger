const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors()); // Enable All CORS Requests
app.use(express.json());

app.post("/post-message", (req, res) => {
  console.log("Message received:", req.body);
  res.status(200).send("Message received!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
