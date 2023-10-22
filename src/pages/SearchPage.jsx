import { useLocation, useNavigate } from "react-router-dom";
import Preview from "../components/general/Preview";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = location.state?.searchTerm;

  // State to store the fetched recipe data
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    if (searchTerm === "" || searchTerm === undefined) {
      navigate(-1);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/recipes/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ searchTerm }),
        });

        if (!res.ok) {
          throw Error(
            "There was an error getting that recipe. Please try again"
          );
        }

        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [searchTerm, navigate]);

  return <Preview resources={recipes} />;
};

export default SearchPage;
