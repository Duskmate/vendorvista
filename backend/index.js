const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const routes = require("./routes/v1")
const config = require("./config")

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// Reroute all API request starting with "/v1" route
app.use("/v1", routes);

const port = process.env.port || 8082
mongoose.connect(config.mongoose.url).then(() => {
    console.log("Connected to MongoDB");

    // Start the Node Server
    app.listen(port, () => {
        console.log(`App is running on port ${port}`)
    })
})