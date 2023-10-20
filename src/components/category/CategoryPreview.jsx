import { Link } from "react-router-dom";

const CategoryPreview = ({ categories }) => {
  return (
    <section className="preview-section">
      {categories &&
        categories.map((category) => (
            <a
              className="preview"
              key={category._id}
              to={`${category._id}`}
              href={`categories/${category._id}`}
            >
              <img
                src={`http://localhost:5000/${category.image}`}
                alt={category.name}
              />
              <p>{category.name}</p>
            </a>
        ))}
    </section>
  );
};
export default CategoryPreview;
