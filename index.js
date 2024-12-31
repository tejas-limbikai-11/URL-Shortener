const express = require("express");
const app = express();
const PORT = 8001;
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/url");

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener")
    .then(() => {
        console.log(`Server started at PORT ${PORT}`);
    })

app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => console.log("mongoDB Connected"));
