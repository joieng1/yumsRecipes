import "./About.css";

function About() {
    return (
        <main>
            <h1 className="title-color text-center">About Me</h1>
            <p className="abt-p text-center">
                I don't really know how to cook, but my roomate suggested I do
                baking recipes, so I included recipes to my three favorite
                treats. Enjoy.
            </p>
            <h1 className="title-color text-center margin-spacing">
                Recipe sources
            </h1>
            <ol>
                <li className="text-center sources">
                    <a
                        className="source-links ft-size"
                        href="https://preppykitchen.com/lemon-bars/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lemon Bars Recipe
                    </a>
                </li>
                <li className="text-center">
                    <img
                        className="source-img"
                        src="https://preppykitchen.com/wp-content/uploads/2020/02/lemon-bars-blog-2a-1140x1271.jpg"
                        height="300"
                        width="300"
                        alt="lemon bars"
                    />
                </li>
                <li className="text-center sources">
                    <a
                        className="source-links ft-size"
                        href="https://www.tasteofhome.com/recipes/poppy-seed-cake/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Poppy Cake Recipe
                    </a>
                </li>
                <li className="text-center">
                    <img
                        className="source-img"
                        src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps35606_TH1115229D33B-6.jpg"
                        height="300"
                        width="300"
                        alt="poppy cake"
                    />
                </li>
                <li className="text-center sources">
                    <a
                        className="source-links ft-size"
                        href="https://tastesbetterfromscratch.com/peach-cobbler/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Peach Cobbler Recipe
                    </a>
                </li>
                <li className="text-center">
                    <img
                        className="source-img"
                        src="https://tastesbetterfromscratch.com/wp-content/uploads/2014/08/Peach-Cobbler-13.jpg"
                        height="300"
                        width="300"
                        alt="peach cobbler"
                    />
                </li>
            </ol>
        </main>
    );
}

export default About;
