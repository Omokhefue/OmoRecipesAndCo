import { useLoaderData } from "react-router-dom";
import RecipePreview from "../components/recipe/RecipePreview";

const Recipe = () => {
  const { recipes, isPending } = useLoaderData();
  console.log(recipes);
  return (
    <>
      <h2 className="preview-section-title">Recipes</h2>
      <RecipePreview recipes={recipes} />
    </>
  );
};
export default Recipe;

export const RecipesLoader = async () => {
  let isPending = true;
  const res = await fetch("http://localhost:5000/api/v1/recipes/");
  if (!res.ok) {
    isPending = false;
    console.log("error getting all recipes");
    return;
  }
  const recipes = await res.json();
  isPending = false;
  return { recipes, isPending };
};
