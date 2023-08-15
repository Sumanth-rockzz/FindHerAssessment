const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config();

app.use(cors());

const UserRoutes = require("./routes/users");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

app.use(bodyParser.json({ extended: false }));

app.use("/user", UserRoutes);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>OOPS! Page Not Found </h1>");
});

mongoose
  .connect(process.env.MONGOOSE_DB)
  .then(() => {
    console.log("Connected!!");
  })
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("Listening to Port", process.env.PORT);
  })
  .catch((err) => console.log(err));
