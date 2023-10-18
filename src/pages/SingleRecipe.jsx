import RecipeDetails from "../components/recipe/RecipeDetails";
import { Link, useParams } from "react-router-dom";

const SingleRecipe = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <RecipeDetails />
      <Link to="comments">Show Comments</Link>
    </>
  );
};
export default SingleRecipe;
