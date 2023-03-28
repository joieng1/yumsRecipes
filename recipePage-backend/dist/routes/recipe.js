"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var recipeSchema_1 = __importDefault(require("../models/recipeSchema"));
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
// get all recipes
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var recipes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, recipeSchema_1["default"].find({})];
            case 1:
                recipes = _a.sent();
                res.send(recipes);
                return [2 /*return*/];
        }
    });
}); });
// get specific recipe using recipe's link name
router.get("/:name", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, recipe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = req.params.name;
                return [4 /*yield*/, recipeSchema_1["default"].findOne({
                        link_name: name
                    })];
            case 1:
                recipe = _a.sent();
                res.send(recipe);
                return [2 /*return*/];
        }
    });
}); });
// update ingredient in recipe
router.put("/:name/ingredient", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var recipe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, recipeSchema_1["default"].findOne({
                    link_name: req.params.name
                })];
            case 1:
                recipe = _a.sent();
                if (!recipe) return [3 /*break*/, 3];
                recipe.ingredients = __spreadArray(__spreadArray([], recipe.ingredients, true), [req.body.ingredient], false);
                return [4 /*yield*/, recipe.save()];
            case 2:
                _a.sent();
                res.send("Added ingredient");
                return [3 /*break*/, 4];
            case 3:
                res.send("Failed to add ingredient");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
//update instruction in recipe
router.put("/:name/instruction", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var recipe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, recipeSchema_1["default"].findOne({
                    link_name: req.params.name
                })];
            case 1:
                recipe = _a.sent();
                if (!recipe) return [3 /*break*/, 3];
                recipe.instructions = __spreadArray(__spreadArray([], recipe.instructions, true), [req.body.instruction], false);
                return [4 /*yield*/, recipe.save()];
            case 2:
                _a.sent();
                res.send("Added instruction");
                return [3 /*break*/, 4];
            case 3:
                res.send("Failed to add instruction");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
//insert new recipe
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, link_name, name, image, description, instructions, ingredients, newRecipe, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, link_name = _a.link_name, name = _a.name, image = _a.image, description = _a.description, instructions = _a.instructions, ingredients = _a.ingredients;
                newRecipe = new recipeSchema_1["default"]({
                    link_name: link_name,
                    name: name,
                    image: image,
                    description: description,
                    instructions: instructions,
                    ingredients: ingredients
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newRecipe.save()];
            case 2:
                newRecipe = _b.sent();
                res.send("Recipe added to collection: \n Link Name: ".concat(link_name, " \n Name: ").concat(name, " \n Image: ").concat(image, " \n Description: ").concat(description, " \n Instructions: ").concat(instructions, " \n Ingredients: ").concat(ingredients));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                res.status(500).send(error_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;
