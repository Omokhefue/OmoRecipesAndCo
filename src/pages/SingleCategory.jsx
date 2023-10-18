import { useLoaderData, useParams } from "react-router-dom";
import RecipePreview from "../components/recipe/RecipePreview";

const SingleCategory = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <main>
      <RecipePreview category={category} />
    </main>
  );
};
export default SingleCategory;

export const SingleCategoryLoader = async ({ params }) => {
  const res = await fetch(
    "http://localhost:5000/api/v1/categories/" + params.id
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
};
