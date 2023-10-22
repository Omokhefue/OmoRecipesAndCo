import { useLoaderData, useLocation } from "react-router-dom";
import RecipeForm from "../components/form/recipeForm";
const EditRecipe = () => {
  const location = useLocation();
  const { recipeData } = location.state;
  const categories = useLoaderData();

  return (
    <section className="recipe-form">
      <h1 className="recipe-form-title">Publish your recipe for FREE today</h1>
      <RecipeForm categories={categories} fieldValues={recipeData} />
    </section>
  );
};
export default EditRecipe;

export const SubmitRecipeFormLoader = async () => {
  const res = await fetch("http://localhost:5000/api/v1/categories/");
  if (!res.ok) {
    isPending = false;
    return;
  }
  const categories = await res.json();
  return categories;
};
