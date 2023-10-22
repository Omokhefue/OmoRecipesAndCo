import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeForm = ({ categories, fieldValues }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: fieldValues?.name || "",
    email: fieldValues?.email || "",
    category: fieldValues?.category?.name, // Set the default value for the category field
  });

  // Initialize instructions and ingredients arrays based on fieldValues
  const [instructionsArray, setInstructionArray] = useState(
    fieldValues?.instructions || [""]
  );
  const [ingredientsArray, setIngredientsArray] = useState(
    fieldValues?.ingredients || [""]
  );
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
    let apiURL, method;

    if (fieldValues) {
      apiURL = "http://localhost:5000/api/v1/recipes/" + fieldValues._id;
      method = "PUT";
    } else {
      apiURL = "http://localhost:5000/api/v1/recipes/add-recipe";
      method = "POST";
    }
    try {
      const res = await fetch(apiURL, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!res.ok) {
        throw Error("There was an error creating the recipe. Please try again");
      }
      const { recipe } = await res.json();
      console.log(recipe);
      navigate("/recipes/" + recipe._id);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="recipe-form-input">
        <label className="recipe-form-label">Recipe Title</label>
        <input
          type="text"
          name="name"
          className="recipe-form-text-input"
          placeholder="Enter Recipe Title"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="recipe-form-input">
        <label className="recipe-form-label">Email</label>
        <input
          type="email"
          name="email"
          className="recipe-form-text-input"
          placeholder="Enter Your Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          <option value={fieldValues?.category?._id}>
            {formData.category || "Select Category"}
          </option>
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
          {fieldValues ? "Edit Recipe" : "Add Recipe"}
        </button>
      </div>
    </form>
  );
};
export default RecipeForm;
