import { Link } from "react-router-dom";
import CategoryPreview, {
  CategoriesLoader,
} from "../components/category/CategoryPreview";
import RecipePreview, {
  RecipesLoader,
} from "../components/recipe/RecipePreview";

export const Homepage = () => {
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

          <Link href="#recipes" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
      {/* category preview component */}
      <h2 className="preview-section-title">Categories</h2>
      <CategoryPreview />
      <Link to="/categories" className="preview-section-link">
        <button className="preview-section-button">
          Check out more Categories
        </button>
      </Link>
      {/* recipe preview component */}

      <h2 className="preview-section-title">Recipes</h2>
      <RecipePreview />
      <Link to="/recipes" className="preview-section-link">
        <button className="preview-section-button">
          Check out more Recipes
        </button>
      </Link>
    </section>
  );
};
