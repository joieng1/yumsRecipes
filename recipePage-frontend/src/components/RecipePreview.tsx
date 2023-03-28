import "./RecipePreview.css";
import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    desc: string;
    external: boolean;
}
interface ExternalRecipe extends Recipe {
    external: boolean;
}
export default function RecipePreview(props: Recipe | ExternalRecipe) {
    let address = "";
    if (props.external) {
        address = `/externalRecipe/${props.name
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "")}`;
    } else {
        address = `/recipes/${props.name
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "")}`;
    }
    return (
        <div className="card">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-body">
                <img
                    className="card-img"
                    src={props.image}
                    width="250"
                    height="250"
                    alt="recipe"
                />
                <p className="card-disc">{props.desc}</p>
                <Link className="card-btn" to={address}>
                    Go
                </Link>
            </div>
        </div>
    );
}
