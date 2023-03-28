"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RecipeSchema = new mongoose_1.Schema({
    link_name: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    instructions: { type: [String], required: true },
    ingredients: { type: [String], required: true }
}, { collection: "Recipes" });
var Recipe = (0, mongoose_1.model)("Recipe", RecipeSchema);
exports["default"] = Recipe;
