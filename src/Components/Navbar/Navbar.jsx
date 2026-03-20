import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount, search, setSearch }) => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand logo-text" to="/">
          Biryani Hub
        </Link>

        {/* Cart (Mobile) */}
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

          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>

            

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            {/* Cart */}
            <Link to="/cart" className="cart-box">
              <i className="bi bi-cart3"></i>
              <span className="cart-count">{cartCount}</span>
            </Link>

            {/* 🔐 Auth Section */}
            {isLoggedIn ? (
              <>
                <span className="user-name">
                  Hi, {user?.name} 👋
                </span>

                {/* 🧾 My Orders Button */}
                <Link to="/orders" className="btn btn-light btn-sm px-3 orders-btn">
  📦 Orders
</Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary btn-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Register
                </Link>
              </>
            )}

            {/* Search */}
            <form className="d-flex align-items-center search-box">
 <input
  type="text"
  className="form-control search-input"
  placeholder="Search food..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
</form>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;