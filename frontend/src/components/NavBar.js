import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2> Accounting Services</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__Link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/*hamburger*/}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
