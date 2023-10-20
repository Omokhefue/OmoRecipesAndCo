const RecipePreview = ({ recipes }) => {
  console.log(recipes);
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
