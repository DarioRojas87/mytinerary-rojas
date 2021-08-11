const express = require("express");
const cros = require("cors");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());

app.get("/test/data", (req, res) => {
  res.json({ respuesta: "hola" });
});

app.listen(4000, () => console.log("Server up and running on port 4000"));
