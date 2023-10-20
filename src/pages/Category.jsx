import { useLayoutEffect } from "react";
import CategoryPreview from "../components/category/CategoryPreview";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const { categories, isPending } = useLoaderData();
  console.log(categories);
  return (
    <div>
      <h2 className="preview-section-title">Categories</h2>
      <CategoryPreview categories={categories} />
    </div>
  );
};
export default Category;

export const CategoriesLoader = async () => {
  let isPending = true;
  const res = await fetch("http://localhost:5000/api/v1/categories/");
  if (!res.ok) {
    isPending = false;
    return;
  }
  const categories = await res.json();
  isPending = false;
  return { categories, isPending };
};
