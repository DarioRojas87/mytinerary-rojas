const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
require("./config/database");
require("./config/passport");
const router = require("./routes/index");

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(4000, () => console.log("Server up and running on port 4000"));
