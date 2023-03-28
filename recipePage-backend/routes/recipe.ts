import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// get all recipes
router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
});

// get specific recipe using recipe's link name
router.get("/:name", async (req: Request, res: Response) => {
    const { name } = req.params;
    const recipe = await Recipe.findOne({
        link_name: name,
    });
    res.send(recipe);
});

// update ingredient in recipe
router.put("/:name/ingredient", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({
        link_name: req.params.name,
    });
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save();
        res.send("Added ingredient");
    } else {
        res.send("Failed to add ingredient");
    }
});

//update instruction in recipe
router.put("/:name/instruction", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({
        link_name: req.params.name,
    });
    if (recipe) {
        recipe.instructions = [...recipe.instructions, req.body.instruction];
        await recipe.save();
        res.send("Added instruction");
    } else {
        res.send("Failed to add instruction");
    }
});

//insert new recipe
router.post("/", async (req: Request, res: Response) => {
    const { link_name, name, image, description, instructions, ingredients } =
        req.body;
    let newRecipe = new Recipe({
        link_name,
        name,
        image,
        description,
        instructions,
        ingredients,
    });
    try {
        newRecipe = await newRecipe.save();
        res.send(
            `Recipe added to collection: \n Link Name: ${link_name} \n Name: ${name} \n Image: ${image} \n Description: ${description} \n Instructions: ${instructions} \n Ingredients: ${ingredients}`
        );
    } catch (error: Error | any) {
        res.status(500).send(error.message);
    }
});
export default router;
