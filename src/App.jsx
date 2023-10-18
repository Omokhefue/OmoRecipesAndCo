import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Category from "./pages/Category";
import { Homepage } from "./pages/Homepage";
import Recipe from "./pages/Recipe";
import SingleCategory, { SingleCategoryLoader } from "./pages/SingleCategory";
import { CategoriesLoader } from "./components/category/CategoryPreview";
import { RecipesLoader } from "./components/recipe/RecipePreview";
import {
  SingleRecipeLoader,
} from "./components/recipe/RecipeDetails";
import RecipeComments, { RecipeCommentsLoader } from "./pages/RecipeComments";
import SingleRecipeLayout from "./layout/SingleRecipeLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Homepage />}
        // loader={(RecipesLoader, CategoriesLoader)}
        loader={RecipesLoader}
      />
      <Route
        path="categories"
        element={<Category />}
        loader={CategoriesLoader}
      />
      <Route path="recipes" element={<Recipe />} loader={RecipesLoader} />
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
          loader={RecipeCommentsLoader}
        />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
