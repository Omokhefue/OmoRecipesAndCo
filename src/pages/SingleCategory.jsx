import { useLoaderData, useParams } from "react-router-dom";
import RecipePreview from "../components/recipe/RecipePreview";

const SingleCategory = () => {
  const categoryRecipes = useLoaderData();
  console.log(categoryRecipes);
  return (
    <main>
      <RecipePreview recipes={categoryRecipes} />
    </main>
  );
};
export default SingleCategory;

export const SingleCategoryLoader = async ({ params }) => {
  const res = await fetch(
    "http://localhost:5000/api/v1/categories/" + params.id
  );
  const categoryRecipes = await res.json();
  return categoryRecipes;
};
