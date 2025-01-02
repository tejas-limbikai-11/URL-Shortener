const express = require("express");
const app = express();
const PORT = 8001;
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url");
const path = require("path");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener").then(() => {
  console.log(`Server started at PORT ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log("mongoDB Connected"));
