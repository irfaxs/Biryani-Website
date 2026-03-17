import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand logo-text" to="/">
          Biryani Hub
        </Link>

        {/* Cart (Right side on desktop, top on mobile) */}
        <div className="cart-box d-lg-none ms-auto">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Center nav links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </span>

              <ul className="dropdown-menu">
                <li><span className="dropdown-item">Action</span></li>
                <li><span className="dropdown-item">Another action</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><span className="dropdown-item">Something else here</span></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>


          {/* Right side (desktop) */}
          <div className="d-flex align-items-center gap-3">

            <Link to="/cart" className="cart-box">
              <i className="bi bi-cart3"></i>
              <span className="cart-count">{cartCount}</span>
            </Link>



            <form className="d-flex">
              <input className="form-control me-2" placeholder="Search" />
              <button className="btn btn-outline-success">Search</button>
            </form>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
