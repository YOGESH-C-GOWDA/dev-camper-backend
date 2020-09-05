const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require("./routes/bootcamp.js");
const morgan = require('morgan');
const logger = require("./middleware/logger.js")

// Congif env file using dotenv
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(morgan("dev"));
app.use(logger);
app.use("/api/v1/bootcamp", bootcamp);

// Initialise all evn variatble to variabe
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(5000, console.log(`serevr listing at ${PORT} 
and running in Enviroment ${NODE_ENV}`));
