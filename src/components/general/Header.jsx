import { NavLink } from "react-router-dom";

const Header = () => {
  const openMenu = (e) => {
    document.querySelector(".close-btn").style.display = "block";
    document.querySelector("nav").style.display = "flex";

    e.currentTarget.style.display = "none";
  };

  const closeMenu = (e) => {
    e.currentTarget.style.display = "none";
    document.querySelector("nav").style.display = "none";
    document.querySelector(".profile-icon").style.display = "none";
    document.querySelector(".hamburger-menu").style.display = "block";
  };
  return (
    <header>
      <h1>MoRecipes</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Category</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/submit-recipe">Submit</NavLink>
        <NavLink to="/register">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <div className="profile-icon">
        <img src="../../src/assets/svg/user-regular.svg" alt="profile-image" />
      </div>
      <div className="hamburger-menu" onClick={openMenu}>
        <img src="../../src/assets/svg/hamburger-menu.svg" alt="open-menu" />
      </div>
      <div className="close-btn" onClick={closeMenu}>
        <img src="../../src/assets/svg/close-btn.svg" alt="close-menu" />
      </div>
    </header>
  );
};
export default Header;
