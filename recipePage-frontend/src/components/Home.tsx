import "./Home.css";
import RecipeCard from "./RecipePreview";
import React, { useEffect, useState } from "react";

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    const [myRecipes, setMyRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => {
                setExternalRecipes(data);
            });
        fetch("https://myrecipes-backend.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => {
                setMyRecipes(data);
                setLoading(false);
            });
    }, []);
    return (
        <main>
            <h1 className="title">Check out some of our favorites!</h1>
            <h1 className="loading">{loading ? <>Loading...</> : <></>}</h1>
            {/* <!-- list of recipes --> */}
            <div className="container-recipes">
                {myRecipes.map((recipe) => (
                    <RecipeCard
                        name={recipe.name}
                        image={recipe.image}
                        desc={recipe.description}
                        external={false}
                    />
                ))}
                {externalRecipes.map((recipe) => (
                    <RecipeCard
                        name={recipe.name}
                        image={recipe.image}
                        desc={recipe.description}
                        external
                    />
                ))}
            </div>
        </main>
    );
}

export default Home;
