import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigation,
} from "react-router-dom";
import Home from "./pages/Homepage";
import About from "./pages/About";

import RootLayout from "./layout/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
