"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var recipe_1 = __importDefault(require("./routes/recipe"));
var express = require("express"); // 1. includes Express
var app = express(); // 2. initializes Express
var cors = require("cors");
app.use(express.json());
var mongoose = require("mongoose");
var connection_url = "mongodb+srv://joieng1:MRjqzknb5gyNOtcf@cluster0.0hcjlbe.mongodb.net/RecipesDB?retryWrites=true&w=majority";
mongoose
    .connect(connection_url)
    .then(function () { return console.log("Successfully connected"); })["catch"](function (error) {
    return console.error("Could not connect due to\") ".concat(error));
});
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
app.use(cors({
    origin: "*"
}));
app.use("/recipe", recipe_1["default"]);
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(3001);
