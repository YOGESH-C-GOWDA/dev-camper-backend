const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require("./routes/bootcamp.js");
const morgan = require('morgan');
const colors = require('colors');
const logger = require("./middleware/logger.js");
const connToMongoAtlas = require("./config/db.js");

// Congif env file using dotenv
dotenv.config({ path: './config/config.env' });

// Connect to mongodb via mongoose
connToMongoAtlas();

// Instatiating our Server
const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}
app.use(logger);
app.use("/api/v1/bootcamp", bootcamp);
app.use(express.json());




const server = app.listen(5000, console.log(`serevr listing at ${process.env.PORT} 
and running in Enviroment ${process.env.NODE_ENV}`.blue));

// Error Handling globally or Hadling rejections
process.on("unhandledRejection", (err, promice) => {
    console.log("\nError   ", err.message);
    server.close(() => (process.exit(1)))
})
