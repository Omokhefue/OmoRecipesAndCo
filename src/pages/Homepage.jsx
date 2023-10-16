import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="home">
      <div className="hero-section">
        <img src="../../src/assets/images/hero-image.jpg" alt="hero-image" />
        <div className="hero-content">
          <h1>Discover Delicious Recipes</h1>
          <p>
            Explore a world of culinary delights with our collection of
            mouthwatering recipes.
          </p>

          <Link href="#recipes" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
      {/* category preview component */}
      <section className="homepage-preview-section">
        <h2 className="preview-section-title">Categories</h2>
        <div className="preview">
          <img src="../../src/assets/images/category/italian.jpeg" alt="" />
          <p>Italian</p>
        </div>
        <div className="preview">
          <img src="../../src/assets/images/category/nigerian.jpeg" alt="" />
          <p>Nigerian</p>
        </div>
        <div className="preview">
          <img src="../../src/assets/images/category/chinese.jpeg" alt="" />
          <p>Chinese</p>
        </div>
        <div className="preview">
          <img src="../../src/assets/images/category/kenyan.jpeg" alt="" />
          <p>Kenyan</p>
        </div>
        <div className="preview">
          <img src="../../src/assets/images/category/thai.jpeg" alt="" />
          <p>Thai</p>
        </div>
        <div className="preview">
          <img src="../../src/assets/images/category/ghanaian.jpeg" alt="" />
          <p>Ghanaian</p>
        </div>
      </section>
      {/* recipe preview component */}
      <section className="homepage-preview-section">
        <h2 className="preview-section-title">Recipes</h2>
       {/* Italian  */}
        <div className="preview">
          <img
            src="../../src/assets/images/recipe/fettuccine-alfredo.jpeg"
            alt=""
          />
          <p>Fettucina alfredo with shrimp recipe</p>
        </div>
        {/* nigerian */}
        <div className="preview">
          <img src="../../src/assets/images/recipe/efo-riro.jpeg" alt="" />
          <p>Efo riro</p>
        </div>
        {/* chinese */}
        <div className="preview">
          <img
            src="../../src/assets/images/recipe/chicken-with-noodles.jpeg"
            alt=""
          />
          <p>Hoisin Chicken With Noodles</p>
        </div>
        {/* kenyan */}
        <div className="preview">
          <img
            src="../../src/assets/images/recipe/mbuzi-meatball-mshikaki.jpeg"
            alt=""
          />
          <p>Mbuzi Meatball Mshikaki</p>
        </div>
        {/* thai */}
        <div className="preview">
          <img
            src="../../src/assets/images/recipe/chicken-satay-skewers.jpeg"
            alt=""
          />
          <p>Chicken Satay Skewers</p>
        </div>
        {/* ghanaian */}
        <div className="preview">
          <img src="../../src/assets/images/recipe/palava-sauce.jpeg" alt="" />
          <p>Palava Sauce</p>
        </div>
      </section>
    </section>
  );
};
export default Homepage;
