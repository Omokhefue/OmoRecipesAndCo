import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SubmitRecipe = () => {
  const navigate = useNavigate();
  const [instructionsArray, setInstructionArray] = useState([""]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const categories = useLoaderData();
  const handleAddInput = (field) => {
    if (field === "instructions") {
      setInstructionArray([...instructionsArray, ""]);
    } else if (field === "ingredients") {
      setIngredientsArray([...ingredientsArray, ""]);
    }
  };

  const handleInputChange = (field, index, value) => {
    if (field === "instructions") {
      const updatedArray = [...instructionsArray];
      updatedArray[index] = value;

      setInstructionArray(updatedArray);
    } else if (field === "ingredients") {
      const updatedArray = [...ingredientsArray];
      updatedArray[index] = value;

      setIngredientsArray(updatedArray);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    instructionsArray.forEach((instruction) => {
      formData.append("instructions", instruction);
    });
    ingredientsArray.forEach((ingredient) => {
      formData.append("ingredients", ingredient);
    });
    const token = localStorage.getItem("access_token"); // Retrieve the token
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/recipes/add-recipe",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (!res.ok) {
        throw Error("there was an error creating the recipe. Please try again");
      }
      const { recipe } = await res.json();
      navigate("/recipes/" + recipe._id);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="recipe-form">
      <h1 className="recipe-form-title">Publish your recipe for FREE today</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="recipe-form-input">
          <label className="recipe-form-label">Recipe Title</label>
          <input
            type="text"
            name="title"
            className="recipe-form-text-input"
            placeholder="Enter Recipe Title"
          />
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">Email</label>
          <input
            type="email"
            name="email"
            className="recipe-form-text-input"
            placeholder="Enter Your Email Address"
          />
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">Ingredients</label>
          {ingredientsArray.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) =>
                handleInputChange("ingredients", index, e.target.value)
              }
              className="recipe-form-text-input"
              placeholder={`Ingredient ${index + 1}`}
            />
          ))}

          <button
            type="button"
            onClick={() => handleAddInput("ingredients")}
            className="recipe-form-button"
          >
            <span>
              {ingredientsArray.length < 1 ? (
                "Add Ingredients"
              ) : (
                <img src="../../src/assets/svg/add-btn.svg" alt="" />
              )}
            </span>
          </button>
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">Instructions</label>
          {instructionsArray.map((instruction, index) => (
            <input
              key={index}
              type="text"
              value={instruction}
              onChange={(e) =>
                handleInputChange("instructions", index, e.target.value)
              }
              className="recipe-form-text-input"
              placeholder={`Step ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddInput("instructions")}
            className="recipe-form-button"
          >
            <span>
              <img src="../../src/assets/svg/add-btn.svg" alt="" />
            </span>
          </button>
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="recipe-form-text-input"
          />
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">Category</label>
          <select name="category" className="recipe-form-select">
            <option value="default-value">Select Category</option>

            {categories &&
              categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>

        <div className="recipe-form-input">
          <button type="submit" className="recipe-form-button">
            Add Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubmitRecipe;

export const SubmitRecipeFormLoader = async () => {
  const res = await fetch("http://localhost:5000/api/v1/categories/");
  if (!res.ok) {
    isPending = false;
    return;
  }
  const categories = await res.json();
  return categories;
};
