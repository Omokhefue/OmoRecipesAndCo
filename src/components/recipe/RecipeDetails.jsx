import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecipeDetails = ({ recipe, isPending, link }) => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState(recipe);
  const RecipeLikesLoader = async (id) => {
    const token = localStorage.getItem("access_token"); // Retrieve the token

    const res = await fetch("http://localhost:5000/api/v1/likes/recipe/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw Error("there was an error liking the recipe. Please try again");
    }
    const data = await res.json();

    const updatedRecipe = {
      ...recipeData,
      likesCount: data.likes,
    };

    setRecipeData(updatedRecipe);
  };
  const handleDeleteRecipe = async (id) => {
    const token = localStorage.getItem("access_token"); // Retrieve the token
    try {
      const res = await fetch("http://localhost:5000/api/v1/recipes/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw Error("there was an error deleting the recipe. Please try again");
      }
      const data = await res.json();

      navigate("/recipes");
    } catch (err) {
      console.log(err.message);
    }
  };
  const scrollTo = () => {
    document
      .querySelector("#add-comment")
      .scrollIntoView({ behavior: "smooth" });
  };
  const {
    _id,
    title,
    image,
    email,
    category,
    ingredients,
    instructions,
    createdAt,
    likesCount,
  } = recipeData;
  console.log(image);
  return (
    <section className="recipe-details-container">
      {isPending && <p className="loading">Loading...</p>}
      {recipeData && (
        <div className="recipe-details" key={_id}>
          <h2 className="recipe-title">{title}</h2>
          <p className="recipe-author">
            By <span>Temi</span>
          </p>
          <Link to={link} onClick={scrollTo}>
            Add Comment
          </Link>
          <div className="recipe-details-image">
            <img
              src={`http://localhost:5000/images/recipe/${image}`}
              alt={title}
              className="recipe-image"
            />
          </div>
          <div>
            <button
              className="delete-recipe-button"
              onClick={() => handleDeleteRecipe(_id)}
            >
              Delete{" "}
            </button>
            <Link to="/api/recipes/edit-recipe" className="edit-recipe-link">
              Edit
            </Link>
            <p className="likes-count">
              <img
                src="../../src/assets/svg/heart.svg"
                alt=""
                onClick={() => RecipeLikesLoader(_id)}
              />
              <span>{likesCount} </span>
            </p>
            <p className="email">Email: {email}</p>
            <p className="category">Category: {category?.name}</p>

            <div className="recipe-section">
              <div className="ingredients-section">
                <h3 className="section-title">Ingredients</h3>
                <ul className="ingredients-list">
                  {ingredients?.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="instructions-section">
                <h3 className="section-title">Instructions</h3>
                <ol className="instructions-list">
                  {instructions?.map((instruction, index) => (
                    <li key={index} className="instruction-item">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <p className="created-at">Created At: {createdAt}</p>
          </div>
        </div>
      )}
      <Link to="comments" className="show-comments-link">
        Show Comments
      </Link>
      {/* {error && <p className="error-message">{error}</p>} */}
    </section>
  );
};

export default RecipeDetails;
