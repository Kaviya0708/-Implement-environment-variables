const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Read values from .env
const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME;
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
    res.json({
        application: APP_NAME,
        apiKey: API_KEY,
        message: "Environment Variables Working!"
    });
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} running on port ${PORT}`);
});