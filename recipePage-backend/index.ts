import { Express } from "express";
import recipeRoutes from "./routes/recipe";
import dotenv from "dotenv";

dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL;

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express

const cors = require("cors");
app.use(express.json());

const mongoose = require("mongoose");
const connection_url = DATABASE_URL;

mongoose
    .connect(connection_url)
    .then(() => console.log("Successfully connected"))
    .catch((error: any) =>
        console.error(`Could not connect due to") ${error}`)
    );

// to address CORS issue
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
//     next();
// });
app.use(
    cors({
        origin: "*",
    })
);

app.use("/recipe", recipeRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(3005);
