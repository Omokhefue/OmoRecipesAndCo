import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Category from "./pages/Category";
import { HomePageLoader, Homepage } from "./pages/Homepage";
import Recipe, { RecipesLoader } from "./pages/Recipe";
import SingleCategory, { SingleCategoryLoader } from "./pages/SingleCategory";
import { CategoriesLoader } from "./pages/Category";
import { SingleRecipeLoader } from "./pages/SingleRecipe";
import RecipeComments, { CommentSectionLoader } from "./pages/RecipeComments";
import SingleRecipeLayout from "./layout/SingleRecipeLayout";
import SubmitRecipe, { SubmitRecipeFormLoader } from "./pages/SubmitRecipe";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import SubmitComment from "./pages/SubmitComment";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} loader={HomePageLoader} />
      <Route
        path="categories"
        element={<Category />}
        loader={CategoriesLoader}
      />
      <Route path="recipes" element={<Recipe />} loader={RecipesLoader} />
      <Route path="register" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route
        path="categories/:id"
        element={<SingleCategory />}
        loader={SingleCategoryLoader}
      />
      <Route
        path="recipes/:id"
        element={<SingleRecipeLayout />}
        loader={SingleRecipeLoader}
      >
        <Route
          path="comments"
          element={<RecipeComments />}
          loader={CommentSectionLoader}
        />
        <Route path="add-comment" element={<SubmitComment />} />
      </Route>
      <Route
        path="submit-recipe"
        element={<SubmitRecipe />}
        loader={SubmitRecipeFormLoader}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
