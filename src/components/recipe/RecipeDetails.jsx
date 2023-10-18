import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const RecipeDetails = () => {
  const { recipe, isPending } = useLoaderData();
  console.log(isPending);
  return (
    <section className="">
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <div className="">
          <div className="">
            <img
              src={`http://localhost:5000/${recipe.image}`}
              alt={recipe.title}
              className=""
            />
          </div>
          <div className="md:w-2/3">
            <button>Delete Recipe</button>
            <Link to="/api/recipes/edit-recipe">Edit Recipe</Link>
            <h2 className="">{recipe.title}</h2>
            <p>This recipe is liked by {recipe.likesCount} people</p>
            <p className="">Email: {recipe.email}</p>
            <p className="">Category: {recipe.category?.name}</p>
            <h3 className="">Ingredients:</h3>
            <ul className="">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
            <h3 className="">Instructions:</h3>
            <ol className="">
              {recipe.instructions?.map((instruction, index) => (
                <li key={index} className="">
                  {instruction}
                </li>
              ))}
            </ol>

            <p className="">Created At: {recipe.createdAt}</p>
          </div>
        </div>
      )}
      {/* {error && <p className="">{error}</p>} */}
    </section>
  );
};
export default RecipeDetails;

export const SingleRecipeLoader = async ({ params }) => {
  let isPending = true; // const [error, setError] = useState(true);
  const res = await fetch("http://localhost:5000/api/v1/recipes/" + params.id);
  if (!res.ok) {
    isPending = false;
    return;
  }
  const recipe = await res.json();
  isPending = false;
  return { recipe, isPending };
};
