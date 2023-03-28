import { Document, Schema, model } from "mongoose";

export interface MyRecipe extends Document {
    link_name: string;
    name: string;
    image: string;
    description: string;
    instructions: string[];
    ingredients: string[];
}

const RecipeSchema = new Schema<MyRecipe>(
    {
        link_name: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        instructions: { type: [String], required: true },
        ingredients: { type: [String], required: true },
    },
    { collection: "Recipes" }
);

const Recipe = model<MyRecipe>("Recipe", RecipeSchema);
export default Recipe;
