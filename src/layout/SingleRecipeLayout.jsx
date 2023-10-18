import { Outlet } from "react-router-dom";
import SingleRecipe from "../pages/SingleRecipe";

const SingleRecipeLayout = () => {
  return (
    <div>
      <SingleRecipe />
      <Outlet />
    </div>
  );
};
export default SingleRecipeLayout;
