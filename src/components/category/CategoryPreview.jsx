import { Link, useLoaderData, useParams } from "react-router-dom";

const CategoryPreview = () => {
  const categories = useLoaderData();
  return (
    <section className="preview-section">
      {categories &&
        categories.map((category) => (
          <Link className="preview" key={category._id} to={`${category._id}`}>
            <img
              src={`http://localhost:5000/${category.image}`}
              alt={category.name}
            />
            <p>{category.name}</p>
          </Link>
        ))}
    </section>
  );
};
export default CategoryPreview;

export const CategoriesLoader = async () => {
  const res = await fetch(" http://localhost:5000/api/v1/categories");
  const data = await res.json();
  console.log(data);
  return data;
};
