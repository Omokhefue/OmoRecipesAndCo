import { useRef } from "react";

const SubmitRecipe = () => {
  const ingredientLabelRef = useRef(null);
  const instructionLabelRef = useRef(null);

  const addInputField = (element) => {
    const newInput = ` <input
              type="text"
              className="recipe-form-text-input"
              placeholder="..."
            />`;

    if (element === "ingredient") {
      ingredientLabelRef.current.innerHTML += newInput;
    }
    if (element === "instruction") {
      instructionLabelRef.current.innerHTML += newInput;
    }
  };

  return (
    <section className="recipe-form">
      <h1 className="recipe-form-title">Share Your Recipe for FREE</h1>
      <form>
        <div className="recipe-form-input">
          <label className="recipe-form-label">
            Recipe Title
            <input
              type="text"
              name="title"
              className="recipe-form-text-input"
              placeholder="Enter the Recipe Title"
            />
          </label>
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">
            Email
            <input
              type="email"
              className="recipe-form-text-input"
              placeholder="Enter Your Email Address"
            />
          </label>
        </div>

        <div className="recipe-form-input">
          <label
            className="recipe-form-label"
            id="ingredientLabel"
            ref={ingredientLabelRef}
          >
            Ingredients
            <input
              type="text"
              className="recipe-form-text-input"
              placeholder="Add an Ingredient"
            />
          </label>
          <button
            type="button"
            className="recipe-form-button"
            id="addIngredientButton"
            onClick={() => addInputField("ingredient")}
            // onClick={() => addInputField(null)}
          >
            <span>
              <img src="../../src/assets/svg/add-btn.svg" alt="" />
            </span>
          </button>
        </div>

        <div className="recipe-form-input">
          <label
            className="recipe-form-label"
            id="instructionLabel"
            ref={instructionLabelRef}
          >
            Instructions
            <input
              type="text"
              className="recipe-form-text-input"
              placeholder="Step 1"
            />
          </label>
          <button
            type="button"
            className="recipe-form-button"
            id="addInstructionButton"
            onClick={() => addInputField("instruction")}
          >
            <span>
              <img src="../../src/assets/svg/add-btn.svg" alt="" />
            </span>
          </button>
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">
            Recipe Image
            <input type="file" name="image" accept="image/*" />
          </label>
        </div>

        <div className="recipe-form-input">
          <label className="recipe-form-label">
            Recipe Category
            <select className="recipe-form-select">
              <option value="default-value">Select Recipe Category</option>
              <option value="Nigerian">Nigerian</option>
              <option value="Ghanaian">Ghanaian</option>
              <option value="Thai">Thai</option>
              <option value="Chinese">Chinese</option>
              <option value="Kenyan">Kenyan</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Brazilian">Brazilian</option>
              <option value="Greek">Greek</option>
            </select>
          </label>
        </div>
        <div className="recipe-form-input">
          <button type="submit" className="recipe-form-button">
            Submit Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubmitRecipe;
