import { Link, useLoaderData } from "react-router-dom";
import CategoryPreview from "../components/category/CategoryPreview";
import RecipePreview from "../components/recipe/RecipePreview";

export const Homepage = () => {
  const { recipes, categories } = useLoaderData();
  return (
    <section className="home">
      <div className="hero-section">
        <img src="../../src/assets/images/hero-image.jpg" alt="hero-image" />
        <div className="hero-content">
          <h1>Discover Delicious Recipes</h1>
          <p>
            Explore a world of culinary delights with our collection of
            mouthwatering recipes.
          </p>

          <Link to="random-recipe" className="cta-button">
            Random Recipe
          </Link>
        </div>
      </div>
      {/* category preview component */}
      <h2 className="preview-section-title">Categories</h2>
      <CategoryPreview categories={categories} />
      <Link to="/categories" className="preview-section-link">
        <button className="preview-section-button">
          Check out more Categories
        </button>
      </Link>
      {/* recipe preview component */}

      <h2 className="preview-section-title">Recipes</h2>
      <RecipePreview recipes={recipes} />
      <Link to="/recipes" className="preview-section-link">
        <button className="preview-section-button">
          Check out more Recipes
        </button>
      </Link>
    </section>
  );
};

export const HomePageLoader = async () => {
  const res = await fetch("http://localhost:5000/api/v1/recipes/random");
  const recipes = await res.json();
  const data = await fetch(" http://localhost:5000/api/v1/categories/homepage");
  const categories = await data.json();
  return { recipes, categories };
};
