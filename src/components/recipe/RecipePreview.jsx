import { useLoaderData } from "react-router-dom";

const RecipePreview = ({ category }) => {
  let recipes;

  if (category) {
    recipes = category.recipes;
  } else {
    const data = useLoaderData();
    recipes = data;
  }

  return (
    <>
      <section className="preview-section">
        {recipes &&
          recipes.map((recipe) => (
            <a
              className="preview"
              key={recipe._id}
              href={`/recipes/${recipe._id}`}
            >
              <img
                src={`http://localhost:5000/${recipe.image}`}
                alt={recipe.title}
              />
              <p>{recipe.title}</p>
            </a>
          ))}
      </section>
    </>
  );
};
export default RecipePreview;

export const RecipesLoader = async ({}) => {
  const res = await fetch("http://localhost:5000/api/v1/recipes/latest");
  const data = await res.json();
  return data;
};
