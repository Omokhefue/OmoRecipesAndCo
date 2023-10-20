import RecipeDetails from "../components/recipe/RecipeDetails";
import { Link, useLoaderData } from "react-router-dom";

const SingleRecipe = () => {
  const { recipe, isPending } = useLoaderData();
  return (
    <>
      <RecipeDetails recipe={recipe} isPending={isPending} link={'add-comment'} />

    </>
  );
};
export default SingleRecipe;

export const SingleRecipeLoader = async ({ params }) => {
  let isPending = true;
  const res = await fetch("http://localhost:5000/api/v1/recipes/" + params.id);
  if (!res.ok) {
    isPending = false;
    return;
  }
  const recipe = await res.json();
  isPending = false;
  return { recipe, isPending };
};
